import * as axios from 'axios';
import qs from 'querystring';
import address from '../../config';

let options = {
  timeout: 5000, // 超时时间
  withCredentials: true, // 发送跨域请求
  headers: {
    post: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } // 设置请求
  },
  params: {
    t: +new Date() // 解决请求缓存
  }
};

// 在服务端渲染时需要所有路径
if (process.server) {
  options.baseURL = address.SERVER_ADDRESS + `/api`;
} else {
  options.baseURL = `/api`;
}

// 请求错误处理
let axiosInstance = axios.create(options);

axiosInstance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    if (typeof response.data === 'string') {
      try {
        response.data = JSON.parse(response.data);
      } catch (e) {
        response.data = {
          code: 10001,
          msg: '接口错误'
        };
      }
    }
    return response.data;
  },
  function (error) {
    console.log(error);
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default axiosInstance;
