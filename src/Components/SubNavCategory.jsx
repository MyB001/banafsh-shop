import React, { useState } from "react";

export default function SubNavCategory({ categories }) {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="flex bg-white shadow-md shadow-[#FF00FF] w-48 rounded-lg transition-all duration-500 flex-col gap-2 absolute right-0 top-[100%] p-2">
      {categories.map((category, index) => (
        <div
          key={index}
          onMouseOver={() => setActiveCategory(index)}
          onMouseLeave={() => setActiveCategory(null)}
          className="relative cursor-pointer"
        >
          <p className="text-black text-sm flex justify-between items-center">
            {category.name}
            {category.subCategories && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            )}
          </p>
          {activeCategory === index && category.subCategories && (
            <div className="absolute top-0 right-full">
              <SubNavCategory categories={category.subCategories} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
