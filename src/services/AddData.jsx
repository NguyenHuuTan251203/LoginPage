import { API_ADD } from "../config/api";
import { FormatDate } from "./FormatDate";

export async function AddData(data, token) {
  const dataNew = await {
    ...data,
    TT_SanPham_NgaySanXuat: (
      await FormatDate(data.TT_SanPham_NgaySanXuat)
    ).toString(),
  };

  const { TT_SanPham_NgaySanXuat } = dataNew;
  console.log("tyof", typeof TT_SanPham_NgaySanXuat);
  return fetch(API_ADD, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataNew),
  }).then((res) => {
    if (!res.ok) return false;
    return res.json();
  });
}
