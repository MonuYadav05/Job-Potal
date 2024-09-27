import { setIsLoading } from "../../redux/features/authSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
import { toast } from "react-hot-toast";

const { SENDOTP_API } = endpoints;

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
