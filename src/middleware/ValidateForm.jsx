import { showToast } from "../components/noti";

export function CheckNull(username, password) {
  if (username === "") {
    showToast("Tên tài khoản không được để trống", "error");
    return false;
  }
  if (password === "") {
    showToast("Mật khẩu không được để trống", "error");
    return false;
  }
  return true;
}
