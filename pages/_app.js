import { Provider } from "react-redux";
// import store from "../store";
import { wrapper } from "../store";

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

import Head from "next/head";
import "../styles/main.scss";
import "../styles/icons/flaticon.css";

const App = ({ Component, pageProps }) => {
  // const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    // <Provider store={store}>
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
    // </Provider>
  );
};

export default wrapper.withRedux(App);
