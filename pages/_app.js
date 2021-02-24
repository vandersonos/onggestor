import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
