import request from '@/utils/request'
import qs from 'qs'

export function deleAction(query) {
  return request({
    url: '/trainPart/del/' + query,
    method: 'get',
  })
}
export function actionList(query) {
 // var data = new FormData();
//  data.append('id',1);
  return request({
    url: '/trainPart/queryByCondition',
    method: 'post',
    data:qs.stringify(query),
    headers:{
      'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
//引导姿势
export function guidePostureList() {
  return request({
    url: '/dict/1001',
    method: 'get',
  })
}
//机械类型
export function equipmentList() {
  return request({
    url: '/dict/1002',
    method: 'get',
  })
}
//训练类型
export function trainTypeList() {
  return request({
    url: '/dict/1005',
    method: 'get',
  })
}
//配置规则
export function ruleList() {
  return request({
    url: '/dict/1003',
    method: 'get',
  })
}
//训练部位
export function trainPartList() {
  return request({
    url: '/dict/1004',
    method: 'get',
  })
}
//提交新增action
export function submitAction(query) {  
  return request({
    url: '/trainPart/add',
    method: 'post',
    data:JSON.stringify(query),
    headers:{
      'Content-Type':'application/json; charset=UTF-8'
    } 
  })
}
//修改新增action
export function editAction(query) {  
  return request({
    url: '/trainPart/update',
    method: 'post',
    data:JSON.stringify(query),
    headers:{
      'Content-Type':'application/json; charset=UTF-8'
    } 
  })
}
export function checkName(query) {  
  return request({
    url: '/trainPart/checkName',
    method: 'post',
    data:JSON.stringify(query),
    headers:{
      'Content-Type':'application/json; charset=UTF-8'
    } 
  })
}
//获取动作详情
export function AcitonDetail(query) {
  return request({
    url: '/trainPart/getById/' + query,
    method: 'get',
  })
}