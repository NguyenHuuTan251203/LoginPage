import React, { useState } from "react";
import AddImage from "../assets/icons/AddImage.svg";
import { AddData } from "../services/AddData";
export default function AddForm({ closeForm }) {
  const token = localStorage.getItem("token");
  const [data, getDataForm] = useState({
    TT_SanPham_Ten: "",
    TT_SanPham_NgaySanXuat: "",
    TT_SanPham_HoanThanh: "",
    TT_SanPham_NguoiThucHien: "",
    TT_SanPham_KetQua: "",
    TT_SanPham_TenAnh: "",
    TT_SanPham_Anh: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rs = await AddData(data, token);
    if (rs) console.log("trạng thái", "thêm thành công");
  };

  const handleChangeValue = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    getDataForm({
      ...data,
      [e.target.name]: value,
    });
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-full bg-gray-500 bg-opacity-70 ">
      <form
        className="max-w-[1075px] max-h-[700px] flex flex-col bg-[#FFFFFF] justify-center rounded-[16px] p-[32px]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-[40px] font-bold mb-[20px] ">Thêm Mới</h1>

        <div className="flex flex-wrap gap-[20px] justify-between">
          <div className="h-[100px] w-[495.5px] flex flex-col gap-[8px]">
            <p className="text-gray-400">
              Tên sản phẩm <span className="text-red-600">*</span>
            </p>
            <input
              className="bg-gray-100 h-[68px] rounded-[4px] pl-[20px]"
              type="text"
              name="TT_SanPham_Ten"
              id=""
              required
              onChange={handleChangeValue}
            />
          </div>

          <div className="h-[100px] w-[495.5px] flex flex-col gap-[8px] ">
            <p className="text-gray-400">
              Ngày bắt dầu <span className="text-red-600">*</span>
            </p>
            <input
              className="bg-gray-100 h-[68px] rounded-[4px]  pl-[15.5px] pr-[12px]"
              type="date"
              name="TT_SanPham_NgaySanXuat"
              id=""
              required
              onChange={handleChangeValue}
            />
          </div>

          <div className="h-[100px] w-[495.5px] flex flex-col gap-[20px] ">
            <p className="text-gray-400">
              Trạng thái hoàn thành <span className="text-red-600">*</span>
            </p>
            <input
              className="bg-gray-100 h-[30px] w-[20px] rounded-[4px] self-start"
              type="checkbox"
              name="TT_SanPham_HoanThanh"
              id=""
              required
              onChange={handleChangeValue}
            />
          </div>

          <div className="h-[100px] w-[495.5px] flex flex-col gap-[8px]">
            <p className="text-gray-400">
              Người thực hiện <span className="text-red-600">*</span>
            </p>
            <input
              className="bg-gray-100 h-[68px] rounded-[4px] pl-[20px]"
              type="text"
              name="TT_SanPham_NguoiThucHien"
              id=""
              required
              onChange={handleChangeValue}
            />
          </div>

          <div className="h-[100px] w-[495.5px] flex flex-col gap-[8px] mb-[20px]">
            <p className="text-gray-400">
              Kết quả sản phẩm <span className="text-red-600">*</span>
            </p>
            <input
              className="bg-gray-100 h-[68px] rounded-[4px] pl-[20px]"
              type="text"
              name="TT_SanPham_KetQua"
              id=""
              required
              onChange={handleChangeValue}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <p>Hình ảnh đi kèm ? (Nếu có)</p>
          {/* <input type="date" name="" id="" className="border border-[black]" /> */}
          <button className="bg-gray-200 flex justify-center items-center h-[90px] w-[90px] rounded-[16px]">
            <img src={AddImage} alt="" />
          </button>
        </div>

        <div className="flex gap-[39px] justify-center">
          <button
            type="submit"
            className="border text-[#FFFFFF] bg-[#225F9C] py-[16px] px-[48px] font-bold hover:bg-[#FFFFFF] hover:text-black hover:border hover:border-[#225F9C]  "
          >
            Đồng ý
          </button>
          <button
            type="submit"
            className="border border-red-500 text-red-500  py-[16px] px-[48px] font-bold hover:bg-red-500 hover:text-[#FFFFFF]"
            onClick={closeForm}
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}
