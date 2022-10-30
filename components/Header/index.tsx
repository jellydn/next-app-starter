/* eslint-disable jsx-a11y/anchor-is-valid */
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.css";
import { HeaderProps } from "./types";
import Button from "../Button";

const Header: React.FC<React.PropsWithChildren<HeaderProps>> = ({
  links = [],
}) => {
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
        <Link
          href="/"
          passHref
          className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
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
        <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400">
          {links.map((link) => (
            (
              <Link
                key={link.url}
                href={link.url}
                className="mr-5 hover:text-gray-900"
              >
                {link.title}
              </Link>
            )
          ))}
        </nav>
        {!session && (
          <Button
            type="button"
            onClick={() => signIn()}
            size="m"
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
          </Button>
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

            <Link
              passHref
              href="/api/auth/signout"
              className={styles.button}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
export * from "./types";
