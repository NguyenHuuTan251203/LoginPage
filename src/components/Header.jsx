import React from "react";
import logo_une from "../assets/logos/logo_une.svg";
import Ellipse from "../assets/images/Ellipse.svg";
export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 flex px-[80px] justify-between   bg-[#FFFFFF] pb-[10px] rounded-b-[20px] shadow-lg shadow-gray-300">
      <div className="w-[70px] h-[70px]">
        <img src={logo_une} alt="" />
      </div>
      <div className="flex gap-x-[10px] items-center">
        <img src={Ellipse} alt="" className="rounded-[50%]" />
        <p>Nguyễn Văn A</p>
        <img src="" alt="" />
      </div>
    </div>
  );
}
