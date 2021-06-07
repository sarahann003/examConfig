import Cookies from 'js-cookie'
// import axios from 'axios'
// import { BaseUrl } from '@/utils'
const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
// async function token() {
//   var resData = {}
//   axios.get(BaseUrl + 'oauth/token')
//     .then(function(res) {
//       resData = res
//     }).catch(function(err) {

//     })
//   return resData
// }
// export function  getToken() {
//   let res = token();
//   return  res;
// }
