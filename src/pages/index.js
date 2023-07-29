import RootLayout from "@/components/Layouts/RootLayout";
import AllComponents from "@/components/UI/AllComponents";
import FeaturedComponents from "@/components/UI/FeaturedComponents";
import { shuffleArray } from "@/utils/shuffleArray";
import { Button } from "antd";
import Head from "next/head";
import React from "react";

const HomePage = ({ featuredComponents }) => {
  return (
    <>
      <Head>
        <title>buildMyPC</title>
        <meta name="description" content="This is Build My PC Web Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FeaturedComponents
        featuredComponents={featuredComponents}
      ></FeaturedComponents>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3001/api/components");
  const data = await res.json();
  // console.log(data);
  // Get all components
  const allComponents = data.data;

  // Shuffle the components array
  const shuffledComponents = shuffleArray([...allComponents]);

  // Get the first 6 components
  const featuredComponents = shuffledComponents.slice(0, 6);

  return {
    props: {
      allComponents,
      featuredComponents,
    },
  };
};
