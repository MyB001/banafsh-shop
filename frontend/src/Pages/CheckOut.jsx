import React, { useState } from "react";
import { LuX } from "react-icons/lu";
import { MdShoppingCartCheckout } from "react-icons/md";

export default function CheckOut() {
  const [isShowAddressForm, setIsShowAddressForm] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-center py-12 gap-6">
        <div className="relative h-1 w-20 sm:w-40 lg:w-60 bg-[#FF00FF] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 absolute -bottom-2.5 left-full text-[#FF00FF]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
          <p className="absolute top-3.5 -right-10 text-sm text-[#FF00FF]">
            سبد خرید
          </p>
          <div className="absolute -bottom-2.5 right-full w-6 h-6 rounded-full border-2 border-black text-black"></div>
        </div>
        <div className="relative h-1 w-20 sm:w-40 lg:w-60 bg-black text-black rounded-full">
          <p className="absolute top-4 -right-14 text-sm">اطلاعات ارسال</p>
          <div className="absolute -bottom-2.5 right-full w-6 h-6 rounded-full border-2 border-black text-black"></div>
          <p className="absolute top-3.5 -left-14 text-sm">شیوه پرداخت</p>
        </div>
      </div>

      <div className="px-2">
        <p className="text-black mb-2 text-sm font-bold">آدرس محل ارسال</p>
        <hr className="bg-white" />
      </div>

      <div className="w-[90%] xl:max-w-6xl mx-auto">
        <div className=" w-full md:w-11/12 md:min-h-[60vh] md:grid md:grid-cols-2 mx-auto">
          <div className="m-2">
            {/* <!-- When no address is entered --> */}
            <div className="flex flex-col items-center justify-center gap-2">
              <MdShoppingCartCheckout className="w-16 h-16 text-[#FF00FF]" />
              <p className="text-gray-600 text-sm font-semibold">
                لطفا برای ثبت سفارش یک آدرس اضافه کنید
              </p>
              <button
                type="button"
                className="bg-[#FF00FF] text-white py-2 px-8 rounded-md border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF] new-address-button"
                onClick={() => setIsShowAddressForm(true)}
              >
                افزودن آدرس جدید
              </button>
            </div>

            {/* <!-- When at least one address is entered -->   */}
            <div className="hidden">
              <button
                type="button"
                className="bg-[#FF00FF] m-2 text-white py-2 px-8 rounded-md border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF] new-address-button"
                onClick={() => setIsShowAddressForm(true)}
              >
                افزودن آدرس جدید
              </button>

              <div className="bg-white flex gap-2 m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
                <div className="flex flex-col justify-between items-center">
                  <div className="text-red-500">
                    <input type="radio" name="address" />
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grow shrink flex flex-col gap-2">
                  <p className="text-sm text-black">
                    کاشانی خیابان طالقانی تقاطع بمانی کوچه ایرانی 12
                  </p>
                  <hr />
                  <div className="flex items-center gap-1">
                    <p className="text-xs text-black">
                      پلاک <span>4</span>
                    </p>
                    <span className="text-black">|</span>
                    <p className="text-xs text-black">
                      واحد <span>2</span>
                    </p>
                    <span className="text-black">|</span>
                    <p className="text-xs text-black">
                      کدپستی <span>1234567893</span>
                    </p>
                  </div>
                  <hr />
                  <div className="grid cursor-pointer edit-address-button">
                    <button
                      type="button"
                      className="text-black font-semibold flex items-center justify-self-end"
                    >
                      <p className="text-sm">ویرایش</p>
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
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white flex gap-2 m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
                <div className="flex flex-col justify-between items-center">
                  <div className="text-red-500">
                    <input type="radio" name="address" />
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grow shrink flex flex-col gap-2">
                  <p className="text-sm text-black">
                    کاشانی خیابان طالقانی تقاطع بمانی کوچه ایرانی 12
                  </p>
                  <hr />
                  <div className="flex items-center gap-1">
                    <p className="text-xs text-black">
                      پلاک <span>4</span>
                    </p>
                    <span className="text-black">|</span>
                    <p className="text-xs text-black">
                      واحد <span>2</span>
                    </p>
                    <span className="text-black">|</span>
                    <p className="text-xs text-black">
                      کدپستی <span>1234567893</span>
                    </p>
                  </div>
                  <hr />
                  <div className="grid cursor-pointer edit-address-button">
                    <button
                      type="button"
                      className="text-black font-semibold flex items-center justify-self-end"
                    >
                      <p className="text-sm">ویرایش</p>
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
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white flex gap-2 m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
                <div className="flex flex-col justify-between items-center">
                  <div className="text-red-500">
                    <input type="radio" name="address" />
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grow shrink flex flex-col gap-2">
                  <p className="text-sm text-black">
                    کاشانی خیابان طالقانی تقاطع بمانی کوچه ایرانی 12
                  </p>
                  <hr />
                  <div className="flex items-center gap-1">
                    <p className="text-xs text-black">
                      پلاک <span>4</span>
                    </p>
                    <span className="text-black">|</span>
                    <p className="text-xs text-black">
                      واحد <span>2</span>
                    </p>
                    <span className="text-black">|</span>
                    <p className="text-xs text-black">
                      کدپستی <span>1234567893</span>
                    </p>
                  </div>
                  <hr />
                  <div className="grid cursor-pointer edit-address-button">
                    <button
                      type="button"
                      className="text-black font-semibold flex items-center justify-self-end"
                    >
                      <p className="text-sm">ویرایش</p>
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
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl flex flex-col gap-2 max-h-[140px] sticky top-32 lg:top-36">
            <div className="flex items-center justify-between">
              <p className="text-black text-sm">
                قیمت کل <span className="text-xs">(بدون تخفیف)</span>
              </p>
              <p className="text-black">
                100,000<span className="text-xs">تومان</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="flex items-center justify-between text-black">
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
              <p className="text-black">
                25,000<span className="text-xs">تومان</span>
              </p>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-black">مبلغ قابل پرداخت</p>
                <p className="text-black text-center">
                  75,000<span className="text-xs">تومان</span>
                </p>
              </div>
              <button
                type="button"
                className="bg-[#FF00FF] text-white py-2 px-8 rounded-md border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF]"
              >
                ثبت سفارش
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`z-20 fixed top-0 left-0 w-screen h-screen ${
          isShowAddressForm ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-200`}
        id="form-container__addr"
      >
        <div
          className="bg-gray-500 w-full h-full opacity-80"
          id="back-page__addr"
        ></div>
        <form
          action=""
          className="w-full h-full lg:w-4/5 lg:h-4/5 fixed top-0 left-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:left-1/2 bg-white rounded-lg"
          id="form__addr"
        >
          <div className="h-[10%] flex items-center justify-between p-4">
            <p className="text-black">افزودن آدرس پستی</p>
            <LuX
              className="w-6 h-6 text-black cursor-pointer"
              onClick={() => setIsShowAddressForm(false)}
            />
          </div>

          <hr />

          <div className="flex flex-col gap-4 p-4 h-[80%] sm:grid sm:grid-cols-2 sm:items-center overflow-auto overscroll-none">
            <div className="">
              <label for="username_addr" className="text-sm text-black">
                نام و نام خانوادگی تحویل گیرنده
              </label>
              <input
                id="username_addr"
                type="text"
                className="w-full p-2 mt-2 outline-none border-[1px] border-black text-black focus:border-[#FF00FF] rounded-md transition-all"
              />
            </div>
            <div className="">
              <label for="phone-number_addr" className="text-sm text-black">
                شماره تلفن تحویل گیرنده<span className="text-red-500">*</span>
              </label>
              <input
                id="phone-number_addr"
                type="text"
                required
                maxlength="11"
                className="w-full p-2 mt-2 outline-none border-[1px] border-black text-black focus:border-[#FF00FF] rounded-md transition-all"
              />
            </div>
            <div className="">
              <label for="province_addr" className="text-sm text-black">
                استان<span className="text-red-500">*</span>
              </label>
              <input
                id="address"
                type="text"
                required
                className="w-full p-2 mt-2 outline-none border-[1px] border-black text-black focus:border-[#FF00FF] rounded-md transition-all"
              />
            </div>
            <div className="">
              <label for="city_addr" className="text-sm text-black">
                شهر<span className="text-red-500">*</span>
              </label>
              <input
                id="city_addr"
                type="text"
                required
                className="w-full p-2 mt-2 outline-none border-[1px] border-black text-black focus:border-[#FF00FF] rounded-md transition-all"
              />
            </div>
            <div className="">
              <label for="plaque_addr" className="text-sm text-black">
                پلاک<span className="text-red-500">*</span>
              </label>
              <input
                id="plaque_addr"
                type="text"
                required
                className="w-full p-2 mt-2 outline-none border-[1px] border-black text-black focus:border-[#FF00FF] rounded-md transition-all"
              />
            </div>
            <div className="">
              <label for="unit_addr" className="text-sm text-black">
                واحد<span className="text-red-500">*</span>
              </label>
              <input
                id="unit_addr"
                type="text"
                required
                className="w-full p-2 mt-2 outline-none border-[1px] border-black text-black focus:border-[#FF00FF] rounded-md transition-all"
              />
            </div>
            <div className="">
              <label for="postal_code" className="text-sm text-black">
                کد پستی<span className="text-red-500">*</span>
              </label>
              <input
                id="postal_code"
                type="text"
                required
                className="w-full p-2 mt-2 outline-none border-[1px] border-black text-black focus:border-[#FF00FF] rounded-md transition-all"
              />
            </div>
            <div className="col-span-2">
              <label for="address" className="text-sm text-black">
                نشانی کامل پستی<span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                required
                className="resize-none w-full p-2 mt-2 outline-none border-[1px] border-black text-black focus:border-[#FF00FF] rounded-md transition-all"
              ></textarea>
            </div>
          </div>

          <hr />

          <div className="h-[10%] flex items-center justify-center p-4">
            <button
              type="submit"
              className="bg-[#FF00FF] text-white py-2 px-8 rounded-md border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF]"
            >
              تایید و ادامه
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
