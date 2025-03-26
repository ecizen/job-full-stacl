import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcrypt';
import db from '@/lib/db';

const GOOGLE_CLIENT_ID: string | undefined = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET: string | undefined = process.env.GOOGLE_CLIENT_SECRET;

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db), // Menghubungkan Prisma sebagai adapter
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope: 'email profile', // Memastikan scope email dan profile diminta
        },
      },
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('Credentials not provided');
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) {
          throw new Error('Invalid credentials');
        }

        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  session: {
    strategy: 'jwt', // Sesi akan disimpan dalam tabel Session
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.image = user.image || '';
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        session.user = {
          id: token.id as string,
          name: token.name || '',
          email: token.email || '',
          image: token.image || '',
        };
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      if (account && account.provider === 'google') {
        const existingAccount = await db.account.findUnique({
          where: {
            provider_providerAccountId: {
              provider: account.provider,
              providerAccountId: account.providerAccountId,
            },
          },
        });
    
        if (!existingAccount) {
          // Cari pengguna berdasarkan email
          const existingUser = await db.user.findUnique({
            where: { email: user.email as string },
          });
    
          if (existingUser) {
            // Link akun OAuth ke pengguna yang sudah ada
            console.log('Linking OAuth account to existing user');
            await db.account.create({
              data: {
                userId: existingUser.id,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                access_token: account.access_token,
                refresh_token: account.refresh_token,
                expires_at: account.expires_at,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
              },
            });
          } else {
            console.log('Creating new user with Google account');
            // Jika pengguna tidak ditemukan, buat pengguna baru
            await db.user.create({
              data: {
                email: user.email as string,
                name: user.name as string,
                image: profile?.image || '',
                accounts: {
                  create: {
                    provider: account.provider,
                    providerAccountId: account.providerAccountId,
                    access_token: account.access_token,
                    refresh_token: account.refresh_token,
                    expires_at: account.expires_at,
                    token_type: account.token_type,
                    scope: account.scope,
                    id_token: account.id_token,
                  },
                },
              },
            });
          }
        }
        console.log('SignIn callback:', { user, account, profile });
      }
      return true;
    }
    
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// Code to query the account with provider and providerAccountId
const getAccountByProviderAndAccountId = async (provider: string, providerAccountId: string) => {
  try {
    const account = await db.account.findUnique({
      where: {
        provider_providerAccountId: {
          provider: provider,
          providerAccountId: providerAccountId,
        },
      },
      select: {
        user: true, 
        providerAccountId: true, 
      },
    });

    if (account) {
      console.log('Account already exists:', account);
    }

    if (account) {
      console.log('Checking if account exists for:', account.providerAccountId);
    }
    return account;
  } catch (error) {
    console.error('Error fetching account:', error);
    throw new Error('Unable to fetch account');
  }
};

// Example usage of the getAccountByProviderAndAccountId function
const exampleProvider = 'google';
const exampleProviderAccountId = '100503020958450297771'; // Replace with the actual provider account ID

getAccountByProviderAndAccountId(exampleProvider, exampleProviderAccountId)
  .then(account => {
    if (account) {
      console.log('Account found:', account);
    } else {
      console.log('Account not found');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });