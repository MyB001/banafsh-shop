import React, { useState } from "react";

export default function ProductCategory() {
  const [filteringSection, setFilteringSection] = useState(false);
  return (
    <div className="space-y-4 py-4">
      {/* <!-- Easy access to other pages (upper part of the page) --> */}
      <div className="">
        <div class="flex items-center gap-0.5">
          <a href="index.html" class=" text-sm font-medium">
            خانه
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <a href="wishlist.html" class="text-[#FF00FF] text-sm font-medium">
            آرایشی
          </a>
        </div>
      </div>
      <div>
        <h1 class="text-xl text-[#FF00FF] font-bold">آرایشی</h1>
      </div>

      {/* <!-- filters & ordering & number Of product --> */}
      <div class="flex justify-start gap-8 items-center mx-auto">
        {/* <!-- ordering --> */}
        <div class="relative" onMouseLeave={() => setFilteringSection(false)}>
          <div
            class="flex items-center gap-1 cursor-pointer mb-2"
            onMouseMove={() => setFilteringSection(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-4 h-4 text-black"
            >
              <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
            </svg>
            <p class="text-bbg-black text-sm font-medium" id="change-ordering">
              مرتب سازی
            </p>
          </div>
          <div className={`flex flex-col border-[1px] border-[#FF00FF] rounded-lg z-20 bg-white shadow-md absolute w-[150%] p-2 top-full ${filteringSection ? 'opacity-100 visible': 'opacity-0 invisible'}`}>
            <button
              type="button"
              class="text-bbg-black text-sm text-right p-0.5 rounded-md hover:bg-gray-200"
            >
              جدیدترین
            </button>
            <button
              type="button"
              class="text-bbg-black text-sm text-right p-0.5 rounded-md hover:bg-gray-200"
            >
              پرفروش ترین
            </button>
            <button
              type="button"
              class="text-bbg-black text-sm text-right p-0.5 rounded-md hover:bg-gray-200"
            >
              ارزان ترین
            </button>
            <button
              type="button"
              class="text-bbg-black text-sm text-right p-0.5 rounded-md hover:bg-gray-200"
            >
              گران ترین
            </button>
          </div>
        </div>

        <div class="col-span-3 justify-self-end">
          <span class="text-black">5,000 کالا</span>
        </div>
      </div>
      {/* <!-- Show all products --> */}
      <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div class="h-full p-4 flex flex-col border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
          <a class="relative" href=".">
            <div class="w-20 h-20 sm:w-40 sm:h-40 mx-auto">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                class="w-full h-full object-contain"
              />
            </div>
            <div class="bg-[#ff1212] absolute left-0 top-0 rounded-sm">
              <p class="text-white p-0.5 text-sm">23%</p>
            </div>
            <div class="bg-[#ff1212] w-24 h-6 absolute right-1 top-1 translate-x-1/2 translate-y-1/2 rounded-e-full -rotate-90">
              <p class="text-white px-3.5 text-sm text-center">سان سیف</p>
            </div>
          </a>
          <div class="flex flex-col h-full justify-between gap-1">
            <p class="text-black text-sm text-center">کرم مرطوب کننده</p>
            <p class="font-bold text-center">
              <del class="text-xs text-gray-400 ml-2">4000,000 </del>
              <span class="text-[#FF00FF] text-xs sm:text-sm">
                2090,000 تومان
              </span>
            </p>
            <button
              type="button"
              class="w-4/5 mx-auto text-white bg-[#FF00FF] rounded-md p-1 border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF]"
            >
              افزودن به سبد
            </button>
          </div>
        </div>
        <div class="h-full p-4 flex flex-col border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
          <a class="relative" href=".">
            <div class="w-20 h-20 sm:w-40 sm:h-40 mx-auto">
              <img
                src="../image/shampoo-image.jpg"
                alt=""
                class="w-full h-full object-contain"
              />
            </div>
          </a>
          <div class="flex flex-col h-full justify-between gap-1">
            <p class="text-black text-sm text-center">کرم مرطوب کننده</p>
            <p class="font-bold text-center">
              <span class="text-[#FF00FF] text-xs sm:text-sm">
                290,000 تومان
              </span>
            </p>
            <button
              type="button"
              class="w-4/5 mx-auto text-white bg-[#FF00FF] rounded-md p-1 border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF]"
            >
              افزودن به سبد
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
