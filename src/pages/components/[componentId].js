import { Col, Row } from "antd";
import {
  UserOutlined,
  DollarOutlined,
  StarOutlined,
  ProfileOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import RootLayout from "@/components/Layouts/RootLayout";

const ComponentDetailPage = ({ component }) => {
  console.log(component, "chekcing");
  return (
    // <h1>hi there</h1>
    <Row style={{ marginTop: "80px", alignItems: "center" }}>
      <Col md={6} lg={12}>
        <Image
          alt="example"
          src={component?.image_url}
          width={500}
          height={300}
          responsive
        />
      </Col>
      <Col md={6} lg={12} style={{ paddingLeft: "20px" }}>
        <h1 style={{ fontSize: "30px" }}>{component?.product_name}</h1>
        <span
          style={{
            color: "gray",
            display: "block",
            fontSize: "20px",
          }}
        >
          <UserOutlined /> {component?.category}
        </span>
        <div
          className="line"
          style={{
            height: "5px",
            margin: "20px 0",
            background: "#000",
            width: "100%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            color: "gray",
            margin: "10px 0px",
            fontSize: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              color: "gray",
              margin: "10px 0px",
              fontSize: "12px",
            }}
          >
            <span className="text-green-600">
              <DollarOutlined /> {component?.price}
            </span>
            <span
              className={
                component?.status && component?.status === "In Stock"
                  ? "text-green-600"
                  : "text-red-500"
              }
            >
              <TagsOutlined />
              {component?.status}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              color: "gray",
              margin: "10px 0px",
              fontSize: "12px",
            }}
          >
            <span className="text-blue-800">
              <ProfileOutlined /> {component?.category}
            </span>
            <span className="text-orange-500">
              <StarOutlined /> {component?.individual_rating}
            </span>
          </div>
        </div>

        <p style={{ fontSize: "25px", fontWeight: "lighter" }}>
          {component?.description}
        </p>
      </Col>
    </Row>
  );
};
export default ComponentDetailPage;

ComponentDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3001/api/components");

  const components = await res.json();

  const paths = components?.data.map((component) => ({
    params: { componentId: component._id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const componentId = params.componentId;

  const res = await fetch(
    `http://localhost:3001/api/components/${componentId}`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      component: data.data,
    },
  };
};
