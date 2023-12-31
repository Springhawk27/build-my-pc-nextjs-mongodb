import RootLayout from "@/components/Layouts/RootLayout";
import Component from "@/components/UI/Component";
import React from "react";

const PowerSupplyPage = ({ specificComponents, categoryName }) => {
  return (
    <div>
      <Component
        specificComponents={specificComponents}
        categoryName={categoryName}
      ></Component>
    </div>
  );
};

export default PowerSupplyPage;

PowerSupplyPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // if (typeof window === "undefined") {
  //    return {
  //      props: {
  //        specificComponents: [],
  //        categoryName: "",
  //      },
  //    };
  //  }
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
