import RootLayout from "@/components/Layouts/RootLayout";
import Component from "@/components/UI/Component";
import React from "react";

const StorageDevicePage = ({ specificComponents, categoryName }) => {
  return (
    <div>
      <Component
        specificComponents={specificComponents}
        categoryName={categoryName}
      ></Component>
    </div>
  );
};

export default StorageDevicePage;

StorageDevicePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/components");
  const data = await res.json();
  // Get all components
  const allComponents = data.data;
  const categoryName = "Storage Device";

  // Filter components with category
  const specificComponents = allComponents.filter(
    (component) => component.category === "Storage Device"
  );

  return {
    props: {
      specificComponents,
      categoryName,
    },
  };
};