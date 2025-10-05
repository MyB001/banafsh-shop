import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import {
  Autoplay,
  Pagination,
  Navigation,
  FreeMode,
  Grid,
} from "swiper/modules";
import PopularProduct from "../Components/MainPage/PopularProduct";
import SectionHeader from "../Components/SectionHeader";
import { useEffect, useState } from "react";

export default function Index() {
  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSwiperKey((prev) => prev + 1); // سوییپر را مجبور به بازسازی می‌کند
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="space-y-12">
      <Swiper
        loop={true}
        rewind={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[40vh] sm:h-[60vh] lg:h-[80vh]"
      >
        <SwiperSlide>
          <img
            src="/images/SlideShow/1.jpg"
            alt=""
            className="h-full w-full object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/SlideShow/2.jpg"
            alt=""
            className="h-full w-full object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/SlideShow/3.jpg"
            alt=""
            className="h-full w-full object-contain"
          />
        </SwiperSlide>
      </Swiper>

      <main className="w-[90%] xl:max-w-6xl mx-auto space-y-10">
        <PopularProduct />
        {/* NEW PRODUCT */}
        <div>
          <SectionHeader
            sectionName={"محصولات جدید"}
            showButton={true}
            buttonContent={"محصولات"}
          />
          <Swiper
            slidesPerView={4.5}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
              },
              400: {
                slidesPerView: 1.75,
              },
              540: {
                slidesPerView: 2,
              },
              639: {
                slidesPerView: 2.5,
              },
              865: {
                slidesPerView: 3.5,
              },
              1000: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 4.5,
              },
            }}
            spaceBetween={30}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Navigation, Pagination]}
            className="mySwiper h-64 mt-4"
          >
            <SwiperSlide
              style={{ display: "flex" }}
              className="flex-col justify-between border-[1px] border-[#FF00FF] rounded-lg"
            >
              <img
                src="/images/SlideShow/3.jpg"
                alt=""
                className="w-full h-1/2 rounded-t-lg"
              />
              <div className="flex flex-col gap-2 items-center justify-between p-2">
                <p className="text-gray-600 text-sm font-bold line-clamp-1">
                  لوسیون بدن
                </p>
                <p className="text-[#FF00FF] font-bold">44,000 تومان</p>
              </div>
              <button
                type="button"
                className="w-3/5 mx-auto p-2 m-2 rounded-md bg-[#FF00FF] text-white border-solid border-[1px] active:border-[#FF00FF] active:bg-transparent active:text-[#FF00FF] transition-all"
              >
                افزودن به سبد
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* SPECIAL ACCESS */}
        <div>
          <SectionHeader
            sectionName={"دسترسی ویژه"}
            showButton={false}
            buttonContent={""}
          />
          <Swiper
            key={swiperKey}
            slidesPerView={2}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            grid={{
              rows: 2,
              fill: "column",
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper h-96 mt-4"
          >
            <SwiperSlide className="min-h-40">
              <div className="p-2 flex items-center h-full hover:scale-95 border-[1px] border-[#FF00FF] rounded-lg transition-all duration-500">
                <a href="." className="grid grid-cols-2">
                  <h1 className="justify-self-center self-center text-center text-2xl sm:text-lg font-semibold drop-shadow-[5px_5px_4px_#FF00FF]">
                    مجموعه محصولات ماسک صورت
                  </h1>
                  <img
                    src="images/logo-site.jpg"
                    alt=""
                    className="w-44 h-44 justify-self-center self-center p-4"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="min-h-40">
              <div className="p-2 flex items-center h-full hover:scale-95 border-[1px] border-[#FF00FF] rounded-lg transition-all duration-500">
                <a href="." className="grid grid-cols-2">
                  <h1 className="justify-self-center self-center text-center text-2xl sm:text-lg font-semibold drop-shadow-[5px_5px_4px_#FF00FF]">
                    مجموعه محصولات ماسک صورت
                  </h1>
                  <img
                    src="images/SlideShow/1.jpg"
                    alt=""
                    className="w-44 h-44 justify-self-center self-center p-4"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="min-h-40">
              <div className="p-2 flex items-center h-full hover:scale-95 border-[1px] border-[#FF00FF] rounded-lg transition-all duration-500">
                <a href="." className="grid grid-cols-2">
                  <h1 className="justify-self-center self-center text-center text-2xl sm:text-lg font-semibold drop-shadow-[5px_5px_4px_#FF00FF]">
                    مجموعه محصولات ماسک صورت
                  </h1>
                  <img
                    src="images/bgImg.jpg"
                    alt=""
                    className="w-44 h-44 justify-self-center self-center p-4"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="min-h-40">
              <div className="p-2 flex items-center h-full hover:scale-95 border-[1px] border-[#FF00FF] rounded-lg transition-all duration-500">
                <a href="." className="grid grid-cols-2">
                  <h1 className="justify-self-center self-center text-center text-2xl sm:text-lg font-semibold drop-shadow-[5px_5px_4px_#FF00FF]">
                    مجموعه محصولات ماسک صورت
                  </h1>
                  <img
                    src="images/SlideShow/2.jpg"
                    alt=""
                    className="w-44 h-44 justify-self-center self-center p-4"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="min-h-40">
              <div className="p-2 flex items-center h-full hover:scale-95 border-[1px] border-[#FF00FF] rounded-lg transition-all duration-500">
                <a href="." className="grid grid-cols-2">
                  <h1 className="justify-self-center self-center text-center text-2xl sm:text-lg font-semibold drop-shadow-[5px_5px_4px_#FF00FF]">
                    مجموعه محصولات ماسک صورت
                  </h1>
                  <img
                    src="images/logo-site.jpg"
                    alt=""
                    className="w-44 h-44 justify-self-center self-center p-4"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="min-h-40">
              <div className="p-2 flex items-center h-full hover:scale-95 border-[1px] border-[#FF00FF] rounded-lg transition-all duration-500">
                <a href="." className="grid grid-cols-2">
                  <h1 className="justify-self-center self-center text-center text-2xl sm:text-lg font-semibold drop-shadow-[5px_5px_4px_#FF00FF]">
                    مجموعه محصولات ماسک صورت
                  </h1>
                  <img
                    src="images/SlideShow/3.jpg"
                    alt=""
                    className="w-44 h-44 justify-self-center self-center p-4"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="min-h-40">
              <div className="p-2 flex items-center h-full hover:scale-95 border-[1px] border-[#FF00FF] rounded-lg transition-all duration-500">
                <a href="." className="grid grid-cols-2">
                  <h1 className="justify-self-center self-center text-center text-2xl sm:text-lg font-semibold drop-shadow-[5px_5px_4px_#FF00FF]">
                    مجموعه محصولات ماسک صورت
                  </h1>
                  <img
                    src="images/SlideShow/1.jpg"
                    alt=""
                    className="w-44 h-44 justify-self-center self-center p-4"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="min-h-40">
              <div className="p-2 flex items-center h-full hover:scale-95 border-[1px] border-[#FF00FF] rounded-lg transition-all duration-500">
                <a href="." className="grid grid-cols-2">
                  <h1 className="justify-self-center self-center text-center text-2xl sm:text-lg font-semibold drop-shadow-[5px_5px_4px_#FF00FF]">
                    مجموعه محصولات ماسک صورت
                  </h1>
                  <img
                    src="images/bgImg.jpg"
                    alt=""
                    className="w-44 h-44 justify-self-center self-center p-4"
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* FAMOUS BRANDS */}
        <div>
          <SectionHeader
            sectionName={"برند های معروف"}
            showButton={false}
            buttonContent={""}
          />
          <section className="grid my-4 grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="h-20 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl hover:scale-95 transition-all duration-250">
              <a href=".">
                <img
                  src="../image/brands/seagull.jpg"
                  alt=""
                  className="w-full h-full rounded-2xl"
                />
              </a>
            </div>
            <div className="h-20 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl hover:scale-95 transition-all duration-250">
              <a href=".">
                <img
                  src="../image/brands/callista.jpg"
                  alt=""
                  className="w-full h-full rounded-2xl"
                />
              </a>
            </div>
            <div className="h-20 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl hover:scale-95 transition-all duration-250">
              <a href=".">
                <img
                  src="../image/brands/cinere.jpg"
                  alt=""
                  className="w-full h-full rounded-2xl"
                />
              </a>
            </div>
            <div className="h-20 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl hover:scale-95 transition-all duration-250">
              <a href=".">
                <img
                  src="../image/brands/fulica.jpg"
                  alt=""
                  className="w-full h-full rounded-2xl"
                />
              </a>
            </div>
            <div className="h-20 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl hover:scale-95 transition-all duration-250">
              <a href=".">
                <img
                  src="../image/brands/hydroderm.jpg"
                  alt=""
                  className="w-full h-full rounded-2xl"
                />
              </a>
            </div>
            <div className="h-20 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl hover:scale-95 transition-all duration-250">
              <a href=".">
                <img
                  src="../image/brands/la-farrerr.jpg"
                  alt=""
                  className="w-full h-full rounded-2xl"
                />
              </a>
            </div>
            <div className="h-20 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl hover:scale-95 transition-all duration-250">
              <a href=".">
                <img
                  src="../image/brands/moringa.jpg"
                  alt=""
                  className="w-full h-full rounded-2xl"
                />
              </a>
            </div>
            <div className="h-20 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl hover:scale-95 transition-all duration-250">
              <a href=".">
                <img
                  src="../image/brands/neuderm.jpg"
                  alt=""
                  className="w-full h-full rounded-2xl"
                />
              </a>
            </div>
            <div className="h-20 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl hover:scale-95 transition-all duration-250">
              <a href=".">
                <img
                  src="../image/brands/prime.jpg"
                  alt=""
                  className="w-full h-full rounded-2xl"
                />
              </a>
            </div>
            <div className="h-20 border-t-[1px] border-t-[#FF00FF] shadow-sm shadow-[#FF00FF] rounded-2xl hover:scale-95 transition-all duration-250">
              <a href=".">
                <img
                  src="../image/brands/schon.jpg"
                  alt=""
                  className="w-full h-full rounded-2xl"
                />
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
