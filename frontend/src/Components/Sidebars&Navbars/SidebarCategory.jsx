import React, { useContext, useState } from "react";
import { Context } from "../../ContextState";
import { FaMinus, FaPlus } from "react-icons/fa";
import SubSidebarCategory from "./SubSidebarCategory";
import { Link } from "react-router-dom";

export default function Sidebar({ categories }) {
  const { IsShowSidebar, setIsShowSidebar } = useContext(Context);
  const [isActiveCategory, setIsActiveCategory] = useState({
    indexCat: null,
    isActive: false,
  });

  return (
    <aside
      id="store-menubar"
      class={`z-20 fixed top-0 right-0 ${
        IsShowSidebar ? "" : "translate-x-full"
      }  transition-all`}
    >
      <div
        id="store-menubar__back"
        className="w-screen h-screen bg-gray-400 opacity-60"
        onClick={() => setIsShowSidebar(false)}
      ></div>
      <div className="fixed top-0 right-0 flex justify-center items-center w-3/5 h-screen bg-white">
        <div className="h-full w-full p-4 mx-auto flex flex-col gap-2">
          <div
            className="flex self-start"
            id="store-back-btn"
            onClick={() => setIsShowSidebar(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <h1 className="text-black font-bold cursor-pointer">بازگشت</h1>
          </div>

          <hr />

          {/* <!-- brand and category buttons --> */}
          <div className="h-10">
            <div
              className="justify-self-center self-center text-center pb-3 w-full border-b-2 text-[#FF00FF] border-b-[#FF00FF] hover:text-[#FF00FF]"
              id="category-btn"
            >
              <h1>دسته بندی</h1>
            </div>
          </div>

          {/* <!-- category navbar --> */}
          <div className="overflow-y-auto overscroll-none [transform:rotateY(180deg)]">
            <div
              className="flex flex-col gap-4 w-[90%] h-full py-2 mx-auto overscroll-none transition-all [transform:rotateY(180deg)]"
              id="nav-category"
            >
              {categories.map((category, index) => (
                <div className="space-y-4">
                  <div
                    className="flex items-center self-start gap-1 cursor-pointer drop-down"
                    id="nav-category__cosmetic-btn"
                    onClick={() => {
                      setIsActiveCategory((prevState) => {
                        if (prevState.indexCat === index) {
                          return {
                            ...prevState,
                            isActive: !prevState.isActive,
                          };
                        } else if (isActiveCategory.isActive) {
                          return {
                            ...prevState,
                            indexCat: index,
                          };
                        } else {
                          return {
                            ...prevState,
                            indexCat: index,
                            isActive: !prevState.isActive,
                          };
                        }
                      });
                    }}
                  >
                    {isActiveCategory.indexCat === index &&
                    isActiveCategory.isActive ? (
                      <FaMinus className="w-3 h-3 cursor-pointer text-[#FF00FF]" />
                    ) : (
                      <FaPlus className="w-3 h-3 cursor-pointer text-[#FF00FF]" />
                    )}

                    <h1 className="text-black text-sm">{category.headName}</h1>
                  </div>
                  {isActiveCategory.indexCat === index &&
                    isActiveCategory.isActive && (
                      <div className="mr-5 flex flex-col gap-4">
                        <div className="flex items-center">
                          <p className="text-[12px] text-gray-500">
                            <Link to=".">همه محصولات {category.headName}</Link>
                          </p>
                        </div>
                        <SubSidebarCategory categories={category.subCategory} />
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
