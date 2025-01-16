import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Table from "../../components/Table";

export default function Home() {
  return (
    <div className="">
      {/* <ToastContainer /> */}
      <Header />
      <Table className="mb-[1000px]" />
      <Footer className="mt-[1000px]" />
    </div>
  );
}
