import type { AppProps } from "next/app";
import Head from "next/head";
import SideNav from "src/semantic/sideNav";
import Header from "../src/semantic/header";
import "./../src/styles/global.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/montserrat"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div style={{ display: "flex" }}>
        <SideNav />
        <div
          style={{
            maxHeight: "calc(100vh - 60px)",
            overflowX: "hidden",
            height: "100%",
            overflow: "scroll",
            width: "100%",
          }}
        >
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
