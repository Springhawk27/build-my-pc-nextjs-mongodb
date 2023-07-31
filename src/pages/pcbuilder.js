import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import { Button, Col, List, Rate, Row, Tag, Tooltip } from "antd";
import Link from "next/link";

const PcBuilderPage = () => {
  return (
    <div>
      <Row>
        <Col className="w-full mb-10">
          <List
            header={<div className="font-semibold ">Pc Builder</div>}
            itemLayout="horizontal"
          >
            <List.Item
              className="bg-slate-50 mb-2 p-2"
              actions={[
                <Link href="/pcbuilder/cpu" key="list-loadmore-edit">
                  Choose
                </Link>,
                <a key="list-loadmore-more">Remove</a>,
              ]}
            >
              <List.Item.Meta
                title={<span>CPU / Processor </span>}
                description={<span>Component Name</span>}
              />
            </List.Item>
            <List.Item className="bg-slate-50 mb-2 p-2">
              <List.Item.Meta
                title={<span>MotherBoard </span>}
                description={<span>Component Name</span>}
              />
            </List.Item>
          </List>
        </Col>
      </Row>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
