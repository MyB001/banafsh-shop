import React from "react";
import { MdOutlineFavorite } from "react-icons/md";

export default function WishList() {
  return (
    <div class="col-span-3 m-2">
      <p className="p-2 font-bold">علاقه مندی</p>
      <hr />
      {/* <!-- when the wishlist is empty --> */}
      <div class="w-full h-[50vh] flex justify-center items-center">
        <div class="flex flex-col items-center gap-4">
        <MdOutlineFavorite className="w-32 h-32 text-[#FF00FF]" />
          <p class="text-[#FF00FF] text-lg font-semibold">
            فهرست علاقه مندی های شما خالی می باشد
          </p>
        </div>
      </div>

      {/* <!-- when the product is added to the wishlist --> */}
      <div class="p-4 grid grid-cols-2 gap-4 lg:grid-cols-3">
        <div class="relative h-full p-4 flex flex-col border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
          <a href=".">
            <div class="w-20 h-20 sm:w-40 sm:h-40 mx-auto">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                class="w-full h-full object-contain"
              />
            </div>
          </a>
          <a href="." class="flex flex-col h-full justify-between gap-1">
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
          </a>
          <a
            href="."
            class="absolute top-4 left-4 w-6 h-6 text-[#FF00FF] cursor-pointer active:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute top-0 left-0 w-6 h-6 text-[#FF00FF] cursor-pointer active:text-black"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
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
        <div class="h-full p-4 flex flex-col border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
          <a class="relative" href=".">
            <div class="w-20 h-20 sm:w-40 sm:h-40 mx-auto">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                class="w-full h-full object-contain"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute top-0 left-0 w-6 h-6 text-[#FF00FF] cursor-pointer active:text-black"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute top-0 left-0 w-6 h-6 text-[#FF00FF] cursor-pointer active:text-black"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
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
        <div class="h-full p-4 flex flex-col border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
          <a class="relative" href=".">
            <div class="w-20 h-20 sm:w-40 sm:h-40 mx-auto">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                class="w-full h-full object-contain"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute top-0 left-0 w-6 h-6 text-[#FF00FF] cursor-pointer active:text-black"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute top-0 left-0 w-6 h-6 text-[#FF00FF] cursor-pointer active:text-black"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
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
        <div class="h-full p-4 flex flex-col border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
          <a class="relative" href=".">
            <div class="w-20 h-20 sm:w-40 sm:h-40 mx-auto">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                class="w-full h-full object-contain"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute top-0 left-0 w-6 h-6 text-[#FF00FF] cursor-pointer active:text-black"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute top-0 left-0 w-6 h-6 text-[#FF00FF] cursor-pointer active:text-black"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
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
        <div class="h-full p-4 flex flex-col border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
          <a class="relative" href=".">
            <div class="w-20 h-20 sm:w-40 sm:h-40 mx-auto">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                class="w-full h-full object-contain"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute top-0 left-0 w-6 h-6 text-[#FF00FF] cursor-pointer active:text-black"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute top-0 left-0 w-6 h-6 text-[#FF00FF] cursor-pointer active:text-black"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
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
