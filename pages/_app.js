import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Layout from "@/components/layout/layout/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </QueryClientProvider>
    </SessionProvider>
  );
}
