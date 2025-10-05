import React from "react";
import { Link } from "react-router-dom";

export default function AccountSettingSidebar() {
  return (
    <div class="border-l-2 m-2 p-2 md:flex flex-col gap-2 hidden max-h-[19.5rem] sticky md:top-[5rem] lg:top-36">
      <div>
        <p class="text-black">09138507243</p>
      </div>
      <hr />
      <Link
        to="order"
        class="text-black text-sm p-2 rounded-md hover:bg-gray-300 transition-all"
      >
        سفارش ها
      </Link>
      <Link
        to="coupon"
        class="text-black text-sm p-2 rounded-md hover:bg-gray-300 transition-all"
      >
        کد تخفیف
      </Link>
      <Link
        to="address"
        class="text-black text-sm p-2 rounded-md hover:bg-gray-300 transition-all"
      >
        آدرس
      </Link>
      <Link
        to="edit-profile"
        class="text-black text-sm p-2 rounded-md hover:bg-gray-300 transition-all"
      >
        جزئیات حساب
      </Link>
      <Link
        to="wish-list"
        class="text-black text-sm p-2 rounded-md hover:bg-gray-300 transition-all"
      >
        لیست علاقه مندی ها
      </Link>
      <a
        href="."
        class="text-black text-sm p-2 rounded-md hover:bg-gray-300 transition-all"
      >
        خروج
      </a>
    </div>
  );
}
