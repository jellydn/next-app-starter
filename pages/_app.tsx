import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import type { AppProps } from "next/app";

import Header from "../components/Header";

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
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <QueryClientProvider client={queryClient}>
      <Header
        links={[
          {
            title: "Contact",
            url: "/contact",
          },
        ]}
        onSignIn={() => {
          console.log("test");
        }}
      />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
