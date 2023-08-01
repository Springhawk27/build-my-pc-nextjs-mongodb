import RootLayout from "@/components/Layouts/RootLayout";
import BuilderComponent from "@/components/UI/BuilderComponent";
import Component from "@/components/UI/Component";
import React from "react";

const PowerSupplyPage = ({ specificComponents, categoryName }) => {
  return (
    <div>
      <BuilderComponent
        specificComponents={specificComponents}
        categoryName={categoryName}
      ></BuilderComponent>
    </div>
  );
};

export default PowerSupplyPage;

PowerSupplyPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.URL}/api/components`);
  const data = await res.json();
  // Get all components
  const allComponents = data.data;
  const categoryName = "Power Supply Unit";

  // Filter components with category
  const specificComponents = allComponents.filter(
    (component) => component.category === "Power Supply Unit"
  );

  return {
    props: {
      specificComponents,
      categoryName,
    },
  };
};
