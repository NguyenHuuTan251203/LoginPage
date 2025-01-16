import React, { useState } from "react";
import banner from "../assets/images/banner.svg";
import logo_une from "../assets/logos/logo_une.svg";
import facebook from "../assets/icons/facebook.svg";
import vector from "../assets/icons/vector.svg";
import youtube from "../assets/icons/youtube.svg";
import { ToastContainer } from "react-toastify";
import { API_LOGIN } from "../config/api";
import { encryptAESWithKey } from "../middleware/EncryptAES";
import { showToast } from "./noti";
import { CheckNull } from "../middleware/ValidateForm";
import { useNavigate } from "react-router";
import AddForm from "./AddForm";
export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setData] = useState({
    username: "",
    password: "",
  });

  const handleChangeValue = (e) => {
    setData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!CheckNull(formData.username, formData.password)) return;
    const rs = await fetch(API_LOGIN, {
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        TenDangNhap: encryptAESWithKey(formData.username),
        MatKhau: encryptAESWithKey(formData.password),
      }),
    }).then((Response) => {
      if (!Response.ok) return false;
      else return Response.json();
    });
    // console.log(rs);
    if (rs) {
      showToast("Đăng Nhập Thành Công", "success");
      localStorage.setItem("rs", "true");
      // console.log(rs);
      localStorage.setItem("token", rs.token);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      showToast("Sai Tài Khoản Hoặc Mật Khẩu", "error");
    }
  };

  return (
    <div
      className="  h-screen w-full  bg-opacity-95 bg-cover bg-no-repeat bg-center flex justify-center items-center "
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPositionY: "86%",
      }}
    >
      <div className="bg-[#fff] p-[30px] flex rounded-[10px] w-[440px] h-auto  justify-center">
        <div className="flex flex-col gap-y-[8px] w-[400px]">
          <div className="flex justify-center">
            <img src={logo_une} alt="" className="w-[147px] h-[108px]" />
          </div>

          <div className="text-center w-full  font-bold text-[35px] flex justify-center">
            <h1 className="uppercase text-[#0C4A6E] w-[288px] h-[108px]">
              Đăng Nhập Uneti Online
            </h1>
          </div>

          <form
            className="flex flex-col gap-y-[16px] text-[14px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-[10px]">
              <p className="text-[#0C4A6E]">Tài Khoản</p>
              <input
                type="text"
                placeholder="Tài Khoản"
                name="username"
                className="border border-[#6B7280] w-full rounded-[99px] pl-[20px] py-[11.5px]"
                onChange={handleChangeValue}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-[#0C4A6E] ">Mật Khẩu</p>
              <input
                type="password"
                placeholder="Mật Khẩu"
                name="password"
                className="border border-[#6B7280] w-full rounded-[99px] pl-[20px] pr-[13px] py-[11.5px]"
                onChange={handleChangeValue}
              />
            </div>
            <div>
              <button
                type="submit"
                className="border border-[#0C4A6E] w-full rounded-[99px] text-[#0C4A6E] py-[11.5px] hover:bg-[#0C4A6E] hover:text-[#fff]"
              >
                Đăng Nhập
              </button>
              <ToastContainer />
            </div>
            <div className="text-center">
              <p>Trường Đại Học Kinh Tế - Kỹ Thuật Công Nghiệp</p>
              <p>Tel: (024)38621504 - (0228)3848706</p>
            </div>
            <div className="flex justify-center gap-[20px]">
              <img src={vector} alt="" />
              <img src={facebook} alt="" />
              <img src={youtube} alt="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
