// 热议
//获取应用实例
const app = getApp()

var api = require('../../utils/api.js')
var ajax = require('../../utils/ajax.js')
var util = require('../../utils/util.js')

Page({
  data: {
    hostlist: []
  },
  
  onLoad: function () {
    this.loadTopic()
    
  },
  toTopics: function(e){
    const id = e.currentTarget.dataset.topicid
    wx.navigateTo({
      url: '../topics/topics?topicid=' + id,
      success: function(res){
        // console.log(res)
      },
      fail: function(err){
        console.log(err)
      }
    })
  },
  // 下拉监听
  onPullDownRefresh: function(){
    console.log("下拉")
    // 加载数据
    this.loadTopic()

  },
  // 加载数据
  loadTopic: function(){
    const that = this
    wx.showNavigationBarLoading()

    const url = api.getHostTopic()

    ajax.get(url).then(data => {
      // 改为正常图片
      const arr = util.toNormalAvatar(data)
      that.setData({
        hostlist: arr
      })
      wx.hideNavigationBarLoading()
    }).catch(err => {
      wx.hideNavigationBarLoading()
      console.log(err)
    })   
  }
  
})
