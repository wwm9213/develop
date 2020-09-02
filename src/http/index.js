import axios from 'axios';
import { Message } from 'element-ui'
import QS from 'qs';

let BASE_URL = ''
// if (process.env.NODE_ENV == 'development') {
//     BASE_URL = '';
// }
// else if (process.env.NODE_ENV == 'debug') {
//     BASE_URL = '';
// }
// else if (process.env.NODE_ENV == 'production') {
//     BASE_URL = '';
// }

var instance = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
        'content-type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
// instance.interceptors.response.use(function (response) {
//     console.log('response', response)
//     // 对响应数据做点什么
//     if (response.status === 200) {

//         return Promise.resolve(response);
//     } else {
//         return Promise.reject(response);
//     }
// }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
// });

async function request(config = {}) {
    let res = {}
    try {
      res = await service.request(config)
    } catch (e) {
      let errorText = ''
      switch (e.response && e.response.status) {
        case 404:
          errorText = '404 Not Found'
          break
        case 403:
          errorText = '无权限访问'
          break
        case 408:
          errorText = '服务器请求超时'
          break
        case undefined:
          errorText = '请检查请求配置是否正确'
          break
        default:
          errorText = '服务器请求超时'
      }
      res.data = {
        code: e.response && e.response.status,
        message: errorText
      }
    }
    return res.data
  }

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    // return new Promise((resolve, reject) => {
    //     axios.get(url, {
    //         params: params
    //     }).then(res => {
    //         resolve(res.data);
    //     }).catch(err => {
    //         reject(err.data)
    //     })
    // });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    // return new Promise((resolve, reject) => {
    //     axios.post(url, QS.stringify(params))
    //         .then(res => {
    //             resolve(res.data);
    //         })
    //         .catch(err => {
    //             reject(err.data)
    //         })
    // });
}