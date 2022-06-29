import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Basic Notes</title>
    </Head>

    <Navbar></Navbar>
    {children}
  </>
);
export default Layout;
