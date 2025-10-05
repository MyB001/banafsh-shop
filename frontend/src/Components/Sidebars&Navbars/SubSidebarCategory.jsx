import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SubSidebarCategory({ categories }) {
  const [isActiveCategory, setIsActiveCategory] = useState({
    indexCat: null,
    isActive: false,
  });
  return (
    <>
      {categories.map((category, index) => (
        <div
          className="flex items-center gap-1 self-start cursor-pointer drop-down"
          id="cosmetic__face-btn"
          key={index}
        >
          {category.subCategories ? (
            <div className="space-y-4">
              <div
                className="flex items-center gap-1"
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
                <p className="text-black text-sm"> {category.name} </p>
              </div>
              {isActiveCategory.indexCat === index &&
                isActiveCategory.isActive && (
                  <div className="mr-5 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <p className="text-[12px] text-gray-500">
                        <Link to=".">همه محصولات {category.name}</Link>
                      </p>
                    </div>
                    <SubSidebarCategory categories={category.subCategories} />
                  </div>
                )}
            </div>
          ) : (
            <Link to="/register" className="text-gray-400 text-sm">
              {category.name}
            </Link>
          )}
        </div>
      ))}
    </>
  );
}
