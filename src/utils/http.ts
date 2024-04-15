import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

console.log('xxxxxxxx', process.env.NODE_ENV)

declare module 'axios' {
  interface AxiosResponse<T = any> {
    code?: string | number
    message?: string
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance
}

let baseURL = process.env.NODE_ENV === 'development' ? '/api' : 'http://web-api.chris-dai.com/api'

const instance = axios.create({
  baseURL,
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bear ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

interface Data {
  [key: string]: unknown
}

interface Http {
  get: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  getUrl: (url: string, data: string) => Promise<AxiosResponse>
  post: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  put: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  delete: (url: string, data: string) => Promise<AxiosResponse>
}

const http: Http = {
  get(url, data, config) {
    return instance.get(url, {
      params: data,
      ...config
    })
  },
  getUrl(url, data) {
    return instance.get(`${url}/${data}`)
  },
  post(url, data, config) {
    return instance.post(url, data, config)
  },
  delete(url, data) {
    return instance.delete(`${url}/${data}`)
  },
  put(url, data, config) {
    return instance.put(url, data, config)
  }
}

export default http
