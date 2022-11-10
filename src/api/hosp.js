import request from '@/utils/request'

export default {
  //医院列表
  getPageList(page, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospital/list/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  //查询dictCode查询下级数据字典
  findByDictCode(dictCode) {
    return request({
      url: `/admin/cmn/dict/findByDictCode/${dictCode}`,
      method: 'get'
    })
  },

  //根据id查询下级数据字典
  findByParentId(dictCode) {
    return request({
      url: `/admin/cmn/dict/findChildData/${dictCode}`,
      method: 'get'
    })
  },

  updateStatus(id, status) {
    return request({
      url: `/admin/hosp/hospital/updateStatus/${id}/${status}`,
      method: 'get'
    })
  },
  // 查看医院详细
  getHospById(id) {
    return request({
      url: `/admin/hosp/hospital/show/${id}`,
      method: 'get'
    })
  },
  getScheduleRule(page, limit, hoscode, depcode) {
    return request({
      url: `/admin/hosp/hospitalSet/getScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
      method: 'get'
    })
  },
  //查询排班详情
  getScheduleDetail(hoscode,depcode,workDate) {
    return request ({
      url: `/admin/hosp/hospitalSet/getScheduleDetail/${hoscode}/${depcode}/${workDate}`,
      method: 'get'
    })
  },
  //查看医院科室
  getDeptByHoscode(hoscode) {
    return request ({
      url: `/admin/hosp/department/getDeptList/${hoscode}`,
      method: 'get'
    })
  }
}
