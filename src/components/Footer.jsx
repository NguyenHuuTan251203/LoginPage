import React from "react";
import logo_une from "../assets/logos/logo_une.svg";
import location from "../assets/icons/location.svg";
import phone from "../assets/icons/phone.svg";
import disco from "../assets/icons/disco.svg";

export default function Footer() {
  return (
    <div className="relative bottom-0 right-0 left-0 mt-[21px]">
      <div className="bg-[#245D7C] px-[70px] text-[#FFFFFF] flex justify-between">
        <div className="flex justify-center items-center">
          <img className="w-[125px] h-[141.7px]" src={logo_une} alt="" />
        </div>

        <div className="flex flex-col gap-y-[22px] py-[20px]">
          <h1 className="uppercase text-[40px] font-bold text-center">
            Cơ Sở Hà Nội
          </h1>
          <div className="flex text-[14px] gap-x-[20px]">
            <img src={location} alt="" />
            <p>Số 456 Minh Khai, P.Vĩnh Tuy, Q.Hai Bà Trưng, TP.Hà Nội</p>
          </div>
          <div className="flex text-[14px] gap-x-[20px]">
            <img src={location} alt="" />
            <p>Số 128, Đường Lĩnh Nam, Q.Hoàng Mai, TP.Hà Nội</p>
          </div>
          <div className="flex text-[14px] gap-x-[20px]">
            <div className="flex text-[14px] gap-x-[20px]">
              <img src={phone} alt="" />
              <p>024.38621504</p>
            </div>
            <div className="flex text-[14px] gap-x-[20px]">
              <img src={phone} alt="" />
              <p>024.38621504</p>
            </div>
          </div>
          <div className="flex text-[14px] gap-x-[20px]">
            <img src={disco} alt="" />
            <p>uneti.edu.vn</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-[22px] py-[20px]">
          <h1 className="uppercase text-[40px] font-bold text-center">
            Cơ Sở Nam Định
          </h1>
          <div className="flex text-[14px] gap-x-[20px]">
            <img src={location} alt="" />
            <p>Số 456 Minh Khai, P.Vĩnh Tuy, Q.Hai Bà Trưng, TP.Hà Nội</p>
          </div>
          <div className="flex text-[14px] gap-x-[20px]">
            <img src={location} alt="" />
            <p>Số 128, Đường Lĩnh Nam, Q.Hoàng Mai, TP.Hà Nội</p>
          </div>
          <div className="flex text-[14px] gap-x-[20px]">
            <div className="flex text-[14px] gap-x-[20px]">
              <img src={phone} alt="" />
              <p>024.38621504</p>
            </div>
            <div className="flex text-[14px] gap-x-[20px]">
              <img src={phone} alt="" />
              <p>024.38621504</p>
            </div>
          </div>
          <div className="flex text-[14px] gap-x-[20px]">
            <img src={disco} alt="" />
            <p>uneti.edu.vn</p>
          </div>
        </div>
      </div>
      <div className=" flex bg-[#134156] text-[#FFFFFF] justify-center gap-x-[150px] ">
        <p>© Copyright Trường Đại học Kinh tế - Kỹ thuật Công nghiệp</p>
        <p>Version 2.0.0</p>
      </div>
    </div>
  );
}
