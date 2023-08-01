import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import { Button, Col, List, Rate, Row, Tag, Tooltip } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBuilder } from "@/redux/features/pcBuilder/pcBuilderSlice";

const PcBuilderPage = () => {
  const { components } = useSelector((state) => state.pcBuilder);
  console.log(components);

  const dispatch = useDispatch();

  const cpu = components.find(
    (component) => component.category === "Processor"
  );

  return (
    <div>
      <Row>
        <Col className="w-full mb-10 flex justify-center">
          <List
            className="w-3/5 "
            header={<div className="font-semibold ">Pc Builder</div>}
            itemLayout="horizontal"
          >
            <List.Item
              className="bg-slate-50 mb-2 p-2 "
              actions={[
                <Link href="/pcbuilder/cpu" key="list-loadmore-edit">
                  <Button
                    type="text"
                    key="list-loadmore-edit"
                    className={cpu ? "text-yellow-500" : "text-green-500"}
                  >
                    {cpu ? "Change" : "Choose"}
                  </Button>
                </Link>,
                <Button
                  type="text"
                  key="list-loadmore-edit"
                  className="text-red-500"
                  onClick={() => dispatch(removeFromBuilder(cpu))}
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<span>CPU / Processor </span>}
                description={
                  <span>
                    {cpu ? cpu?.product_name : "No Component Selected"}
                  </span>
                }
              />
            </List.Item>
            <List.Item
              className="bg-slate-50 mb-2 p-2"
              actions={[
                <Link href="/pcbuilder/cpu" key="list-loadmore-edit">
                  <Button
                    type="text"
                    key="list-loadmore-edit"
                    className={cpu ? "text-yellow-500" : "text-green-500"}
                  >
                    {cpu ? "Change" : "Choose"}
                  </Button>
                </Link>,
                <Button
                  type="text"
                  key="list-loadmore-edit"
                  className="text-red-500"
                  onClick={() => dispatch(removeFromBuilder(cpu))}
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<span>CPU / Processor </span>}
                description={
                  <span>
                    {cpu ? cpu?.product_name : "No Component Selected"}
                  </span>
                }
              />
            </List.Item>
            <List.Item
              className="bg-slate-50 mb-2 p-2"
              actions={[
                <Link href="/pcbuilder/cpu" key="list-loadmore-edit">
                  <Button
                    type="text"
                    key="list-loadmore-edit"
                    className={cpu ? "text-yellow-500" : "text-green-500"}
                  >
                    {cpu ? "Change" : "Choose"}
                  </Button>
                </Link>,
                <Button
                  type="text"
                  key="list-loadmore-edit"
                  className="text-red-500"
                  onClick={() => dispatch(removeFromBuilder(cpu))}
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<span>CPU / Processor </span>}
                description={
                  <span>
                    {cpu ? cpu?.product_name : "No Component Selected"}
                  </span>
                }
              />
            </List.Item>
            <List.Item
              className="bg-slate-50 mb-2 p-2"
              actions={[
                <Link href="/pcbuilder/cpu" key="list-loadmore-edit">
                  <Button
                    type="text"
                    key="list-loadmore-edit"
                    className={cpu ? "text-yellow-500" : "text-green-500"}
                  >
                    {cpu ? "Change" : "Choose"}
                  </Button>
                </Link>,
                <Button
                  type="text"
                  key="list-loadmore-edit"
                  className="text-red-500"
                  onClick={() => dispatch(removeFromBuilder(cpu))}
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<span>CPU / Processor </span>}
                description={
                  <span>
                    {cpu ? cpu?.product_name : "No Component Selected"}
                  </span>
                }
              />
            </List.Item>
            <List.Item
              className="bg-slate-50 mb-2 p-2"
              actions={[
                <Link href="/pcbuilder/cpu" key="list-loadmore-edit">
                  <Button
                    type="text"
                    key="list-loadmore-edit"
                    className={cpu ? "text-yellow-500" : "text-green-500"}
                  >
                    {cpu ? "Change" : "Choose"}
                  </Button>
                </Link>,
                <Button
                  type="text"
                  key="list-loadmore-edit"
                  className="text-red-500"
                  onClick={() => dispatch(removeFromBuilder(cpu))}
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<span>CPU / Processor </span>}
                description={
                  <span>
                    {cpu ? cpu?.product_name : "No Component Selected"}
                  </span>
                }
              />
            </List.Item>
            <List.Item
              className="bg-slate-50 mb-2 p-2"
              actions={[
                <Link href="/pcbuilder/cpu" key="list-loadmore-edit">
                  <Button
                    type="text"
                    key="list-loadmore-edit"
                    className={cpu ? "text-yellow-500" : "text-green-500"}
                  >
                    {cpu ? "Change" : "Choose"}
                  </Button>
                </Link>,
                <Button
                  type="text"
                  key="list-loadmore-edit"
                  className="text-red-500"
                  onClick={() => dispatch(removeFromBuilder(cpu))}
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<span>CPU / Processor </span>}
                description={
                  <span>
                    {cpu ? cpu?.product_name : "No Component Selected"}
                  </span>
                }
              />
            </List.Item>
            <List.Item
              className="bg-slate-50 mb-2 p-2"
              actions={[
                <Link href="/pcbuilder/cpu" key="list-loadmore-edit">
                  <Button
                    type="text"
                    key="list-loadmore-edit"
                    className={cpu ? "text-yellow-500" : "text-green-500"}
                  >
                    {cpu ? "Change" : "Choose"}
                  </Button>
                </Link>,
                <Button
                  type="text"
                  key="list-loadmore-edit"
                  className="text-red-500"
                  onClick={() => dispatch(removeFromBuilder(cpu))}
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<span>CPU / Processor </span>}
                description={
                  <span>
                    {cpu ? cpu?.product_name : "No Component Selected"}
                  </span>
                }
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
