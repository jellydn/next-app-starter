import NextAuth from "next-auth";
import Adapters from "next-auth/adapters";
import Providers from "next-auth/providers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: process.env.DATABASE_URL,
  adapter: Adapters.Prisma.Adapter({
    prisma,
    modelMapping: {
      User: "user",
      Account: "account",
      Session: "session",
      VerificationRequest: "verificationRequest",
    },
  }),
});
