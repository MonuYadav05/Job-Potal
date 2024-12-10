const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;
// console.log(import.meta.env.VITE_BASE_URL);
// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  FORGET_PASSWORD_API: BASE_URL + "/auth/forget-password",
  RESETPASS_API: BASE_URL + "/auth/reset-password",
};
