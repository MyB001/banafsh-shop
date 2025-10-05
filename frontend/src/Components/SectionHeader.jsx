import React from "react";
import { PiArrowArcLeft } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function SectionHeader({
  sectionName,
  showButton,
  buttonContent,
}) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold text-[#FF00FF] text-lg">{sectionName}</h1>
      {showButton && (
        <Link
          to=""
          className="flex items-center gap-2 border-[1px] border-[#FF00FF] p-2 rounded-md bg-[#FF00FF] text-white active:bg-white active:text-[#FF00FF]"
        >
          <p className="text-sm">تمامی {buttonContent}</p>
          <PiArrowArcLeft className="text-xl" />
        </Link>
      )}
    </div>
  );
}
