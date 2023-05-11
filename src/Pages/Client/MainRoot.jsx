import React from "react";
import { Outlet } from "react-router";
import Header from "../../Components/Client/Header";

const MainRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainRoot;
