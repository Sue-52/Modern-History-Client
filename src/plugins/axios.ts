import axios from "axios";
// Create a new axios instance
axios.defaults.baseURL = "/api/v1";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const config = {
  baseURL: "/api/v1",
  timeout: 60 * 1000, // Timeout,
  withCredentials: true, // Check cross-site Access-Control
};

// 创建一个 axios 实例对象，用于配置项目应用相关请求
const _axios = axios.create(config);

// 请求拦截器
_axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
_axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

// 生成请求函数所需参数
const generateRequestConfig = (url: string, method: string, data: any) => ({
  url,
  method,
  [method.toLowerCase() === "get" ? "params" : "data"]: data,
});

// 请求函数（不带Token）
export default function request(url: string, method: string, data: any) {
  return _axios(generateRequestConfig(url, method, data));
}
