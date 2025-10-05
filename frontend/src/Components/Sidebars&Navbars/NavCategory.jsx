import React, { useState } from "react";
import SubNavCategory from "./SubNavCategory";

export default function NavCategory({categories}) {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="flex items-center gap-3">
      {categories.map((category, index) => (
        <div
          key={index}
          onMouseOver={() => {
            setActiveCategory(index);
          }}
          onMouseLeave={() => {
            setActiveCategory(null);
          }}
          className="relative"
        >
          <p className="p-1 cursor-pointer text-black text-sm border-b-2 border-b-transparent hover:border-b-[#FF00FF] transition-all duration-500">
            {category.headName}
          </p>
          {activeCategory === index && <SubNavCategory categories={category.subCategory} />}
        </div>
      ))}
    </div>
  );
}
