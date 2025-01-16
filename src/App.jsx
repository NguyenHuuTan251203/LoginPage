import React from "react";
import CryptoJS from "crypto-js"; // Đảm bảo đã import đúng
import RootRouter from "./routes";
import AddForm from "./components/AddForm";

// Hàm mã hóa AES
const encryptAESWithKey = (plainText = "") => {
  return CryptoJS.AES.encrypt(plainText, "fd85b494-Uneti").toString();
};
localStorage.setItem("rs", false);
export default function App() {
  // Gọi hàm mã hóa và lưu kết quả vào một biến
  const rs = encryptAESWithKey("1111");

  return (
    <div>
      <RootRouter></RootRouter>
      {/* <AddForm></AddForm> */}
    </div>
  );
}
