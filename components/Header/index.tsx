/* eslint-disable jsx-a11y/anchor-is-valid */
import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';

import styles from './header.module.css';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ links = [] }) => {
    const [session, loading] = useSession();

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
                <Link href="/" passHref>
                    <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                        <img
                            src="/logo.svg"
                            alt="ProductsWay Logo"
                            className="w-12 h-12"
                        />
                        <span className="ml-3 text-xl">Next App Starter</span>
                    </a>
                </Link>
                <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400">
                    {links.map((link) => (
                        <Link key={link.url} href={link.url}>
                            <a
                                href={link.url}
                                className="mr-5 hover:text-gray-900"
                            >
                                {link.title}
                            </a>
                        </Link>
                    ))}
                </nav>
                {!session && (
                    <button
                        type="button"
                        onClick={() => signIn()}
                        className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0"
                    >
                        Sign In
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                )}

                {session && (
                    <div className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">
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

                        <Link passHref href="/api/auth/signout">
                            <a
                                className={styles.button}
                                onClick={(e) => {
                                    e.preventDefault();
                                    signOut();
                                }}
                            >
                                Sign out
                            </a>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
export * from './types';
