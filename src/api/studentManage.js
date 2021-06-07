import request from '@/utils/request'
import qs from 'qs'

export function deleStudent(query) {
  return request({
    url: '/student/del/' + query,
    method: 'get'
  })
}

export function studentList(query) {
  // var data = new FormData();
//  data.append('id',1);
  return request({
    url: '/student/queryByCondition',
    method: 'post',
    data: qs.stringify(query),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
// 提交新增plan
export function addStudent(query) {
  return request({
    url: '/student/add',
    method: 'post',
    data: JSON.stringify(query),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
}
// 提交信息
export function submitExam(query) {
  return request({
    url: '/student/export',
    method: 'post',
    data: JSON.stringify(query),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
}

// 修改新增plan
export function editStudent(query) {
  return request({
    url: '/student/update',
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
export function studentDetail(query) {
  return request({
    url: '/student/getById/' + query,
    method: 'get'
  })
}
// 获取计划列表
export function planList() {
  return request({
    url: '/trainPlan/simpleList?name=&gender=',
    method: 'get'
  })
}
