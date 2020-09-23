import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const Layout = (props) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token");
    if (token) {
      console.log(token);
      console.log("token2");
      // axios.he
    }
    return () => {};
  }, []);
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
