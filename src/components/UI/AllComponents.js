import { Button, Card, Col, Row, Tooltip } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
  VerticalRightOutlined,
  VerticalLeftOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useMemo, useState } from "react";

const AllComponents = ({ allComponents }) => {
  const { Meta } = Card;

  const [arrow, setArrow] = useState("Show");

  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }

    if (arrow === "Show") {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          margin: "20px 0px",
          color: "#450A0B",
        }}
        className="lg:text-4xl md:text-2xl text-xl"
      >
        <VerticalRightOutlined /> All Our Available Components
        <VerticalLeftOutlined />{" "}
      </h1>
      <div
        className="line"
        style={{
          height: "3px",
          margin: "10px 0 20px 0",
          background: "#450A0B",
          width: "100%",
        }}
      ></div>
      <Row gutter={[12, 12]}>
        {allComponents?.map((component) => (
          <Col
            key={component?._id}
            className="gutter-row"
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={6}
          >
            <Card
              hoverable
              cover={
                <Image
                  src={component?.image_url}
                  width={500}
                  height={200}
                  responsive
                  alt="component image"
                />
              }
            >
              <Tooltip
                placement="top"
                title={component?.product_name}
                arrow={mergedArrow}
              >
                <Meta title={component?.product_name} />
              </Tooltip>{" "}
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  background: "#000",
                  width: "100%",
                }}
              ></div>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                <span>
                  <CalendarOutlined /> {component?.price}
                </span>
                <span>
                  <CommentOutlined /> {component?.status}
                </span>
                <span>
                  <ProfileOutlined /> {component?.category}
                </span>
              </p>
              <p style={{ fontSize: "15px" }}>
                {component?.description.length > 100
                  ? component?.description.slice(0, 70) + "..."
                  : component?.description}
              </p>
              {/* <p>{news?.id}</p> */}
              <Link href={`/components/${component?._id}`}>
                <Button
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px ",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  Keep Reading <ArrowRightOutlined />
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllComponents;
