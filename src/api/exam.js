import request from '@/utils/request'
import qs from 'qs'

export function examList(query) {
  // var data = new FormData();
//  data.append('id',1);
  return request({
    url: '/examResult/list',
    method: 'post',
    data: qs.stringify(query),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

