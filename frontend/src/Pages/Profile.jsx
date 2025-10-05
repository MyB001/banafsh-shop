import React from "react";
import AccountSettingSidebar from "../Components/AccountSetting/AccountSettingSidebar";
import { Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <div class="w-full md:w-11/12 md:grid md:grid-cols-4 mx-auto">
        <AccountSettingSidebar />
        <Outlet />
      </div>
    </div>
  );
}
