import RootLayout from "@/components/Layouts/RootLayout";
import Component from "@/components/UI/Component";
import React from "react";

const RamPage = ({ specificComponents, categoryName }) => {
  return (
    <div>
      <Component
        specificComponents={specificComponents}
        categoryName={categoryName}
      ></Component>
    </div>
  );
};

export default RamPage;

RamPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3001/api/components");
  const data = await res.json();
  // Get all components
  const allComponents = data.data;
  const categoryName = "RAM";

  // Filter components with category
  const specificComponents = allComponents.filter(
    (component) => component.category === "RAM"
  );

  return {
    props: {
      specificComponents,
      categoryName,
    },
  };
};
