import axios from "axios";

export const axiosInstance = axios.create({});
export const apiConnector = (method, url, bodyData, headers, params) => {
  try {
    return axiosInstance({
      method: method,
      url: url,
      data: bodyData ? bodyData : {}, // `data` is used to send the request body
      headers: headers ? headers : { "Content-Type": "application/json" }, // Ensure content-type is correct
      params: params ? params : {},
    });
  } catch (err) {
    console.log("errr is coming in apiconnector");
  }
};
