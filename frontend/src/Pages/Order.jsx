import React from "react";
import { FaFileInvoice } from "react-icons/fa";

export default function Order() {
  return (
    <div action="" class="grid col-span-3 m-2">
      <p className="p-2 font-bold">سفارشات</p>
      <hr />
      {/* <!-- When there is an order --> */}
      <div class="w-4/5 mx-auto md:w-3/5 lg:w-2/5 p-2">
        <div class="flex flex-col gap-2">
          <label for="invoice-id" class="text-black mx-auto">
            شناسه فاکتور
          </label>
          <input
            type="text"
            id="invoice-id"
            class="text-center outline-none p-1 px-2 w-full border-2 border-[#FF00FF] rounded-lg"
          />
          <button
            type="button"
            value="invoice-id-btn"
            class="w-1/2 mx-auto text-white bg-[#FF00FF] rounded-md p-1 border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF]"
          >
            مشاهده وضعیت
          </button>
        </div>
      </div>
      {/* <!-- when there are no orders --> */}
      <div class="flex flex-col h-[50vh] items-center justify-center gap-2">
        <FaFileInvoice className="w-32 h-32 text-[#FF00FF]" />
        <p class="text-[#FF00FF] text-lg font-semibold p-2">
          تاکنون سفارشی را ثبت نکرده اید
        </p>
      </div>

      <div>
        <div class="flex flex-col gap-2 border-t-2 border-t-gray-400 p-4">
          <div class="flex justify-between items-center text-black">
            <p>شناسه فاکتور</p>
            <p>#12154</p>
          </div>
          <div class="flex justify-between items-center text-black">
            <p>تاریخ</p>
            <p>20/3/1380</p>
          </div>
          <div class="flex justify-between items-center text-black">
            <p>وضعیت</p>
            <p>در انتظار پرداخت</p>
          </div>
          <div class="flex justify-between items-center text-black">
            <p>مجموع</p>
            <p class="text-[#FF00FF]">542,232 تومان</p>
          </div>
          <div class="flex justify-between items-center">
            <p>عملیات ها</p>
            <div className="flex gap-2">
              <button
                type="button"
                class="text-white bg-[#FF00FF] rounded-md p-2 border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF]"
              >
                لغو
              </button>
              <button
                type="button"
                class="text-white bg-[#FF00FF] rounded-md p-2 border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF]"
              >
                پرداخت
              </button>
              <button
                type="button"
                class="text-white bg-[#FF00FF] rounded-md p-2 border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF]"
              >
                مشاهده فاکتور
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
