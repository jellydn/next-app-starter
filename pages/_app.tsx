import "../styles/globals.css";

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

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <>
      <Header
        links={[
          {
            title: "Contact",
            url: "/contact",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
