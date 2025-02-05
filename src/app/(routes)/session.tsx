// components/SessionProvider.tsx
'use client'
import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';
import { useEffect, useState, ReactNode } from 'react';

interface SessionProviderProps {
    children: ReactNode;
}

export default function SessionProvider({ children }: SessionProviderProps) {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    
    return (
        <NextAuthSessionProvider>
            {children}
        </NextAuthSessionProvider>
    );
}

