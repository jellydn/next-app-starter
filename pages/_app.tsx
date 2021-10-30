import { Provider } from 'jotai';
import { Provider as AuthProvider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

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

function MyApp({ Component, pageProps }: AppProps) {
    const { initialState } = pageProps;
    return (
        <Provider
            // @ts-expect-error Type 'any[][]' is not assignable to type 'Iterable<readonly [Atom<unknown>, unknown]>'.
            initialValues={initialState && [[store.counterAtom, initialState]]}
        >
            <AuthProvider session={pageProps.session}>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </AuthProvider>
        </Provider>
    );
}

export default MyApp;
