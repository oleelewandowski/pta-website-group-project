import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Layout from "@/components/layout/layout/layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
