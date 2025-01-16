import React, { Children, useEffect, useState } from "react";
import { getData } from "../services/GetData";
import js from "@eslint/js";
import { covertImage } from "../middleware/ConvertImage";
import AddForm from "./AddForm";
import DeleteForm from "./DeleteForm";

export default function Table() {
  const [data, setData] = useState([]); // Khởi tạo state để lưu dữ liệu
  const [formClose, setFormClose] = useState(false);

  const [formCloseDele, setFormCloseDele] = useState({
    isOpen: false,
    ID: null,
  });

  const openForm = () => setFormClose(true);
  const closeForm = () => setFormClose(false);

  const openFormDele = (ID) => {
    setFormCloseDele({ isOpen: true, ID });
  };

  const closeFormDele = () => {
    setFormCloseDele({ isOpen: false, ID: null });
  };

  useEffect(() => {
    const fetchData = async () => {
      const tokenData = localStorage.getItem("token");
      if (tokenData === null) {
        console.error("Token not found in localStorage");
        return;
      }
      try {
        let response = await getData(tokenData);
        console.log("response: ", response);
        // console.log(covertImage(response.body[0].TT_SanPham_Anh.data));
        await setData(response.body);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-[100px] ">
      {formClose && (
        <div className="fixed top-0 left-0 w-full h-[100vh] z-50 flex justify-center items-center">
          <AddForm closeForm={closeForm} />
        </div>
      )}

      {formCloseDele.isOpen && (
        <div className="fixed top-0 left-0 w-full h-[100vh] z-50 flex justify-center items-center">
          <DeleteForm closeFormDele={closeFormDele} ID={formCloseDele.ID} />
        </div>
      )}
      <h1 className="text-[#336699] text-[20px] font-bold text-center">
        Danh sách ...
      </h1>
      <div className="flex justify-center">
        <div className="bg-white shadow-2xl rounded-[10px] flex justify-center items-center flex-col gap-[14px]  min-w-[1139px] mx-[80px] p-[15px]">
          <button
            className="bg-[#336699] text-[#FFFFFF] rounded-[12px] p-[10px] text-[15px] self-start"
            onClick={openForm}
          >
            Thêm mới
          </button>
          {/* <AddForm /> */}
          <table className="border-collapse ">
            <thead>
              <tr className="bg-[#336699] text-white">
                <th className="p-[10px] border-r boder-r[#A5A5A5] text-center">
                  STT
                </th>
                <th className="p-[10px] border-r boder-r[#A5A5A5]">
                  Sản phẩm chọn
                </th>
                <th className="p-[10px] border-r boder-r[#A5A5A5]">
                  ID Sản phẩm
                </th>
                <th className="p-[10px] border-r boder-r[#A5A5A5]">
                  Sản phẩm tên
                </th>
                <th className="p-[10px] border-r boder-r[#A5A5A5]">
                  Ngày sản xuất
                </th>
                <th className="p-[10px] border-r boder-r[#A5A5A5]">
                  Tình trạng hàng
                </th>
                <th className="p-[10px] border-r boder-r[#A5A5A5]">Đơn giá</th>
                <th className="p-[10px] border-r boder-r[#A5A5A5]">Mô tả</th>
                <th className="p-[10px] border-r boder-r[#A5A5A5]">Tên ảnh</th>
                <th className="p-[10px] border-r boder-r[#A5A5A5]">Ảnh</th>
                <th className="p-[10px] border-r boder-r[#A5A5A5] min-w-[100px]">
                  Thao tác
                </th>
              </tr>
              <tr className="">
                <td className="px-4 py-2 text-center boder[#A5A5A5]">
                  <span className="text-blue-600 cursor-pointer ">
                    &#x1F50D;
                  </span>
                </td>
                <td className="px-4 py-2 border boder[#A5A5A5] ">
                  <input
                    type="text"
                    className="w-full border-none text-center focus:border-none focus:outline-none focus:placeholder:text-transparent"
                    placeholder="Tìm kiếm..."
                  />
                </td>
                <td className="px-4 py-2 border boder[#A5A5A5] ">
                  <input
                    type="text"
                    className="w-full border-none text-center   focus:border-none focus:outline-none focus:placeholder:text-transparent"
                    placeholder="Tìm kiếm..."
                  />
                </td>
                <td className="px-4 py-2 border boder[#A5A5A5] ">
                  <input
                    type="text"
                    className="w-full border-none text-center   focus:border-none focus:outline-none focus:placeholder:text-transparent"
                    placeholder="Tìm kiếm..."
                  />
                </td>
                <td className="px-4 py-2 border boder[#A5A5A5] ">
                  <input
                    type="text"
                    className="w-full border-none text-center   focus:border-none focus:outline-none focus:placeholder:text-transparent"
                    placeholder="Tìm kiếm..."
                  />
                </td>
                <td className="px-4 py-2 border boder[#A5A5A5] ">
                  <input
                    type="text"
                    className="w-full border-none text-center focus:border-none focus:outline-none focus:placeholder:text-transparent"
                    placeholder="Tìm kiếm..."
                  />
                </td>
                <td className="px-4 py-2 border boder[#A5A5A5] ">
                  <input
                    type="text"
                    className="w-full border-none text-center focus:border-none focus:outline-none focus:placeholder:text-transparent"
                    placeholder="Tìm kiếm..."
                  />
                </td>
                <td className="px-4 py-2 border boder[#A5A5A5] ">
                  <input
                    type="text"
                    className="w-full border-none text-center   focus:border-none focus:outline-none focus:placeholder:text-transparent"
                    placeholder="Tìm kiếm..."
                  />
                </td>
                <td className="px-4 py-2 border boder[#A5A5A5] ">
                  <input
                    type="text"
                    className="w-full border-none text-center  focus:border-none focus:outline-none focus:placeholder:text-transparent"
                    placeholder="Tìm kiếm..."
                  />
                </td>
                <td className="px-4 py-2 border boder[#A5A5A5] ">
                  <input
                    type="text"
                    className="w-full border-none text-center   focus:border-none focus:outline-none focus:placeholder:text-transparent"
                    placeholder="Tìm kiếm..."
                  />
                </td>
                <td className="px-4 py-2 border boder[#A5A5A5] "></td>
              </tr>
            </thead>
            <tbody>
              {/* <!-- Example row --> */}

              {data.length === 0 ? (
                <tr>
                  <td>Không có dữ liệu</td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr key={index + 1}>
                    <td className="px-4 py-2 border boder[#A5A5A5]">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 border boder[#A5A5A5]">
                      {item.TT_SanPham_Chon || "Không có"}
                    </td>
                    <td className="px-4 py-2 border boder[#A5A5A5]">
                      {item.TT_SanPham_ID}
                    </td>
                    <td className="px-4 py-2 border boder[#A5A5A5]">
                      {item.TT_SanPham_Ten}
                    </td>
                    <td className="px-4 py-2 border boder[#A5A5A5]">
                      {item.TT_SanPham_NgaySanXuat || "Chưa có"}
                    </td>
                    <td className="px-4 py-2 border boder[#A5A5A5]">
                      {item.TT_SanPham_HetHang ? "Hết hàng" : "Còn hàng"}
                    </td>
                    <td className="px-4 py-2 border boder[#A5A5A5]">
                      {item.TT_SanPham_DonGia || "CHưa cập nhập "}
                    </td>
                    <td className="px-4 py-2 border boder[#A5A5A5]">
                      {item.TT_SanPham_MoTa || "không có"}
                    </td>
                    <td className="px-4 py-2 border boder[#A5A5A5]">
                      {item.TT_SanPham_TenAnh || "không có"}
                    </td>
                    {/* <td>{item.TT_SanPham_Anh || "không có"}</td> */}
                    <td className="px-4 py-2 border boder[#A5A5A5]">null</td>
                    <td className=" px-4 py-2 border boder[#A5A5A5] text-center">
                      <button className="text-blue-500 hover:underline">
                        Sửa
                      </button>
                      <button
                        className="text-red-500 hover:underline ml-2 cursor-pointer"
                        onClick={() => openFormDele(item.TT_SanPham_ID)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
