/* eslint-disable new-cap */
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import * as Prisma from '@prisma/client';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";


const prisma = new Prisma.PrismaClient();
export default NextAuth({
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
         GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
    ],
    adapter: PrismaAdapter(prisma),
});
