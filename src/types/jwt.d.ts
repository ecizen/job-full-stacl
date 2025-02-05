// src/types/jsonwebtoken.d.ts
declare module 'jsonwebtoken' {
    import { Buffer } from 'node:buffer';
  
    export interface SignOptions {
      algorithm?: string;
      expiresIn?: string | number;
      audience?: string;
      issuer?: string;
      subject?: string;
      notBefore?: string | number;
      jwtid?: string;
      header?: object;
    }
  
    export interface JwtPayload {
      [key: string]: any;
    }
  
    export function sign(payload: string | Buffer | object, secretOrPrivateKey: string | Buffer, options?: SignOptions): string;
    export function verify<T extends JwtPayload>(token: string, secretOrPublicKey: string | Buffer, options?: { algorithms?: string[] }): T;
    export function decode<T extends JwtPayload>(token: string, options?: { json: boolean }): T | null;
  }
  