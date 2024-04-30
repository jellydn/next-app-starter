import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type Atom, Provider } from 'jotai';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import logger from '../logger';
import store from '../store';
import '../styles/globals.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'yes') {
    if (typeof window === 'undefined') {
        import('../mocks/server')
            .then(({ server }) => {
                server.listen();
            })
            .catch(logger.error);
    } else {
        import('../mocks/browser')
            .then(async ({ browser }) => browser.start())
            .catch(logger.error);
    }
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    const { initialState } = pageProps;
    return (
        <Provider
            // @ts-expect-error initialValue is not in the types
            initialValues={
                initialState &&
                ([[store.counterAtom, initialState]] as Iterable<
                    readonly [Atom<unknown>, unknown]
                >)
            }
        >
            <SessionProvider
                session={pageProps.session}
                refetchInterval={5 * 60}
            >
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </SessionProvider>
        </Provider>
    );
}

export default MyApp;
