import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../Button';
import styles from './header.module.css';
import { type HeaderProps } from './types';

function Header({ links = [] }: HeaderProps) {
    const { data: session, status } = useSession();
    const loading = status === 'loading';

    if (loading) {
        return (
            <div className="spinner" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    return (
        <header className="text-gray-600 body-font">
            <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                <Link
                    passHref
                    href="/"
                    className="flex items-center mb-4 font-medium text-gray-900 md:mb-0 title-font"
                >
                    <Image
                        src="/logo.svg"
                        alt="ProductsWay Logo"
                        className="w-12 h-12"
                        width={30}
                        height={40}
                    />
                    <span className="ml-3 text-xl">Next App Starter</span>
                </Link>
                <nav className="flex flex-wrap justify-center items-center text-base md:py-1 md:pl-4 md:mr-auto md:ml-4 md:border-l md:border-gray-400">
                    {links.map((link) => (
                        <Link
                            key={link.url}
                            href={link.url}
                            className="mr-5 hover:text-gray-900"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
                {!session && (
                    <Button
                        type="button"
                        size="m"
                        onClick={async () => signIn()}
                    >
                        Sign In
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="ml-1 w-4 h-4"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Button>
                )}

                {session && (
                    <div className="inline-flex items-center py-1 px-3 mt-4 text-base bg-gray-100 rounded border-0 md:mt-0 hover:bg-gray-200 focus:outline-none">
                        {session.user.image && (
                            <span
                                style={{
                                    backgroundImage: `url(${session.user.image})`,
                                }}
                                className={styles.avatar}
                            />
                        )}
                        <span className={styles.signedInText}>
                            <small>Signed in as</small>
                            <br />
                            <strong>
                                {session.user.email || session.user.name}
                            </strong>
                        </span>

                        <Link
                            passHref
                            href="/api/auth/signout"
                            className={styles.button}
                            onClick={async (e) => {
                                e.preventDefault();
                                await signOut();
                            }}
                        >
                            Sign out
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
export * from './types';
