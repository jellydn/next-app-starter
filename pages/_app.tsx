import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";

if (process.env.NEXT_PUBLIC_API_MOCKING === "yes") {
  if (typeof window === "undefined") {
    import("../mocks/server").then(({ server }) => {
      server.listen();
    });
  } else {
    import("../mocks/browser").then(({ browser }) => {
      browser.start();
    });
  }
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
