import type { NextPage } from "next";
import Head from "next/head";
import Loading from "../components/Loading";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next Firebase Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Home page works!</main>
    </div>
  );
};

export default HomePage;
