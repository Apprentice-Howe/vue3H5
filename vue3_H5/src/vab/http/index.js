import axios from 'axios'
import qs from 'qs'

axios.defaults.headers.post['content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.timeout = 10000

axios.interceptors.request.use((config) => {
  /*
  * 这里如果后端有验证, 可以从vuex里拿token带上
  * 判断vuex是否存在token
  * 存在：config.headers[tokenName] = token
  * */
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  if (res.status == 200 || res.code == 200) {
    return Promise.resolve(res)
  } else {
    return Promise.reject(res)
  }
}, (err) => {
  return new Error(`请求异常：${JSON.stringify(err.message)}`)
})

export default {
  post (url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(data))
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  get (url, data) {
    return new Promise((resolve, reject) => {
      axios.get(url, data)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
