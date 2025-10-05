import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Root() {
  return (
    <div>
      <Header />
      <div className="w-[90%] xl:max-w-6xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
