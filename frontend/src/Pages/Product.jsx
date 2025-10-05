import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SectionHeader from "../Components/SectionHeader";

export default function Product() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <main class="w-[90%] mx-auto md:px-4 md:grid md:grid-cols-2 gap-4 mt-4">
        <div class="relative">
          <section className="w-full">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 border-2 border-[#FF00FF] mb-4 h-80 sm:h-96 md:h-80 xl:h-[400px] rounded-lg"
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" className="w-full h-full object-fill" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" className="w-full h-full object-fill" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" className="w-full h-full object-fill" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" className="w-full h-full object-fill" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" className="w-full h-full object-fill" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" className="w-full h-full object-fill" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" className="w-full h-full object-fill" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" className="w-full h-full object-fill" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" className="w-full h-full object-fill" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" className="w-full h-full object-fill" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper border-2 border-[#FF00FF] rounded-lg"
            >
              <SwiperSlide className="p-1 opacity-40">
                <img
                  className="rounded-lg"
                  alt=""
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                />
              </SwiperSlide>
              <SwiperSlide className="p-1 opacity-40">
                <img
                  className="rounded-lg"
                  alt=""
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                />
              </SwiperSlide>
              <SwiperSlide className="p-1 opacity-40">
                <img
                  className="rounded-lg"
                  alt=""
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                />
              </SwiperSlide>
              <SwiperSlide className="p-1 opacity-40">
                <img
                  className="rounded-lg"
                  alt=""
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                />
              </SwiperSlide>
              <SwiperSlide className="p-1 opacity-40">
                <img
                  className="rounded-lg"
                  alt=""
                  src="https://swiperjs.com/demos/images/nature-5.jpg"
                />
              </SwiperSlide>
              <SwiperSlide className="p-1 opacity-40">
                <img
                  className="rounded-lg"
                  alt=""
                  src="https://swiperjs.com/demos/images/nature-6.jpg"
                />
              </SwiperSlide>
              <SwiperSlide className="p-1 opacity-40">
                <img
                  className="rounded-lg"
                  alt=""
                  src="https://swiperjs.com/demos/images/nature-7.jpg"
                />
              </SwiperSlide>
              <SwiperSlide className="p-1 opacity-40">
                <img
                  className="rounded-lg"
                  alt=""
                  src="https://swiperjs.com/demos/images/nature-8.jpg"
                />
              </SwiperSlide>
              <SwiperSlide className="p-1 opacity-40">
                <img
                  className="rounded-lg"
                  alt=""
                  src="https://swiperjs.com/demos/images/nature-9.jpg"
                />
              </SwiperSlide>
              <SwiperSlide className="p-1 opacity-40">
                <img
                  className="rounded-lg"
                  alt=""
                  src="https://swiperjs.com/demos/images/nature-10.jpg"
                />
              </SwiperSlide>
            </Swiper>
          </section>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="absolute top-4 left-4 w-6 h-6 text-[#FF00FF] transition-all duration-300"
            id="interest-product"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="absolute top-4 left-4 w-6 h-6 text-[#FF00FF] invisible opacity-0 transition-all duration-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <div class="flex flex-col gap-2 mt-8 space-y-2">
          <h1 class="text-black font-semibold text-center">
            کرم مرطوب کننده مارک
          </h1>
          <p class="text-[#FF00FF] font-bold text-center text-lg mb-2">
            27,000 تومان
          </p>

          <div className="space-y-2">
            <h1 class="text-[#FF00FF] text-sm font-bold">معرفی محصول</h1>
            <p class="p-2 text-gray-600 text-justify text-sm border-[1px] border-[#FF00FF] rounded-md">
              کرم مرطوب‌کننده مارک ازجمله محصولاتی است که با هدف رفع این مشکل
              ایجاد شده است و به شما کمک می‌کند، پوستی نرم و لطیف داشته باشید.
              این محصول رطوبت موردنیاز پوست را تأمین کرده و ترشح سبوم و چربی
              پوست را کنترل می‌کند. این کرم متناسب با نیازهای پوست چرب فرموله
              شده است؛ بنابراین شما پس از استفاده احساس سنگینی روی پوست خود
              نخواهید داشت.
            </p>
            <h1 class="text-[#FF00FF] text-sm pt-2 font-bold">
              ویژگی های اصلی محصول
            </h1>
            <ul
              list
              class="p-2 text-gray-600 text-justify text-sm border-[1px] border-[#FF00FF] rounded-md"
            >
              <li>ضد پیری</li>
              <li>مناسب پوست چرب و آکنه‌دار</li>
              <li>بافت سبک</li>
              <li>جذب سریع</li>
              <li>تنظیم میزان ترشح چربی و سبوم</li>
              <li>آبرسان</li>
            </ul>
            <h1 class="text-[#FF00FF] text-sm pt-2 font-bold">تاثیرات محصول</h1>
            <p class="p-2 text-gray-600 text-justify text-sm border-[1px] border-[#FF00FF] rounded-md">
              کرم آبرسان مارک به شما کمک می‌کند پوستی نرم و لطیف داشته باشید.
            </p>
          </div>

          <div class="grid grid-cols-3 items-center my-4">
            <div class="border-[1px] rounded-lg border-[#FF00FF] col-span-2">
              <select
                name="colors"
                id="colors"
                class="text-black rounded-lg p-1 outline-none w-full"
              >
                <option value="null">رنگ های محصول</option>
                <option value="">بنفش</option>
                <option value="">سبز</option>
                <option value="">صورتی</option>
              </select>
            </div>

            <div class="flex gap-x-1 self-center justify-self-end">
              <button
                type="button"
                class="border-[1px] border-[#FF00FF] px-1 rounded-b-full"
              >
                -
              </button>
              <div class="border-[1px] border-[#FF00FF] px-2 rounded-md">1</div>
              <button
                type="button"
                class="border-[1px] border-[#FF00FF] px-0.5 rounded-t-full"
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            class="w-3/5 xl:w-2/5 mx-auto text-white bg-[#FF00FF] rounded-md p-1 border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF]"
          >
            افزودن به سبد
          </button>
        </div>
      </main>

      <div class="flex flex-col gap-2 px-4 mt-8 w-11/12 mx-auto">
        <SectionHeader
          sectionName={"محصولات مرتبط"}
          showButton={false}
          buttonContent={""}
        />

        <div class="w-full mx-auto flex items-center p-2 gap-5 overflow-x-auto">
          <div class="min-w-[250px]">
            <div class="p-4 flex flex-col justify-between border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
              <a class="relative" href=".">
                <div class="w-40 h-40 mx-auto">
                  <img
                    src="../image/hair-mask-image.jpeg"
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
              <div class="flex flex-col gap-1">
                <p class="text-black text-sm text-center">کرم مرطوب کننده</p>
                <p class="font-bold text-center">
                  <del class="text-xs text-gray-400 ml-2">400,000 </del>
                  <span class="text-[#FF00FF]">290,000 تومان</span>
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
          <div class="min-w-[250px]">
            <div class="p-4 flex flex-col justify-between border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
              <a class="relative" href=".">
                <div class="w-40 h-40 mx-auto">
                  <img
                    src="../image/accessory.jpg"
                    alt=""
                    class="w-full h-full object-contain"
                  />
                </div>
              </a>
              <div class="flex flex-col gap-1">
                <p class="text-black text-sm text-center">کرم مرطوب کننده</p>
                <p class="font-bold text-center text-[#FF00FF]">
                  400,000 تومان
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
          <div class="min-w-[250px]">
            <div class="p-4 flex flex-col justify-between border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
              <a class="relative" href=".">
                <div class="w-40 h-40 mx-auto">
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
              <div class="flex flex-col gap-1">
                <p class="text-black text-sm text-center">کرم مرطوب کننده</p>
                <p class="font-bold text-center">
                  <del class="text-xs text-gray-400 ml-2">400,000 </del>
                  <span class="text-[#FF00FF]">290,000 تومان</span>
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
          <div class="min-w-[250px]">
            <div class="p-4 flex flex-col justify-between border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl">
              <a class="relative" href=".">
                <div class="w-40 h-40 mx-auto">
                  <img
                    src="../image/shampoo-image.jpg"
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
              <div class="flex flex-col gap-1">
                <p class="text-black text-sm text-center">کرم مرطوب کننده</p>
                <p class="font-bold text-center">
                  <del class="text-xs text-gray-400 ml-2">400,000 </del>
                  <span class="text-[#FF00FF]">290,000 تومان</span>
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

        <div className="mt-4 mx-4 text-3xl mt-8">
        <SectionHeader
          sectionName={"نظرات"}
          showButton={false}
          buttonContent={""}
        />
        </div>

        <div class="grid lg:grid-cols-2 m-2">
          <div class="flex items-center justify-center gap-2 z-30 fixed bottom-10 right-10 w-80 h-20 bg-[#FF00FF] rounded-md transition-all duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-black"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p class="text-sm text-black">نظر شما ثبت شد. ممنون</p>
          </div>
          <div class="flex items-center justify-center gap-2 z-30 fixed bottom-32 right-10 w-80 h-20 bg-[#FF00FF] rounded-md transition-all duration-500 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-black"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p class="text-sm text-black">
              نمایش نظرات بعد از تایید مدیر صورت می گیرد
            </p>
          </div>

          <div class="flex flex-col gap-2 p-2">
            <label for="area" class="text-black text-sm">
              نظر خود را در کادر زیر بنویسید
            </label>
            <div class="border-2 border-[#FF00FF] rounded-lg p-2">
              <textarea
                name="comments"
                id="area"
                cols="30"
                rows="5"
                class="w-full h-full resize-none outline-none"
              ></textarea>
            </div>
            <div class="flex items-center gap-1">
              <p class="text-black text-sm">امتیاز شما :</p>
              <div class="flex justify-center gap-2">
                <div class="cursor-pointer rating" id="1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 text-[#d2d1d1]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="cursor-pointer rating" id="2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 text-[#d2d1d1]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="cursor-pointer rating" id="3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 text-[#d2d1d1]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="cursor-pointer rating" id="4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 text-[#d2d1d1]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="cursor-pointer rating" id="5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 text-[#d2d1d1]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label for="name" class="text-black text-sm">
                نام
              </label>
              <input
                type="text"
                name="username"
                id="name"
                class="outline-none p-1 w-full border-2 border-[#FF00FF] rounded-lg"
              />
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" />
              <p class="text-black text-sm">
                ذخیره مشخصات برای ارائه دوباره نظرات
              </p>
            </div>
            <button
              type="button"
              class="w-2/5 sm:w-1/5 mx-auto text-white bg-[#FF00FF] rounded-md p-1 border-[1px] border-[#FF00FF] active:bg-white active:text-[#FF00FF]"
            >
              ثبت نظر
            </button>
          </div>

          <div>
            <div class="show-comments flex flex-col gap-2 m-2 border-[1px] border-solid border-[#FF00FF] rounded-md p-4">
              <div class="flex justify-between items-center justify-self-start">
                <div class="flex flex-col items-center gap-0.5">
                  <span class="text-[#FF00FF]">yasin.smd</span>
                  <span class="text-xs text-[#FF00FF]">1402/10/09</span>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="comment-reply w-8 h-8 border-[1px] border-solid border-[#FF00FF] bg-[#FF00FF] text-black rounded-full p-1 cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>

              <div>
                <p class="text-sm text-[#FF00FF]">
                  این جا محلی برای ثبت نظرات و پیشنهادات شماست تا با ما در میان
                  بگذارید و ما در بهبود عملکرد خود نسبت به شما تلاش کنیم و ارائه
                  بهتری نسبت به قبل به شما داشته باشیم و از هر لحاظ شما را راضی
                  نگه داریم نظرات شما موجب پیشرفت ما و پیشرفت ما موجب آسایش و
                  اطمینان شماست
                </p>
              </div>

              <div class="flex flex-col gap-2 w-11/12 mx-auto bg-[#FF00FF] p-4 rounded-md">
                <div class="flex justify-between items-center justify-self-start">
                  <div class="flex flex-col items-center gap-0.5">
                    <span class="text-black">admin.amn</span>
                    <span class="text-xs text-black">1402/10/12</span>
                  </div>
                </div>

                <div>
                  <p class="text-sm text-black">
                    این جا محلی برای ثبت نظرات و پیشنهادات شماست تا با ما در
                    میان بگذارید و ما در بهبود عملکرد خود نسبت به شما تلاش کنیم
                    و ارائه بهتری نسبت به قبل به شما داشته باشیم و از هر لحاظ
                    شما را راضی نگه داریم نظرات شما موجب پیشرفت ما و پیشرفت ما
                    موجب آسایش و اطمینان شماست
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
