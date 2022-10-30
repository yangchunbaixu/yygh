import request from '@/utils/request'
// 登录方法
const api_name = `/api/user`
export default {
  login(userInfo){
    return request({
      url: `${api_name}/login`,
      method: `post`,
      data: userInfo
    })
  }
}
