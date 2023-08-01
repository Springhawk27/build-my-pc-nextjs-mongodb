import RootLayout from "@/components/Layouts/RootLayout";
import AllComponents from "@/components/UI/AllComponents";
import FeaturedComponents from "@/components/UI/FeaturedComponents";
import { shuffleArray } from "@/utils/shuffleArray";
import { Button } from "antd";
import Head from "next/head";
import React from "react";

const AllComponentsPage = ({ allComponents }) => {
  return (
    <>
      <Head>
        <title>buildMyPC</title>
        <meta name="description" content="This is Build My PC Web Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AllComponents allComponents={allComponents}></AllComponents>
    </>
  );
};

export default AllComponentsPage;

AllComponentsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       allComponents: [],
  //     },
  //   };
  // }

  const res = await fetch(`${process.env.URL}/api/components`);
  const data = await res.json();
  // console.log(data);
  // Get all components
  const allComponents = data.data;

  return {
    props: {
      allComponents,
    },
  };
};
