import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../src/semantic/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
