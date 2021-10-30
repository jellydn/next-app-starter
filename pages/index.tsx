import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import Head from 'next/head';

import Counter from '../components/Counter';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Index() {
    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>Next App Starter</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Welcome to{' '}
                        <a href="https://github.com/jellydn/next-app-starter">
                            Next.js App Starter!
                        </a>
                    </h1>

                    <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.tsx</code>
                    </p>
                    <Counter />

                    <div className={styles.grid}>
                        <a
                            href="https://nextjs.org/docs"
                            className={styles.card}
                        >
                            <h3>Documentation &rarr;</h3>
                            <p>
                                Find in-depth information about Next.js features
                                and API.
                            </p>
                        </a>

                        <a
                            href="https://tailwindcss.com/"
                            className={styles.card}
                        >
                            <h3>Tailwind CSS</h3>
                            <p>
                                Rapidly build modern websites without ever
                                leaving your HTML.
                            </p>
                        </a>

                        <a
                            href="https://docs.pmnd.rs/jotai/introduction"
                            className={styles.card}
                        >
                            <h3>Jotai</h3>
                            <p>
                                👻 Primitive and flexible state management for
                                React.
                            </p>
                        </a>

                        <a
                            href="https://storybook.js.org/"
                            className={styles.card}
                        >
                            <h3>Storybook</h3>
                            <p>Build bulletproof UI components faster.</p>
                        </a>

                        <a
                            href="https://www.react-hook-form.com/"
                            className={styles.card}
                        >
                            <h3>React Hook Form</h3>
                            <p>
                                Performance, flexible and extensible forms with
                                easy-to-use validation.
                            </p>
                        </a>

                        <a
                            href="https://testing-library.com/"
                            className={styles.card}
                        >
                            <h3>React Testing Library</h3>
                            <p>
                                Simple and complete testing utilities that
                                encourage good testing practices .
                            </p>
                        </a>

                        <a
                            href="https://react-query.tanstack.com/"
                            className={styles.card}
                        >
                            <h3>React query</h3>
                            <p>
                                Performant and powerful data synchronization for
                                React
                            </p>
                        </a>

                        <a
                            href="https://next-auth.js.org/"
                            className={styles.card}
                        >
                            <h3>NextAuth.js</h3>
                            <p>Authentication for Next.js</p>
                        </a>

                        <a
                            href="https://www.prisma.io/"
                            className={styles.card}
                        >
                            <h3>Prisma</h3>
                            <p>
                                Next-generation ORM for Node.js and TypeScript
                            </p>
                        </a>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <a
                        href="https://productsway.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <img
                            src="/logo.svg"
                            alt="ProductsWay Logo"
                            className={styles.logo}
                        />
                    </a>
                    <a
                        className="pl-2"
                        href="https://vercel.com/new/git/external?repository-url=https://github.com/jellydn/next-app-starter/"
                    >
                        <img
                            src="https://vercel.com/button"
                            alt="Deploy with Vercel"
                        />
                    </a>
                </footer>
            </div>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
    props: {
        session: await getSession(ctx),
    },
});
