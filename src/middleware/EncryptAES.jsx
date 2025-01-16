import CryptoJS from "crypto-js";
/**
 * Mã hóa văn bản
 *
 * @param {string} plainText - Văn bản đơn giản được mã hóa.
 * @return {string} Văn bản được mã hóa.
 */
export const encryptAESWithKey = (plainText = "") => {
  return CryptoJS.AES.encrypt(plainText, "fd85b494-Uneti").toString();
};
