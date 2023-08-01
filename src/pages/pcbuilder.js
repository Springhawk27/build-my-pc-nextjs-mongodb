import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import { Button, Col, Image, List, Rate, Row, Tag, Tooltip } from "antd";
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
  const motherboard = components.find(
    (component) => component.category === "Motherboard"
  );
  const ram = components.find((component) => component.category === "RAM");
  const storagedevice = components.find(
    (component) => component.category === "Storage Device"
  );
  const gpu = components.find((component) => component.category === "GPU");
  const powersupply = components.find(
    (component) => component.category === "Power Supply"
  );
  const monitor = components.find(
    (component) => component.category === "Monitor"
  );

  return (
    <div>
      <Row>
        <Col className="w-full mb-10 flex justify-center">
          <List
            className="md:w-3/5 w-full  "
            header={<div className="font-semibold ">Pc Builder</div>}
            itemLayout="horizontal"
          >
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
                  <div className="flex md:flex-row flex-col w-full">
                    <div className={cpu ? "block" : "hidden"}>
                      <Image
                        className={cpu ? "block" : "hidden"}
                        width={100}
                        src={cpu ? cpu.image_url : ""}
                        alt="cpu image"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <p className="text-red-600 w-full">
                        {cpu ? cpu?.product_name : "No Component Selected"}
                      </p>
                      <span className="text-green-600 ">
                        {cpu ? `Price: ${cpu?.price}` : ""}
                      </span>
                    </div>
                  </div>
                }
              />
            </List.Item>
            <List.Item
              className="bg-slate-50 mb-2 p-2"
              actions={[
                <Link href="/pcbuilder/motherboard" key="list-loadmore-edit">
                  <Button
                    type="text"
                    key="list-loadmore-edit"
                    className={
                      motherboard ? "text-yellow-500" : "text-green-500"
                    }
                  >
                    {motherboard ? "Change" : "Choose"}
                  </Button>
                </Link>,
                <Button
                  type="text"
                  key="list-loadmore-edit"
                  className="text-red-500"
                  onClick={() => dispatch(removeFromBuilder(motherboard))}
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<span>Motherboard </span>}
                description={
                  <div className="flex md:flex-row flex-col w-full">
                    <div className={motherboard ? "block" : "hidden"}>
                      <Image
                        className={motherboard ? "block" : "hidden"}
                        width={100}
                        src={motherboard ? motherboard.image_url : ""}
                        alt="cpu image"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <p className="text-red-600 w-full">
                        {motherboard
                          ? motherboard?.product_name
                          : "No Component Selected"}
                      </p>
                      <span className="text-green-600 ">
                        {motherboard ? `Price: ${motherboard?.price}` : ""}
                      </span>
                    </div>
                  </div>
                }
              />
            </List.Item>
            <List.Item
              className="bg-slate-50 mb-2 p-2"
              actions={[
                <Link href="/pcbuilder/ram" key="list-loadmore-edit">
                  <Button
                    type="text"
                    key="list-loadmore-edit"
                    className={ram ? "text-yellow-500" : "text-green-500"}
                  >
                    {ram ? "Change" : "Choose"}
                  </Button>
                </Link>,
                <Button
                  type="text"
                  key="list-loadmore-edit"
                  className="text-red-500"
                  onClick={() => dispatch(removeFromBuilder(ram))}
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<span>RAM </span>}
                description={
                  <div className="flex md:flex-row flex-col w-full">
                    <div className={ram ? "block" : "hidden"}>
                      <Image
                        className={ram ? "block" : "hidden"}
                        width={100}
                        src={ram ? ram.image_url : ""}
                        alt="cpu image"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <p className="text-red-600 w-full">
                        {ram ? ram?.product_name : "No Component Selected"}
                      </p>
                      <span className="text-green-600 ">
                        {ram ? `Price: ${ram?.price}` : ""}
                      </span>
                    </div>
                  </div>
                }
              />
            </List.Item>
            <List.Item
              className="bg-slate-50 mb-2 p-2"
              actions={[
                <Link href="/pcbuilder/storagedevice" key="list-loadmore-edit">
                  <Button
                    type="text"
                    key="list-loadmore-edit"
                    className={
                      storagedevice ? "text-yellow-500" : "text-green-500"
                    }
                  >
                    {storagedevice ? "Change" : "Choose"}
                  </Button>
                </Link>,
                <Button
                  type="text"
                  key="list-loadmore-edit"
                  className="text-red-500"
                  onClick={() => dispatch(removeFromBuilder(storagedevice))}
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<span>Storage Device </span>}
                description={
                  <div className="flex md:flex-row flex-col w-full">
                    <div className={storagedevice ? "block" : "hidden"}>
                      <Image
                        className={storagedevice ? "block" : "hidden"}
                        width={100}
                        src={storagedevice ? storagedevice.image_url : ""}
                        alt="cpu image"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <p className="text-red-600 w-full">
                        {storagedevice
                          ? storagedevice?.product_name
                          : "No Component Selected"}
                      </p>
                      <span className="text-green-600 ">
                        {storagedevice ? `Price: ${storagedevice?.price}` : ""}
                      </span>
                    </div>
                  </div>
                }
              />
            </List.Item>
            <List.Item
              className="bg-slate-50 mb-2 p-2"
              actions={[
                <Link href="/pcbuilder/gpu" key="list-loadmore-edit">
                  <Button
                    type="text"
                    key="list-loadmore-edit"
                    className={gpu ? "text-yellow-500" : "text-green-500"}
                  >
                    {gpu ? "Change" : "Choose"}
                  </Button>
                </Link>,
                <Button
                  type="text"
                  key="list-loadmore-edit"
                  className="text-red-500"
                  onClick={() => dispatch(removeFromBuilder(gpu))}
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<span>GPU </span>}
                description={
                  <div className="flex md:flex-row flex-col w-full">
                    <div className={gpu ? "block" : "hidden"}>
                      <Image
                        className={gpu ? "block" : "hidden"}
                        width={100}
                        src={gpu ? gpu.image_url : ""}
                        alt="cpu image"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <p className="text-red-600 w-full">
                        {gpu ? gpu?.product_name : "No Component Selected"}
                      </p>
                      <span className="text-green-600 ">
                        {gpu ? `Price: ${gpu?.price}` : ""}
                      </span>
                    </div>
                  </div>
                }
              />
            </List.Item>
            <List.Item
              className="bg-slate-50 mb-2 p-2"
              actions={[
                <Link href="/pcbuilder/monitor" key="list-loadmore-edit">
                  <Button
                    type="text"
                    key="list-loadmore-edit"
                    className={monitor ? "text-yellow-500" : "text-green-500"}
                  >
                    {monitor ? "Change" : "Choose"}
                  </Button>
                </Link>,
                <Button
                  type="text"
                  key="list-loadmore-edit"
                  className="text-red-500"
                  onClick={() => dispatch(removeFromBuilder(monitor))}
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<span>Monitor </span>}
                description={
                  <div className="flex md:flex-row flex-col w-full">
                    <div className={monitor ? "block" : "hidden"}>
                      <Image
                        className={monitor ? "block" : "hidden"}
                        width={100}
                        src={monitor ? monitor.image_url : ""}
                        alt="cpu image"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <p className="text-red-600 w-full">
                        {monitor
                          ? monitor?.product_name
                          : "No Component Selected"}
                      </p>
                      <span className="text-green-600 ">
                        {monitor ? `Price: ${monitor?.price}` : ""}
                      </span>
                    </div>
                  </div>
                }
              />
            </List.Item>
            <List.Item
              className="bg-slate-50 mb-2 p-2"
              actions={[
                <Link href="/pcbuilder/powersupply" key="list-loadmore-edit">
                  <Button
                    type="text"
                    key="list-loadmore-edit"
                    className={
                      powersupply ? "text-yellow-500" : "text-green-500"
                    }
                  >
                    {powersupply ? "Change" : "Choose"}
                  </Button>
                </Link>,
                <Button
                  type="text"
                  key="list-loadmore-edit"
                  className="text-red-500"
                  onClick={() => dispatch(removeFromBuilder(powersupply))}
                >
                  Remove
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<span>Power Supply </span>}
                description={
                  <div className="flex md:flex-row flex-col w-full">
                    <div className={powersupply ? "block" : "hidden"}>
                      <Image
                        className={powersupply ? "block" : "hidden"}
                        width={100}
                        src={powersupply ? powersupply.image_url : ""}
                        alt="cpu image"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <p className="text-red-600 w-full">
                        {powersupply
                          ? powersupply?.product_name
                          : "No Component Selected"}
                      </p>
                      <span className="text-green-600 ">
                        {powersupply ? `Price: ${powersupply?.price}` : ""}
                      </span>
                    </div>
                  </div>
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
