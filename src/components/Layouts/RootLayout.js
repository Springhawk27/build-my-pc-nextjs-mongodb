import {
  ShopOutlined,
  DesktopOutlined,
  GithubOutlined,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
  SmileOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Space } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const RootLayout = ({ children }) => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
  return (
    <Layout>
      <Header
        className="bg-red-950"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              buildMyPC
            </Link>
          </h1>
        </div>
        <div className={styles.menu_items}>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Hover me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Link href="/allProducts">
            <items>
              <ShopOutlined />
              All Products
            </items>
          </Link>
          <Link href="/pcBuilder">
            <items>
              <DesktopOutlined />
              PC Builder
            </items>
          </Link>
        </div>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        className="bg-red-950 text-slate-300"
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          buildMyPC
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://www.github.com/" target="_blank">
            <GithubOutlined />
          </Link>
          <Link href="https://www.twitter.com/" target="_blank">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://www.google.com/" target="_blank">
            <GoogleSquareFilled />
          </Link>
          <Link href="https://www.linkedin.com/" target="_blank">
            <LinkedinFilled />
          </Link>
        </p>
        buildMyPC ©2023 Created by Sajjad Mahmud
      </Footer>
    </Layout>
  );
};
export default RootLayout;
