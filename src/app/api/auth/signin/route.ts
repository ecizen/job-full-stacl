import bcrypt from "bcrypt";
import db from "@/lib/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { signIn } from "next-auth/react";


export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Please provide email and password' },
        { status: 400 }
      );
    }

    // Authenticate user via NextAuth
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: 'User signed in' }, { status: 200 });
  } catch (error: any) {
    console.error('Sign-In Error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}