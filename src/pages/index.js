import RootLayout from "@/components/Layouts/RootLayout";
import AllComponents from "@/components/UI/AllComponents";
import { Button } from "antd";
import Head from "next/head";
import React from "react";

const HomePage = ({ allComponents }) => {
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
      <AllComponents allComponents={allComponents}></AllComponents>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3001/api/components");
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      allComponents: data.data,
    },
  };
};
