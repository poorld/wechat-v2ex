// pages/topics/topics.js
var api = require('../../utils/api.js')
var ajax = require('../../utils/ajax.js')
var util = require('../../utils/util.js')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topics: {},
    replies: [],
    topicid: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    const that = this
    const topicid = options.topicid
    // 获取主题信息
    const topicsurl = api.getThematicInfo({ id: topicid });
    const topics = ajax.get(topicsurl)

    // 获取主题回复
    const repliesurl = api.getThematicReplies({ topic_id: topicid})
    const replies = ajax.get(repliesurl)

    // Promise.all
    const result = Promise.all([topics,replies])

    result.then(([topicsResult, repliesResult]) => {
      // console.log("topicsResult")
      // console.log(topicsResult)
      console.log("repliesResult")
      console.log(repliesResult)
      // let content = repliesResult
      
      // 时间戳转换为本地时间
      topicsResult[0].created = util.transLocalTime(topicsResult[0].created)
      // console.log(topicsResult[0])
      // 修改头像
      repliesResult = util.toNormalAvatar(repliesResult)


      that.setData({
        topics: topicsResult[0],
        replies: repliesResult,
        topicid: topicid
      })
      wx.hideLoading()
    }).catch(err => {
      console.log(err)
      wx.hideLoading()
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
  toUser: function(e){
    //  console.log(e)
    const userId = e.currentTarget.dataset.id
    const topicid = this.data.topicid
    app.globalData.userId = userId
    app.globalData.topicid = topicid
    wx.switchTab({
      url: '../my/my',
      fail: function(err){
        console.log(err)
      }
    })
  }
 
})