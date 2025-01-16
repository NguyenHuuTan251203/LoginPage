import { toast } from "react-toastify";

export function showToast(message, type = "default") {
  toast[type](message, {
    position: "top-right",
    autoClose: 1000, // Đóng sau 1 giây
    hideProgressBar: false, // Tắt progress bar
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
