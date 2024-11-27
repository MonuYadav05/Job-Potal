const BASE_URL = "http://localhost:8000";

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  FORGET_PASSWORD_API: BASE_URL + "/auth/forget-password",
  RESETPASS_API: BASE_URL + "/auth/reset-password",
};
