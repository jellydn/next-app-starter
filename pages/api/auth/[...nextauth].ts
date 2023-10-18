/* eslint-disable new-cap */
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import * as Prisma from '@prisma/client';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const prisma = new Prisma.PrismaClient();

const providers = [];

// Add Github Provider if Github Client ID and Secret are set
if (process.env.GITHUB_ID && process.env.GITHUB_SECRET) {
    providers.push(
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    );
}

// Add Google Provider if Google Client ID and Secret are set
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    providers.push(
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    );
}

export default NextAuth({
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
        ...providers,
    ],
    adapter: PrismaAdapter(prisma),
});
