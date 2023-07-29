import RootLayout from "@/components/Layouts/RootLayout";
import Component from "@/components/UI/Component";
import React from "react";

const MotherboardPage = ({ specificComponents, categoryName }) => {
  return (
    <div>
      <Component
        specificComponents={specificComponents}
        categoryName={categoryName}
      ></Component>
    </div>
  );
};

export default MotherboardPage;

MotherboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3001/api/components");
  const data = await res.json();
  // Get all components
  const allComponents = data.data;
  const categoryName = "Motherboard";

  // Filter components with category
  const specificComponents = allComponents.filter(
    (component) => component.category === "Motherboard"
  );

  return {
    props: {
      specificComponents,
      categoryName,
    },
  };
};
