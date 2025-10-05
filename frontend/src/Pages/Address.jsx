import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { LuX } from "react-icons/lu";

export default function Address() {
  const [isShowAddressForm, setIsShowAddressForm] = useState(false);

  return (
    <div action="" class="grid col-span-3">
      <p className="p-3 font-bold">آدرس</p>
      <hr />
      {/* <!-- When no address is entered --> */}
      <div class="flex flex-col h-[50vh] items-center justify-center gap-2">
        <FaShoppingBasket className="w-32 h-32 text-[#FF00FF]" />
        <p class="text-[#FF00FF] text-lg font-semibold">
          لطفا برای ثبت سفارش یک آدرس اضافه کنید
        </p>
        <button
          type="button"
          class="bg-[#FF00FF] text-white py-2 px-8 rounded-md border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF] new-address-button"
          onClick={() => setIsShowAddressForm(true)}
        >
          افزودن آدرس جدید
        </button>
      </div>
      {/* <!-- When at least one address is entered -->   */}
      <div class="">
        <button
          type="button"
          class="bg-[#FF00FF] m-2 text-white py-2 px-8 rounded-md border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF] new-address-button"
          onClick={() => setIsShowAddressForm(true)}
        >
          افزودن آدرس جدید
        </button>

        <div class="bg-white flex gap-2 m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
          <div class="flex flex-col justify-between items-center">
            <div class="text-red-500">
              <input type="radio" name="address" />
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
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
          <div class="grow shrink flex flex-col gap-2">
            <p class="text-sm text-black">
              کاشانی خیابان طالقانی تقاطع بمانی کوچه ایرانی 12
            </p>
            <hr />
            <div class="flex items-center gap-1">
              <p class="text-xs text-black">
                پلاک <span>4</span>
              </p>
              <span class="text-black">|</span>
              <p class="text-xs text-black">
                واحد <span>2</span>
              </p>
              <span class="text-black">|</span>
              <p class="text-xs text-black">
                کدپستی <span>1234567893</span>
              </p>
            </div>
            <hr />
            <div class="grid cursor-pointer edit-address-button">
              <button
                type="button"
                class="text-black font-semibold flex items-center justify-self-end"
              >
                <p class="text-sm">ویرایش</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
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
        <div class="bg-white flex gap-2 m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
          <div class="flex flex-col justify-between items-center">
            <div class="text-red-500">
              <input type="radio" name="address" />
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
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
          <div class="grow shrink flex flex-col gap-2">
            <p class="text-sm text-black">
              کاشانی خیابان طالقانی تقاطع بمانی کوچه ایرانی 12
            </p>
            <hr />
            <div class="flex items-center gap-1">
              <p class="text-xs text-black">
                پلاک <span>4</span>
              </p>
              <span class="text-black">|</span>
              <p class="text-xs text-black">
                واحد <span>2</span>
              </p>
              <span class="text-black">|</span>
              <p class="text-xs text-black">
                کدپستی <span>1234567893</span>
              </p>
            </div>
            <hr />
            <div class="grid cursor-pointer edit-address-button">
              <button
                type="button"
                class="text-black font-semibold flex items-center justify-self-end"
              >
                <p class="text-sm">ویرایش</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
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
        <div class="bg-white flex gap-2 m-2 p-2 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
          <div class="flex flex-col justify-between items-center">
            <div class="text-red-500">
              <input type="radio" name="address" />
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
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
          <div class="grow shrink flex flex-col gap-2">
            <p class="text-sm text-black">
              کاشانی خیابان طالقانی تقاطع بمانی کوچه ایرانی 12
            </p>
            <hr />
            <div class="flex items-center gap-1">
              <p class="text-xs text-black">
                پلاک <span>4</span>
              </p>
              <span class="text-black">|</span>
              <p class="text-xs text-black">
                واحد <span>2</span>
              </p>
              <span class="text-black">|</span>
              <p class="text-xs text-black">
                کدپستی <span>1234567893</span>
              </p>
            </div>
            <hr />
            <div class="grid cursor-pointer edit-address-button">
              <button
                type="button"
                class="text-black font-semibold flex items-center justify-self-end"
              >
                <p class="text-sm">ویرایش</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
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
      <div
        class={`z-20 fixed top-0 left-0 w-screen h-screen ${
          isShowAddressForm ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-200`}
        id="form-container__addr"
      >
        <div
          class="bg-gray-500 w-full h-full opacity-80 transition-all"
          id="back-page__addr"
        ></div>
        <form
          action=""
          class="w-full h-full lg:w-4/5 lg:h-4/5 fixed top-0 left-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:left-1/2 bg-white transition-all duration-300"
          id="form__addr"
        >
          <div class="h-[10%] flex items-center justify-between p-4">
            <p class="text-black">افزودن آدرس پستی</p>
            <LuX
              className="w-6 h-6 text-black cursor-pointer"
              onClick={() => setIsShowAddressForm(false)}
            />
          </div>

          <hr />

          <div class="flex flex-col gap-4 p-2 h-[80%] sm:grid sm:grid-cols-2 sm:items-center overflow-auto overscroll-none">
            <div class="">
              <label for="username_addr" class="text-sm text-black">
                نام و نام خانوادگی تحویل گیرنده
              </label>
              <input
                id="username_addr"
                type="text"
                class="w-full p-2 mt-2 outline-none border-[1px] border-black focus:border-[#FF00FF] rounded-md transition-all"
              />
            </div>
            <div class="">
              <label for="phone-number_addr" class="text-sm text-black">
                شماره تلفن تحویل گیرنده<span class="text-red-500">*</span>
              </label>
              <input
                id="phone-number_addr"
                type="text"
                required
                maxlength="11"
                class="w-full p-2 mt-2 outline-none border-[1px] border-black focus:border-[#FF00FF] rounded-md transition-all"
              />
            </div>
            <div class="">
              <label for="province_addr" class="text-sm text-black">
                استان<span class="text-red-500">*</span>
              </label>
              <input
                id="address"
                type="text"
                required
                class="w-full p-2 mt-2 outline-none border-[1px] border-black focus:border-[#FF00FF] rounded-md transition-all"
              />
            </div>
            <div class="">
              <label for="city_addr" class="text-sm text-black">
                شهر<span class="text-red-500">*</span>
              </label>
              <input
                id="city_addr"
                type="text"
                required
                class="w-full p-2 mt-2 outline-none border-[1px] border-black focus:border-[#FF00FF] rounded-md transition-all"
              />
            </div>
            <div class="">
              <label for="plaque_addr" class="text-sm text-black">
                پلاک<span class="text-red-500">*</span>
              </label>
              <input
                id="plaque_addr"
                type="text"
                required
                class="w-full p-2 mt-2 outline-none border-[1px] border-black focus:border-[#FF00FF] rounded-md transition-all"
              />
            </div>
            <div class="">
              <label for="unit_addr" class="text-sm text-black">
                واحد<span class="text-red-500">*</span>
              </label>
              <input
                id="unit_addr"
                type="text"
                required
                class="w-full p-2 mt-2 outline-none border-[1px] border-black focus:border-[#FF00FF] rounded-md transition-all"
              />
            </div>
            <div class="">
              <label for="postal_code" class="text-sm text-black">
                کد پستی<span class="text-red-500">*</span>
              </label>
              <input
                id="postal_code"
                type="text"
                required
                class="w-full p-2 mt-2 outline-none border-[1px] border-black focus:border-[#FF00FF] rounded-md transition-all"
              />
            </div>
            <div class="col-span-2">
              <label for="address" class="text-sm text-black">
                نشانی کامل پستی<span class="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                required
                class="resize-none w-full p-2 mt-2 outline-none border-[1px] border-black focus:border-[#FF00FF] rounded-md transition-all"
              ></textarea>
            </div>
          </div>

          <hr />

          <div class="h-[10%] flex items-center justify-center p-4">
            <button
              type="submit"
              class="bg-[#FF00FF] text-white py-2 px-8 rounded-md border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF]"
            >
              تایید و ادامه
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
