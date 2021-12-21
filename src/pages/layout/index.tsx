import React from "react";
import Footer from "../../component/footer";
import Header from "../../component/header";

export default function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
