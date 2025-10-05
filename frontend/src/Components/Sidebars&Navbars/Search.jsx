import React, { useContext } from "react";
import { Context } from "../../ContextState";
import { GoArrowUp } from "react-icons/go";

export default function Search() {
  const { IsShowSearchBox, setIsShowSearchBox } = useContext(Context);

  return (
    <div
      class={`z-20 fixed top-0 left-0 h-screen w-screen p-4 bg-white flex flex-col gap-4 ${
        IsShowSearchBox ? "" : "-translate-y-full"
      } transition-all duration-500`}
      id="search-sec"
    >
      <GoArrowUp onClick={() => setIsShowSearchBox(false)} className="w-10 h-10 mx-auto border-[1px] text-[#FF00FF] border-[#FF00FF] border-solid rounded-full p-2 cursor-pointer active:scale-90 transition-all" />

      <input
        type="search"
        placeholder="جستجو کنید"
        id="search-input"
        className="outline-none p-1 px-2 text-gray-700 border-[1px] border-solid border-[#FF00FF] w-full rounded-md"
      />

      <div className="flex items-center justify-center gap-1">
        <p className="text-[#FF00FF] text-lg text-center">جستجوهای برتر</p>
      </div>

      {/* <!-- In the less large mode, the user's search results are displayed in these formats --> */}
      {/* <div id="search-result">
        <div className="m-2 p-2 border-[1px] border-solid rounded-xl">
          <a href="." className="grid grid-cols-3 sm:flex sm:items-center sm:gap-8">
            <div className="w-16 h-16">
              <img
                src="../image/beauty-purple.jpg"
                alt=""
                className="h-full w-full object-cover rounded-lg"
              />
            </div>

            <div className="col-span-2">
              <h1 className="text-black m-1">محصول1</h1>
              <p className="text-black">115,000</p>
            </div>
          </a>
        </div>
      </div> */}
    </div>
  );
}
