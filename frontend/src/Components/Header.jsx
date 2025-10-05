import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoSearch } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import NavCategory from "./Sidebars&Navbars/NavCategory";
import SidebarCategory from "./Sidebars&Navbars/SidebarCategory"
import { Context } from "../ContextState";
import Search from "./Sidebars&Navbars/Search";

export default function Header() {
  const { setIsShowSidebar } = useContext(Context);
  const { setIsShowSearchBox } = useContext(Context);

  const categories = [
    {
      headName: "آرایشی",
      subCategory: [
        {
          name: "آرایش صورت",
          subCategories: [
            {
              name: "کرم پودر",
              subCategories: [
                { name: "کرم پودر مایع" },
                { name: "کرم پودر جامد" },
              ],
            },
            {
              name: "کانسیلر",
              subCategories: [
                {
                  name: "کانسیلر مایع",
                  subCategories: [
                    {
                      name: "کرم پودر",
                      subCategories: [
                        { name: "کرم پودر مایع" },
                        { name: "کرم پودر جامد" },
                      ],
                    },
                  ],
                },
                { name: "کانسیلر استیکی" },
              ],
            },
          ],
        },
        {
          name: "آرایش چشم",
          // subCategories: [
          //   {
          //     name: "ریمل",
          //     subCategories: [
          //       { name: "ریمل بلندکننده" },
          //       { name: "ریمل حجم‌دهنده" },
          //     ],
          //   },
          //   { name: "خط چشم" },
          // ],
        },
      ],
    },
    {
      headName: "مد",
      subCategory: [
        {
          name: "اکسسوری",
          subCategories: [
            {
              name: "کرم پودر",
              subCategories: [
                { name: "کرم پودر مایع" },
                { name: "کرم پودر جامد" },
              ],
            },
          ],
        },
        {
          name: "آرایش چشم",
          subCategories: [{ name: "خط چشم" }],
        },
      ],
    },
  ];

  return (
    <div className="z-10 top-0 sticky">
      <header>
        <div
          className="bg-white border-b-2 shadow-md w-full p-4 transition-all duration-1000"
          id="header-section"
        >
          <div className="grid grid-cols-3 lg:hidden">
            <div className="justify-self-start self-center flex items-center gap-3">
              <div className="border-solid rounded-md border-[1px] border-[#FF00FF] bg-[#FF00FF] text-white hover:bg-white hover:text-[#FF00FF] p-0.5 transition-all">
                <IoMenu
                  className="w-6 h-6 cursor-pointer"
                  id="store-bookmark"
                  onClick={() => setIsShowSidebar(true)}
                />
              </div>
              <div className="border-solid rounded-md border-[1px] border-[#FF00FF] bg-[#FF00FF] text-white hover:bg-white hover:text-[#FF00FF] p-0.5 transition-all">
                <IoSearch
                  className="w-6 h-6 cursor-pointer"
                  id="search-bookmark"
                  onClick={() => setIsShowSearchBox(true)}
                />
              </div>
            </div>

            <div className="self-center justify-self-center text-[#FF00FF] font-bold italic text-xl">
              <Link to="/">بنفش بیوتی</Link>
            </div>

            <div className="justify-self-end self-center flex items-center gap-3">
              <div className="border-solid rounded-md border-[1px] border-[#FF00FF] bg-[#FF00FF] text-white hover:bg-white hover:text-[#FF00FF] p-0.5 transition-all">
                <Link to="/register">
                  <IoIosContact
                    className="w-6 h-6 cursor-pointer"
                    id="sign-in-bookmark"
                  />
                </Link>
              </div>
              {/* <!-- This section is displayed when the user enters the site --> */}
              {/* <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 cursor-pointer"
                  id="person-details-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 transition-all"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="text-xs text-black">بدون نام</p>
                </button>
                <div
                  className="absolute top-[150%] left-0 w-48 bg-white shadow-md shadow-[#FF00FF] p-2 rounded-md hidden"
                  id="person-details-section"
                >
                  <a
                    href="xcosmetics.html"
                    className="flex items-center justify-start gap-2 p-2 hover:bg-gray-100 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-black"
                    >
                      <path d="M1 4.25a3.733 3.733 0 0 1 2.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0 0 16.75 2H3.25A2.25 2.25 0 0 0 1 4.25ZM1 7.25a3.733 3.733 0 0 1 2.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0 0 16.75 5H3.25A2.25 2.25 0 0 0 1 7.25ZM7 8a1 1 0 0 1 1 1 2 2 0 1 0 4 0 1 1 0 0 1 1-1h3.75A2.25 2.25 0 0 1 19 10.25v5.5A2.25 2.25 0 0 1 16.75 18H3.25A2.25 2.25 0 0 1 1 15.75v-5.5A2.25 2.25 0 0 1 3.25 8H7Z" />
                    </svg>
                    <p className="text-sm text-black">کیف پول</p>
                  </a>
                  <a
                    href="x"
                    className="flex items-center justify-start gap-2 p-2 hover:bg-gray-100 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-black"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-black">سفارش ها</p>
                  </a>
                  <a
                    href="x"
                    className="flex items-center justify-start gap-2 p-2 hover:bg-gray-100 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-black"
                    >
                      <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
                    </svg>
                    <p className="text-sm text-black">علاقه مندی ها</p>
                  </a>
                  <a
                    href="x"
                    className="flex items-center justify-start gap-2 p-2 hover:bg-gray-100 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-black"
                    >
                      <path
                        fill-rule="evenodd"
                        d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-black">آدرس های من</p>
                  </a>
                  <a
                    href="x"
                    className="flex items-center justify-start gap-2 p-2 hover:bg-gray-100 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-black"
                    >
                      <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                      <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                    </svg>
                    <p className="text-sm text-black">ویرایش حساب کاربری</p>
                  </a>
                  <a
                    href="x"
                    className="flex items-center justify-start gap-2 p-2 hover:bg-gray-100 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-black"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M14 10a.75.75 0 0 0-.75-.75H3.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 14 10Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-black">خروج از حساب کاربری</p>
                  </a>
                </div>
              </div> */}
              <div className="border-solid rounded-md border-[1px] border-[#FF00FF] bg-[#FF00FF] text-white hover:bg-white hover:text-[#FF00FF] p-0.5 transition-all">
                <Link to="/purchase">
                  <MdShoppingCart
                    className="w-6 h-6 cursor-pointer"
                    id="purchase-bookmark"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid">
            <div className="flex flex-col gap-4">
              <div className="flex justify-around gap-4">
                <div className="self-center justify-self-center text-[#FF00FF] font-bold italic text-xl">
                  <Link to="/">بنفش بیوتی</Link>
                </div>
                <div className="relative border-solid rounded-md border-[1px] border-[#FF00FF] bg-[#FF00FF] text-white hover:bg-white hover:text-[#FF00FF] p-0.5 transition-all">
                  <Link to="/purchase">
                    <MdShoppingCart
                      className="w-8 h-8 cursor-pointer"
                      id="purchase-bookmark-lg"
                    />
                  </Link>
                  <div
                    className="hidden bg-[#ffffff00] backdrop-blur-sm w-80 absolute right-0 top-[110%] z-30 shadow-md shadow-[#FF00FF] border-[1px] border-[#FF00FF] rounded-lg"
                    id="cart-preview"
                  >
                    <div className="flex items-center justify-between p-4 rounded-t-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer text-black"
                        id="close-cart-preview-button"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                      <p className="text-center text-black">سبد خرید</p>
                    </div>
                    <hr />
                    {/* <!-- when the shopping cart is empty --> */}
                    {/* <div className="bg-white p-2 w-full flex justify-center items-center rounded-b-lg">
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="0.8"
                      stroke="currentColor"
                      className="w-16 h-16 text-black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                      />
                    </svg>
                    <p className="text-black">سبد خرید شما خالی می باشد</p>
                  </div>
                </div> */}

                    {/* <!-- when the product is added to the cart --> */}
                    <div className="max-h-[40vh] overflow-auto">
                      <div className="m-2 p-2 border-[1px] rounded-md flex gap-2 bg-white shadow-sm border-[#FF00FF] shadow-[#FF00FF]">
                        <div className="w-16 h-16">
                          <img
                            src="../image/accessory.jpg"
                            alt=""
                            className="w-full h-full rounded-md"
                          />
                        </div>

                        <div
                          className="flex flex-col justify-between"
                          style={{ width: "calc(100% - 80px)" }}
                        >
                          <p className="text-black line-clamp-1">لوسیون جنرال</p>
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <p className="text-black text-center">232,343</p>
                              <p className="text-black text-center text-xs">
                                تومان
                              </p>
                            </div>
                            <div className="flex items-center justify-between gap-2 border-[1px] border-[#FF00FF] rounded-lg px-2">
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
                      <div className="m-2 p-2 border-[1px] rounded-md flex gap-2 bg-white shadow-sm border-[#FF00FF] shadow-[#FF00FF]">
                        <div className="w-16 h-16">
                          <img
                            src="../image/accessory.jpg"
                            alt=""
                            className="w-full h-full rounded-md"
                          />
                        </div>

                        <div
                          className="flex flex-col justify-between"
                          style={{ width: "calc(100% - 80px)" }}
                        >
                          <p className="text-black line-clamp-1">لوسیون جنرال</p>
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <p className="text-black text-center">232,343</p>
                              <p className="text-black text-center text-xs">
                                تومان
                              </p>
                            </div>
                            <div className="flex items-center justify-between gap-2 border-[1px] border-[#FF00FF] rounded-lg px-2">
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
                      <div className="m-2 p-2 border-[1px] rounded-md flex gap-2 bg-white shadow-sm border-[#FF00FF] shadow-[#FF00FF]">
                        <div className="w-16 h-16">
                          <img
                            src="../image/accessory.jpg"
                            alt=""
                            className="w-full h-full rounded-md"
                          />
                        </div>

                        <div
                          className="flex flex-col justify-between"
                          style={{ width: "calc(100% - 80px)" }}
                        >
                          <p className="text-black line-clamp-1">لوسیون جنرال</p>
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <p className="text-black text-center">232,343</p>
                              <p className="text-black text-center text-xs">
                                تومان
                              </p>
                            </div>
                            <div className="flex items-center justify-between gap-2 border-[1px] border-[#FF00FF] rounded-lg px-2">
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
                      <div className="m-2 p-2 border-[1px] rounded-md flex gap-2 bg-white shadow-sm border-[#FF00FF] shadow-[#FF00FF]">
                        <div className="w-16 h-16">
                          <img
                            src="../image/accessory.jpg"
                            alt=""
                            className="w-full h-full rounded-md"
                          />
                        </div>

                        <div
                          className="flex flex-col justify-between"
                          style={{ width: "calc(100% - 80px)" }}
                        >
                          <p className="text-black line-clamp-1">لوسیون جنرال</p>
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <p className="text-black text-center">232,343</p>
                              <p className="text-black text-center text-xs">
                                تومان
                              </p>
                            </div>
                            <div className="flex items-center justify-between gap-2 border-[1px] border-[#FF00FF] rounded-lg px-2">
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
                      <div className="m-2 p-2 border-[1px] rounded-md flex gap-2 bg-white shadow-sm border-[#FF00FF] shadow-[#FF00FF]">
                        <div className="w-16 h-16">
                          <img
                            src="../image/accessory.jpg"
                            alt=""
                            className="w-full h-full rounded-md"
                          />
                        </div>

                        <div
                          className="flex flex-col justify-between"
                          style={{ width: "calc(100% - 80px)" }}
                        >
                          <p className="text-black line-clamp-1">لوسیون جنرال</p>
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <p className="text-black text-center">232,343</p>
                              <p className="text-black text-center text-xs">
                                تومان
                              </p>
                            </div>
                            <div className="flex items-center justify-between gap-2 border-[1px] border-[#FF00FF] rounded-lg px-2">
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

                    <hr />
                    <div className="flex justify-between p-4 rounded-b-lg">
                      <div className="">
                        <p className="text-black text-center text-sm">
                          مبلغ کل
                        </p>
                        <div className="flex items-center">
                          <p className="text-black text-center text-lg">
                            12,232,343
                          </p>
                          <p className="text-black text-center text-xs">
                            تومان
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="bg-[#FF00FF] text-white border-[1px] border-[#FF00FF] px-4 rounded-md active:text-[#FF00FF] active:bg-white"
                      >
                        ثبت سفارش
                      </button>
                    </div>
                  </div>
                </div>

                {/* <!-- This section is displayed when the user enters the site --> */}
                {/* <div className="relative self-center">
                  <button
                    type="button"
                    className="flex items-center gap-1 cursor-pointer"
                    id="person-details-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 transition-all"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p className="text-xs text-black">بدون نام</p>
                  </button>
                  <div
                    className="absolute top-[150%] left-0 w-48 bg-white shadow-md shadow-[#FF00FF] p-2 rounded-md hidden"
                    id="person-details-section"
                  >
                    <a
                      href="xcosmetics.html"
                      className="flex items-center justify-start gap-2 p-2 hover:bg-gray-100 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path d="M1 4.25a3.733 3.733 0 0 1 2.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0 0 16.75 2H3.25A2.25 2.25 0 0 0 1 4.25ZM1 7.25a3.733 3.733 0 0 1 2.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0 0 16.75 5H3.25A2.25 2.25 0 0 0 1 7.25ZM7 8a1 1 0 0 1 1 1 2 2 0 1 0 4 0 1 1 0 0 1 1-1h3.75A2.25 2.25 0 0 1 19 10.25v5.5A2.25 2.25 0 0 1 16.75 18H3.25A2.25 2.25 0 0 1 1 15.75v-5.5A2.25 2.25 0 0 1 3.25 8H7Z" />
                      </svg>
                      <p className="text-sm text-black">کیف پول</p>
                    </a>
                    <a
                      href="x"
                      className="flex items-center justify-start gap-2 p-2 hover:bg-gray-100 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p className="text-sm text-black">سفارش ها</p>
                    </a>
                    <a
                      href="x"
                      className="flex items-center justify-start gap-2 p-2 hover:bg-gray-100 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
                      </svg>
                      <p className="text-sm text-black">علاقه مندی ها</p>
                    </a>
                    <a
                      href="x"
                      className="flex items-center justify-start gap-2 p-2 hover:bg-gray-100 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path
                          fill-rule="evenodd"
                          d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p className="text-sm text-black">آدرس های من</p>
                    </a>
                    <a
                      href="x"
                      className="flex items-center justify-start gap-2 p-2 hover:bg-gray-100 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                      </svg>
                      <p className="text-sm text-black">ویرایش حساب کاربری</p>
                    </a>
                    <a
                      href="x"
                      className="flex items-center justify-start gap-2 p-2 hover:bg-gray-100 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-black"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z"
                          clip-rule="evenodd"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M14 10a.75.75 0 0 0-.75-.75H3.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 14 10Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p className="text-sm text-black">خروج از حساب کاربری</p>
                    </a>
                  </div>
                </div> */}
                <div className="w-1/2 relative">
                  <input
                    type="search"
                    className="w-full h-full px-2 outline-none rounded-lg text-black text-sm border-2 focus:border-[#FF00FF]"
                    placeholder="جستجو کنید ..."
                  />
                  {/* xl:grid xl:grid-cols-2 */}
                  <div
                    className="hidden z-30 border-[1px] border-[#FF00FF] shadow-sm shadow-[#FF00FF] backdrop-blur-sm top-12 absolute w-full bg-[#ffffff00] rounded-lg max-h-[40vh] overflow-auto"
                    id="search-box"
                  >
                    {/* <!-- In large mode, the user's search results are displayed in these formats --> */}
                    {/* <!-- example 1 --> */}
                    <div className="m-4 p-2 border-[1px] border-solid rounded-xl bg-white shadow-md shadow-[#FF00FF]">
                      <a href="x" className="grid grid-cols-3">
                        <div className="w-16 h-16">
                          <img
                            src="../image/beauty-purple.jpg"
                            alt=""
                            className="h-full w-full object-cover rounded-lg"
                          />
                        </div>

                        <div className="col-span-2">
                          <h1 className="text-black m-1">محصول 1</h1>
                          <p className="text-black">115,000</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-solid rounded-md border-[1px] border-[#FF00FF] bg-[#FF00FF] text-white hover:bg-white hover:text-[#FF00FF] p-0.5 transition-all">
                  <Link to="/register">
                    <IoIosContact
                      className="w-8 h-8 cursor-pointer"
                      id="sign-in-bookmark-lg"
                    />
                  </Link>
                </div>
                <div className="self-center justify-self-center text-[#FF00FF] font-bold italic text-xl">
                  <Link to="/">بنفش بیوتی</Link>
                </div>
              </div>

              <hr />

              <div className="z-10">
                <NavCategory categories={categories} />
              </div>
            </div>
          </div>

          <SidebarCategory categories={categories} />
          <Search />
        </div>
      </header>
    </div>
  );
}
