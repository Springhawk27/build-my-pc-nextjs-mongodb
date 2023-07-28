import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "antd";
import Head from "next/head";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>buildMyPC</title>
        <meta name="description" content="This is Build My PC Web Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline text-slate-800 bg-yellow-200">
        Hello world!
      </h1>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
