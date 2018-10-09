function _get(url,data = {}){
  return new Promise((resolve,reject) => {
    wx.request({
      url,
      method: "GET",
      data,
      success: res => resolve(res.data),
      fail: error => reject(error)
    })
  })
}



module.exports = {
  get: _get,
}