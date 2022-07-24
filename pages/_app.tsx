import type { AppProps } from "next/app";
import Head from "next/head";
import SideNav from "src/semantic/sideNav";
import Header from "../src/semantic/header";
import "./../src/styles/global.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <SideNav />
        <div
          style={{
            minHeight: "calc(100vh - 60px)",
            overflowX: "hidden",
            height: "100%",
            overflowY: "scroll",
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
