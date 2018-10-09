// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    home: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const HOME_URL = "https://www.v2ex.com/u/"
    const username = options.username
    const url = HOME_URL + username
    this.setData({
      home: url
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 加载成功
  loadSuccess: function(e){
    console.log(e)
  },
  // 加载失败
  loadError: function(e){
    console.log(e)
    wx.navigateBack({
      
    })
  }
})