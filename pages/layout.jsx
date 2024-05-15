"use client";
// import "@styles/global.css";
import Head from "next/head";
// import Head from "next/head";
import Header from "@components/header";
import Footer from "@components/footer";
// import Provider from "@components/provider";

const RootLayout = ({
  title = "ACR LUXURY Hotel",
  children,
  description = "",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={title} content={description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
