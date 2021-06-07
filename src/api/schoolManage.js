import request from '@/utils/request'
import qs from 'qs'

export function deleSchool(query) {
  return request({
    url: '/school/del/' + query,
    method: 'get'
  })
}

export function schoolList(query) {
  // var data = new FormData();
//  data.append('id',1);
  return request({
    url: '/school/queryByCondition',
    method: 'post',
    data: qs.stringify(query),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
// 提交新增plan
export function addSchool(query) {
  return request({
    url: '/school/add',
    method: 'post',
    data: JSON.stringify(query),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
}
// 修改新增plan
export function editSchool(query) {
  return request({
    url: '/school/update',
    method: 'post',
    data: JSON.stringify(query),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
}
export function checkName(query) {
  return request({
    url: '/trainPlan/checkName',
    method: 'post',
    data: JSON.stringify(query),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
}
// 获取计划详情
export function schoolDetail(query) {
  return request({
    url: '/school/getById/' + query,
    method: 'get'
  })
}
