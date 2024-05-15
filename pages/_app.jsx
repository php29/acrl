// "use client";
// pages/_app.js

import "../styles/global.css";
import Layout from "./layout";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
