import request from '@/utils/request'
import qs from 'qs'

export function delePlan(query) {
  return request({
    url: '/trainPlan/del/' + query,
    method: 'get'
  })
}
// 简单动作列表
export function actionSimple() {
  return request({
    url: '/trainPart/simpleList',
    method: 'get'
  })
}
export function planList(query) {
  // var data = new FormData();
//  data.append('id',1);
  return request({
    url: '/trainPlan/queryByCondition',
    method: 'post',
    data: qs.stringify(query),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
// 提交新增plan
export function submitPlan(query) {
  return request({
    url: '/trainPlan/add',
    method: 'post',
    data: JSON.stringify(query),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
}
// 修改新增plan
export function editPlan(query) {
  return request({
    url: '/trainPlan/update',
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
export function PlanDetail(query) {
  return request({
    url: '/trainPlan/getById/' + query,
    method: 'get'
  })
}
// 测试
export function fetchList(query) {
  return request({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params: query
  })
}
