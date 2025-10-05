import React from "react";
import { TbBasketDiscount, TbRosetteDiscountFilled } from "react-icons/tb";

export default function Coupon() {
  return (
    <div class="col-span-3 m-2">
      <p className="p-2 font-bold">تخفیف ها</p>
      <hr />
      {/* <!-- when there is not coupons --> */}
      <div class="w-full h-[50vh] flex justify-center items-center">
        <div class="flex flex-col items-center gap-4">
        <TbBasketDiscount className="w-32 h-32 text-[#FF00FF]" />
          <p class="text-[#FF00FF] text-lg font-semibold">
            کد تخفیف جدیدی برای شما موجود نیست
          </p>
        </div>
      </div>

      {/* <!-- when there is at least one coupon  --> */}

      <div class="grid grid-cols-2 p-4 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        <div class="bg-white min-h-[185px] p-4 flex flex-col justify-between border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
          <div class="relative">
            <div class="w-full h-full text-center">
              <p class="text-7xl text-black font-bold">30</p>
            </div>
            <div class="grid grid-cols-3 items-center justify-around bg-[#ff1212] w-24 h-8 absolute right-4 top-0 translate-x-1/2 translate-y-1/2 rounded-e-full -rotate-90">
              <p class="text-white text-sm text-center line-clamp-1 col-span-2">سرینا قرمز</p>
              <TbRosetteDiscountFilled className="w-6 h-6 text-white text-sm text-center -rotate-90" />
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-black text-sm font-semibold text-center">
              S41tTRW52KjL
            </p>
            <button
              type="button"
              class="copy-coupon w-4/5 mx-auto text-white bg-[#FF00FF] rounded-md p-1 border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF]"
            >
              کپی کردن
            </button>
          </div>
        </div>

        <span
          id="show-copied"
          class="p-2 m-4 rounded-lg z-40 text-white fixed bottom-4 right-4 bg-green-600 opacity-0 invisible transition-all"
        >
          کپی شد
        </span>
      </div>
    </div>
  );
}
