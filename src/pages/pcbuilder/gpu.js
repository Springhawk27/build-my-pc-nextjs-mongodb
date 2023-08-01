import RootLayout from "@/components/Layouts/RootLayout";
import BuilderComponent from "@/components/UI/BuilderComponent";
import Component from "@/components/UI/Component";
import React from "react";

const GpuPage = ({ specificComponents, categoryName }) => {
  return (
    <div>
      <BuilderComponent
        specificComponents={specificComponents}
        categoryName={categoryName}
      ></BuilderComponent>
    </div>
  );
};

export default GpuPage;

GpuPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
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
  const categoryName = "Gpu";

  // Filter components with category
  const specificComponents = allComponents.filter(
    (component) => component.category === "GPU"
  );

  return {
    props: {
      specificComponents,
      categoryName,
    },
  };
};
