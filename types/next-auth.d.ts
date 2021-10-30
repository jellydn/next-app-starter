import NextAuth from 'next-auth';

declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
     */
    interface Session {
        user: {
            /** The user's postal address. */
            address: string;
            image: string;
            email: string;
            name: string;
        };
    }
    /**
     * The shape of the user object returned in the OAuth providers' `profile` callback,
     * or the second parameter of the `session` callback, when using a database.
     */
    interface User {
        name: string;
        email: string;
    }
    /**
     * Usually contains information about the provider being used
     * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
     */
    interface Account {
        accessToken: string;
        refreshToken: string;
    }

    declare module 'next-auth/jwt' {
        /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
        interface JWT {
            /** OpenID ID Token */
            idToken?: string;
        }
    }
}
