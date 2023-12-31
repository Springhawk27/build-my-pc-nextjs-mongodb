import ErrorImg from "../../public/images/404_Error_Page.png";
import Image from "next/image";
import { Button } from "antd";
import Head from "next/head";
import Link from "next/link";
// import { useRouter } from "next/router";
const NotFoundPage = () => {
  //   const router = useRouter();

  //   setTimeout(() => {
  //     router.push("/");
  //   }, 3000);

  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>buildMyPC-404 Not Found</title>
        <meta name="description" content="This is a PC Builder Webpage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={ErrorImg}
        width={500}
        alt="error_image"
        style={{ display: "flex", margin: "50px auto" }}
      />
      <Link href="/">
        <Button>Back To Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
