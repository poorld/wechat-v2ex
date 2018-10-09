// pages/new/new.js
// 最新话题
var api = require('../../utils/api.js')
var ajax = require('../../utils/ajax.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newlist: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadNewTopic()
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
    this.loadNewTopic()
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
  toTopics: function (e) {
    console.log(e)
    const topicid = e.currentTarget.dataset.topicid
    wx.navigateTo({
      url: '../topics/topics?topicid=' + topicid,
    })
  },
  loadNewTopic: function(){
    const that = this
    wx.showNavigationBarLoading()
    const url = api.getNewTopic();
    // console.log(url)
    ajax.get(url).then(data => {
      console.log(data)
      that.setData({
        newlist: data
      })
      wx.hideNavigationBarLoading()
    }).catch(err => {
      console.log(err)
      wx.hideNavigationBarLoading()
    })
  }
})