import React from "react";
import { TbShoppingBagX } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Purchase() {
  return (
    <div className="w-[90%] xl:max-w-6xl mx-auto">
      {/* <!-- when the shopping cart is empty --> */}
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
        <TbShoppingBagX className="w-32 h-32 text-[#FF00FF]"/>
          <p className="text-[#FF00FF] text-xl font-semibold">
            سبد خرید شما خالی می باشد
          </p>
        </div>
      </div>

      {/* <!-- when the product is added to the cart --> */}
      <div className="flex items-center justify-center py-12 gap-6">
        <div className="relative h-1 w-20 sm:w-40 lg:w-60 bg-black rounded-full">
          <div className="absolute -bottom-2.5 left-full w-6 h-6 rounded-full border-2 border-black"></div>
          <p className="absolute top-3.5 -right-10 text-sm">سبد خرید</p>
          <div className="absolute -bottom-2.5 right-full w-6 h-6 rounded-full border-2 border-black"></div>
        </div>
        <div className="relative h-1 w-20 sm:w-40 lg:w-60 bg-black rounded-full">
          <p className="absolute top-4 -right-14 text-sm">اطلاعات ارسال</p>
          <div className="absolute -bottom-2.5 right-full w-6 h-6 rounded-full border-2 border-black"></div>
          <p className="absolute top-3.5 -left-14 text-sm">شیوه پرداخت</p>
        </div>
      </div>
      {/* sm:grid sm:grid-cols-2  */}
      <div className="w-full sm:grid sm:grid-cols-2 mx-auto">
        <div className="">
          <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex gap-2">
            <div className="w-16 h-16">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>

            <div
              className="flex flex-col justify-between"
              style={{width: 'calc(100% - 80px)'}}
            >
              <p className="text-babg-black">لوسیون جنرال</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-black text-center">232,343</p>
                  <p className="text-black text-center text-xs">تومان</p>
                </div>
                <div className="flex items-center justify-between gap-2 border-[1px] border-black rounded-lg px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-increase-button"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                  <p className="text-black">24</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-decrease-button"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex gap-2">
            <div className="w-16 h-16">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>

            <div
              className="flex flex-col justify-between"
              style={{width: 'calc(100% - 80px)'}}
            >
              <p className="text-babg-black">لوسیون جنرال</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-black text-center">232,343</p>
                  <p className="text-black text-center text-xs">تومان</p>
                </div>
                <div className="flex items-center justify-between gap-2 border-[1px] border-black rounded-lg px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-increase-button"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                  <p className="text-black">24</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-decrease-button"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex gap-2">
            <div className="w-16 h-16">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>

            <div
              className="flex flex-col justify-between"
              style={{width: 'calc(100% - 80px)'}}
            >
              <p className="text-babg-black">لوسیون جنرال</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-black text-center">232,343</p>
                  <p className="text-black text-center text-xs">تومان</p>
                </div>
                <div className="flex items-center justify-between gap-2 border-[1px] border-black rounded-lg px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-increase-button"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                  <p className="text-black">24</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-decrease-button"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex gap-2">
            <div className="w-16 h-16">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>

            <div
              className="flex flex-col justify-between"
              style={{width: 'calc(100% - 80px)'}}
            >
              <p className="text-babg-black">لوسیون جنرال</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-black text-center">232,343</p>
                  <p className="text-black text-center text-xs">تومان</p>
                </div>
                <div className="flex items-center justify-between gap-2 border-[1px] border-black rounded-lg px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-increase-button"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                  <p className="text-black">24</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-decrease-button"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex gap-2">
            <div className="w-16 h-16">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>

            <div
              className="flex flex-col justify-between"
              style={{width: 'calc(100% - 80px)'}}
            >
              <p className="text-babg-black">لوسیون جنرال</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-black text-center">232,343</p>
                  <p className="text-black text-center text-xs">تومان</p>
                </div>
                <div className="flex items-center justify-between gap-2 border-[1px] border-black rounded-lg px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-increase-button"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                  <p className="text-black">24</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-decrease-button"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex gap-2">
            <div className="w-16 h-16">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>

            <div
              className="flex flex-col justify-between"
              style={{width: 'calc(100% - 80px)'}}
            >
              <p className="text-babg-black">لوسیون جنرال</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-black text-center">232,343</p>
                  <p className="text-black text-center text-xs">تومان</p>
                </div>
                <div className="flex items-center justify-between gap-2 border-[1px] border-black rounded-lg px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-increase-button"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                  <p className="text-black">24</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-decrease-button"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex gap-2">
            <div className="w-16 h-16">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>

            <div
              className="flex flex-col justify-between"
              style={{width: 'calc(100% - 80px)'}}
            >
              <p className="text-babg-black">لوسیون جنرال</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-black text-center">232,343</p>
                  <p className="text-black text-center text-xs">تومان</p>
                </div>
                <div className="flex items-center justify-between gap-2 border-[1px] border-black rounded-lg px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-increase-button"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                  <p className="text-black">24</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-decrease-button"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex gap-2">
            <div className="w-16 h-16">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>

            <div
              className="flex flex-col justify-between"
              style={{width: 'calc(100% - 80px)'}}
            >
              <p className="text-babg-black">لوسیون جنرال</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-black text-center">232,343</p>
                  <p className="text-black text-center text-xs">تومان</p>
                </div>
                <div className="flex items-center justify-between gap-2 border-[1px] border-black rounded-lg px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-increase-button"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                  <p className="text-black">24</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-decrease-button"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex gap-2">
            <div className="w-16 h-16">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>

            <div
              className="flex flex-col justify-between"
              style={{width: 'calc(100% - 80px)'}}
            >
              <p className="text-babg-black">لوسیون جنرال</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-black text-center">232,343</p>
                  <p className="text-black text-center text-xs">تومان</p>
                </div>
                <div className="flex items-center justify-between gap-2 border-[1px] border-black rounded-lg px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-increase-button"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                  <p className="text-black">24</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-decrease-button"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex gap-2">
            <div className="w-16 h-16">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>

            <div
              className="flex flex-col justify-between"
              style={{width: 'calc(100% - 80px)'}}
            >
              <p className="text-babg-black">لوسیون جنرال</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-black text-center">232,343</p>
                  <p className="text-black text-center text-xs">تومان</p>
                </div>
                <div className="flex items-center justify-between gap-2 border-[1px] border-black rounded-lg px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-increase-button"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                  <p className="text-black">24</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-decrease-button"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex gap-2">
            <div className="w-16 h-16">
              <img
                src="../image/shampoo-image.jpg"
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>

            <div
              className="flex flex-col justify-between"
              style={{width: 'calc(100% - 80px)'}}
            >
              <p className="text-babg-black">لوسیون جنرال</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-black text-center">232,343</p>
                  <p className="text-black text-center text-xs">تومان</p>
                </div>
                <div className="flex items-center justify-between gap-2 border-[1px] border-black rounded-lg px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-increase-button"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                  <p className="text-black">24</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-decrease-button"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex gap-2">
            <div className="w-16 h-16">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>

            <div
              className="flex flex-col justify-between"
              style={{width: 'calc(100% - 80px)'}}
            >
              <p className="text-babg-black">لوسیون جنرال</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-black text-center">232,343</p>
                  <p className="text-black text-center text-xs">تومان</p>
                </div>
                <div className="flex items-center justify-between gap-2 border-[1px] border-black rounded-lg px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-increase-button"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                  <p className="text-black">24</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-decrease-button"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex gap-2">
            <div className="w-16 h-16">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>

            <div
              className="flex flex-col justify-between"
              style={{width: 'calc(100% - 80px)'}}
            >
              <p className="text-babg-black">لوسیون جنرال</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-black text-center">232,343</p>
                  <p className="text-black text-center text-xs">تومان</p>
                </div>
                <div className="flex items-center justify-between gap-2 border-[1px] border-black rounded-lg px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-increase-button"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                  <p className="text-black">24</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-decrease-button"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex gap-2">
            <div className="w-16 h-16">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>

            <div
              className="flex flex-col justify-between"
              style={{width: 'calc(100% - 80px)'}}
            >
              <p className="text-babg-black">لوسیون جنرال</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="text-black text-center">232,343</p>
                  <p className="text-black text-center text-xs">تومان</p>
                </div>
                <div className="flex items-center justify-between gap-2 border-[1px] border-black rounded-lg px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-increase-button"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                  <p className="text-black">24</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 cursor-pointer text-black"
                    id="product-decrease-button"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex flex-col gap-2 max-h-[214px] sticky top-20 lg:top-36">
          <p className="text-sm text-babg-black">
            کد تخفیف خود را وارد کنید و دکمه ثبت را بزنید
          </p>
          <div className="flex items-center gap-4">
            <input
              type="text"
              className="bg-gray-200 outline-none rounded-md p-2 w-full"
            />
            <button
              type="button"
              className="bg-[#FF00FF] text-white py-2 px-8 rounded-md border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF]"
            >
              ثبت
            </button>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-babg-black text-sm">
              قیمت کل <span className="text-xs">(بدون تخفیف)</span>
            </p>
            <p className="text-babg-black">
              100,000<span className="text-xs">تومان</span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="flex items-center justify-between text-babg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="text-sm">سود شما از خرید</span>
            </p>
            <p className="text-babg-black">
              25,000<span className="text-xs">تومان</span>
            </p>
          </div>
          <hr />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-babg-black">مبلغ قابل پرداخت</p>
              <p className="text-babg-black text-center">
                75,000<span className="text-xs">تومان</span>
              </p>
            </div>
            <Link to="/check-out">
              <button
                type="button"
                className="bg-[#FF00FF] text-white py-2 px-8 rounded-md border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF]"
              >
                ثبت سفارش
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
