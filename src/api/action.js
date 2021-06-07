import request from '@/utils/request'
import qs from 'qs'

export function deleAction(query) {
  return request({
    url: '/trainPart/del/' + query,
    method: 'get',
  })
}
export function actionList(query) {
  return request({
    url: '/account/list',
    method: 'post',
    data:JSON.stringify(query),
    dataType:'json',
    headers:{
      'Content-Type':'application/json;charset=UTF-8'
    }
  })
}
export function parentList(query) {
  // var data = new FormData();
 //  data.append('id',1);
   return request({
     url: '/account/list',
     method: 'post',
     data:JSON.stringify(query),
     dataType:'json',
     headers:{
       'Content-Type':'application/json;charset=UTF-8'
     }
   })
 }
 //添加高考规划师
 export function submitAction(query) {
  return request({
    url: '/account/add',
    method: 'post',
    data:JSON.stringify(query),
    dataType:'json',
    headers:{
      'Content-Type':'application/json;charset=UTF-8'
    }
  })
}
 //检查手机号
 export function checkName(query) {
  return request({
    url: '/checkPhone',
    method: 'post',
    data:JSON.stringify(query),
    dataType:'json',
    headers:{
      'Content-Type':'application/json;charset=UTF-8'
    }
  })
}