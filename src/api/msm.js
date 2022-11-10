import request from '@/utils/request'
// 短信验证

const api_name = `/api/msm`
export default {
  msm(phone){
    return request({
      url: `api_name/${phone}`,
      method: `get`,
      data: phone
    })
  }
}
