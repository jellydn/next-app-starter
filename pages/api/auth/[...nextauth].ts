/* eslint-disable new-cap */
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import * as Prisma from '@prisma/client';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

const prisma = new Prisma.PrismaClient();
export default NextAuth({
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
    ],
    adapter: PrismaAdapter(prisma),
});
