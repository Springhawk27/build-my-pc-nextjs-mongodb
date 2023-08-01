import RootLayout from "@/components/Layouts/RootLayout";
import BuilderComponent from "@/components/UI/BuilderComponent";
import Component from "@/components/UI/Component";
import React from "react";

const MonitorPage = ({ specificComponents, categoryName }) => {
  return (
    <div>
      <BuilderComponent
        specificComponents={specificComponents}
        categoryName={categoryName}
      ></BuilderComponent>
    </div>
  );
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/components");
  const data = await res.json();
  // Get all components
  const allComponents = data.data;
  const categoryName = "Monitor";

  // Filter components with category
  const specificComponents = allComponents.filter(
    (component) => component.category === "Monitor"
  );

  return {
    props: {
      specificComponents,
      categoryName,
    },
  };
};
