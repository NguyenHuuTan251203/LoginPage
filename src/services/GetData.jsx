import { API_GET } from "../config/api";

export const getData = async (token) => {
  return fetch(API_GET, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((rs) => rs.json());
};

// export async function renderData() {
//   if (localStorage.getItem("token")) {
//     const { refreshToken, token } = JSON.parse(localStorage.getItem("token"));
//     let data = await getData(token);
//     const Result = data.body.array.forEach((item, index) => {
//       <tr className="border-b">
//         <td className="px-4 py-2 border boder[#A5A5A5]  text-center">
//           {index + 1}
//         </td>
//         <td className="px-4 py-2 border boder[#A5A5A5]">
//           {item.TT_SanPham_Anh}
//         </td>
//         <td className="px-4 py-2 border boder[#A5A5A5]">
//           {item.TT_SanPham_Chon}
//         </td>
//         <td className="px-4 py-2 border boder[#A5A5A5]">
//           {item.TT_SanPham_DonGia}
//         </td>
//         <td className="px-4 py-2 border boder[#A5A5A5]">
//           {item.TT_SanPham_HetHang}
//         </td>
//         <td className="px-4 py-2 border boder[#A5A5A5]">
//           {item.TT_SanPham_ID}
//         </td>
//         <td className="px-4 py-2 border boder[#A5A5A5]">
//           {item.TT_SanPham_MoTa}
//         </td>
//         <td className="px-4 py-2 border boder[#A5A5A5]">
//           {item.TT_SanPham_NgaySanXuat}
//         </td>
//         <td className="px-4 py-2 border boder[#A5A5A5]">
//           {item.TT_SanPham_Ten}
//         </td>

//         <td className="px-4 py-2 border boder[#A5A5A5]">
//           {item.TT_SanPham_TenAnh}
//         </td>
//         <td className=" px-4 py-2 border boder[#A5A5A5] text-center">
//           <button className="text-blue-500 hover:underline">Sửa</button>
//           <button className="text-red-500 hover:underline ml-2">Xóa</button>
//         </td>
//       </tr>;
//     });
//     return Result;
//   }
// }
