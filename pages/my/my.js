/**
 * 从topics 转到switchTab(当前)不能使用wx.navigateTo()
 * 从当前跳回topics也不能使用wx.navigateBack({})
 */

var api = require('../../utils/api.js')
var ajax = require('../../utils/ajax.js')
var util = require('../../utils/util.js')
const app = getApp()

// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoLoading: false,

    user: {},
    
    //input搜索输入值
    inputValue: '',

    // 按钮显示控制
    goback: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    const userId = app.globalData.userId
    console.log(app.globalData.userId)
    const that = this
    let url = api.getUserInfo({ id: 310631 })
    if (userId) {
      url = api.getUserInfo({ id: userId })
    }
    console.log(url)
    ajax.get(url).then(data => {
      data.avatar_normal = data.avatar_normal.replace('mini', 'large')
      data.created = util.transLocalTime(data.created)
      console.log(data)
      that.setData({
        user: data
      })
    })

    // goback
    const topicid = app.globalData.topicid
    if (topicid) {
      this.setData({
        goback: true
      })
    }
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

  inputDone: function(e){
    console.log("input done")
    console.log(e)
    this.setData({
      inputValue: e.detail.value
    })
  },
  confirm: function(e){
    
    this.setData({
      inputValue: e.detail.value
    })
    this.search()
  },

  search: function(e){
    const that = this
   
    console.log(that.data.inputValue)
    const requestParam = that.data.inputValue
    const byUserNameUrl = api.getUserInfo({username: requestParam})
    const byUserIdUrl = api.getUserInfo({id: requestParam})

    const result1 = ajax.get(byUserNameUrl);
    const result2 = ajax.get(byUserIdUrl)


    const result = Promise.all([result1,result2])
    let user;

    result.then(([res1,res2]) => {
      if (res1.status == 'found'){
        user = res1
      } else if (res2.status == 'found'){
        user = res2
      }else {
        // 没找到
        console.log("没找到")
      }

      if (user) {
        console.log("找到了")
        user.created = util.transLocalTime(user.created)
        console.log(user)
        user.avatar_normal = user.avatar_normal.replace('mini', 'large')
        that.setData({
          user: user,
          infoLoading: false,
          inputValue: ''
        })
      }else {
        that.setData({
          infoLoading: false
        })
      }
      
    }).catch(error => {
      console.log(error)
      that.setData({
        infoLoading: false
      })
    })

    

    // setTimeout(() => {
    //   this.setData({
    //     infoLoading: false
    //   })
    // },3000)
  },
  toHome: function(e){
    const username = e.currentTarget.dataset.username
    console.log(username)
    wx.navigateTo({
      url: '../home/home?username=' + username,
      fail: err => {
        console.log(err)
      }
    })
  },
 
  goback: function(e){
    const goback = this.data.goback
    const topicid = app.globalData.topicid
    if (goback){
      wx.navigateTo({
        url: '../topics/topics?topicid=' + topicid,
        fail: err => console.log(err)
      })
      app.globalData.topicid = null
      this.setData({
        goback: false
      })
    }
    
  }
})