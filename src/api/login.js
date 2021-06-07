import request from '@/utils/request'

export function loginUrl(query) {
  // var data = new FormData();
//  data.append('id',1);
  return request({
    url: '/oauth/admin/login',
    method: 'post',
    data: query
  })
}
