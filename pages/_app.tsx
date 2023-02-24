import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Atom, Provider } from 'jotai';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import store from '../store';
import '../styles/globals.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'yes') {
    if (typeof window === 'undefined') {
        import('../mocks/server').then(({ server }) => {
            server.listen();
        });
    } else {
        import('../mocks/browser').then(({ browser }) => {
            browser.start();
        });
    }
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps<any>) {
    const { initialState } = pageProps;
    return (
        <Provider
            // @ts-ignore
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
