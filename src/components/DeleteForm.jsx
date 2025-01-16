import React from "react";
import { DeleteData } from "../services/DeleteData";

export default function DeleteForm({ closeFormDele, ID }) {
  const token = localStorage.getItem("token");

  const handleDelete = async (e) => {
    e.preventDefault();
    const rs = await DeleteData({ TT_SanPham_ID: ID }, token);
    if (rs) {
      console.log("trạng thái", "xóa thành công");
      closeFormDele(); // Đóng form sau khi xóa thành công
    } else {
      console.error("Xóa thất bại");
    }
  };

  return (
    <div className="bg-gray-300 bg-opacity-70 flex flex-col gap-y-[40px] justify-center items-center h-[100vh] w-full">
      <div className="bg-[#FFFFFF] w-[1075px] h-[240px] flex flex-col gap-y-[40px] justify-center items-center rounded-[16px]">
        <h1 className="text-[40px] font-bold">Bạn có chắc xóa dữ liệu này?</h1>

        <div className="flex gap-[39px]">
          <button
            type="button"
            className="border text-[#FFFFFF] bg-[#225F9C] py-[16px] px-[48px] font-bold hover:bg-[#FFFFFF] hover:text-black hover:border hover:border-[#225F9C]"
            onClick={handleDelete} // Gọi `handleDelete` khi người dùng nhấn "Đồng ý"
          >
            Đồng ý
          </button>
          <button
            type="button"
            className="border border-red-500 text-red-500 py-[16px] px-[48px] font-bold hover:bg-red-500 hover:text-[#FFFFFF]"
            onClick={closeFormDele} // Chỉ đóng form khi người dùng nhấn "Hủy"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}
