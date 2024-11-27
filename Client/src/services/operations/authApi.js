import { setIsLoading, setToken } from "../../redux/features/authSlice";
import { setUser } from "../../redux/features/profileSlice";
import { apiConnector, axiosInstance } from "../apiConnector";
import { endpoints } from "../apis";
import { toast } from "react-hot-toast";

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  FORGET_PASSWORD_API,
  RESETPASS_API,
} = endpoints;

export function sendOtp(email, navigate) {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", SENDOTP_API, { email });

      console.log("SENDOTP API RESPONSE............", response);

      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("OTP Sent");
      navigate("/verify-email");
    } catch (err) {
      console.log("send otp api error", err.response.data.message);
      toast.error(err.response.data.message, {
        duration: 2000,
      });
    }
    dispatch(setIsLoading(false));
    toast.dismiss(toastId);
  };
}

export function signUp(formData, navigate) {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", SIGNUP_API, formData);

      console.log("Sign Up Response.....", response);

      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("SignUp Successful");
      navigate("/login");
    } catch (err) {
      console.log("SIGNUP API ERROR............", err);
      toast.error("err.response.data.message");
      navigate("/sign-up");
    }
    dispatch(setIsLoading(false));
    toast.dismiss(toastId);
  };
}

// login.......
export function login(loginData, navigate) {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", LOGIN_API, loginData);

      console.log("Login Response.....", response);

      console.log(response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user));

      toast.success("Login Successful");

      navigate("/");
    } catch (err) {
      console.log("Login API ERROR............", err);
      toast.error(err.response.data.message);
      navigate("/login");
    }
    dispatch(setIsLoading(false));
    toast.dismiss(toastId);
  };
}

export function logout(navigate) {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    const toastId = toast.loading("Loading...");
    try {
      dispatch(setToken(null));
      dispatch(setUser(null));
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logged Out", { duration: 2000 });
      navigate("/");
    } catch (err) {
      console.log("Logout API ERROR............", err);
      toast.error(err.response.data.message);
      navigate("/dashboard/my-profile");
    }
    dispatch(setIsLoading(false));
    toast.dismiss(toastId);
  };
}

export function forgetPassword(email, navigate) {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    const toastId = toast.loading("Loading..");
    try {
      const response = await apiConnector("POST", FORGET_PASSWORD_API, {
        email,
      });

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setIsLoading(false));
      toast.dismiss(toastId);

      toast.success(`${response.data.message}`);
      // navigate("/verify-email");
    } catch (err) {
      console.log(err);
    }
    dispatch(setIsLoading(false));
    toast.dismiss(toastId);
  };
}

export function resetPass(password, confirmPassword, randomString, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("loading..");

    try {
      const response = await apiConnector("POST", RESETPASS_API, {
        password,
        confirmPassword,
        randomString,
      });

      console.log(response);
      if (!response.data.success) {
        toast.error(response.data.message);
        // throw new Error(response.data.message);
      }

      toast.success(response.data.message);
      navigate("/login");
    } catch (err) {
      // console.log("err in resetpass", err);
      toast.error(err.response.data.message);
    }
    toast.dismiss(toastId);
  };
}
