import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import FeaturedComponents from "@/components/UI/FeaturedComponents";
import { shuffleArray } from "@/utils/shuffleArray";
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
      <Banner></Banner>

      <FeaturedComponents
        featuredComponents={featuredComponents}
      ></FeaturedComponents>
      <FeaturedCategories
        featuredComponents={featuredComponents}
      ></FeaturedCategories>
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
