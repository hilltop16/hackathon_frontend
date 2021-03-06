//index.js
const preloader = require('../../libs/loader.js')

//获取应用实例
var app = getApp()
Page({
  data: {
    loader: true,
    latitude: '',
    longitude: '',
    openid: '',
    nickName: '',
    avatarUrl: '',
    events: '',
    truncateDistance: ''
  },
  viewEvent: function(e) {
    console.log('Id of event', e.currentTarget.id)
    let id = e.currentTarget.id
    wx.navigateTo({
      url: `../event/event?id=${id}`
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    this.setData({
      truncateDistance: this.truncateDistance
    })
    app.getUserInfo(function(userInfo){
      that.setData({
        nickName: userInfo.nickName,
        avatarUrl: userInfo.avatarUrl
        })
        that.doLogin()
    })
  },
  doLogin: function(){
    var that = this
    wx.login({
      success: function (res) {
        var appid = 'wxf9b7a30621259c74'
        var secret = '5697234e6d25de673a035bcb6e0d611b'
        wx.request({
          url: "https://api.weixin.qq.com/sns/jscode2session?appid=" + appid + "&secret=" + secret + "&grant_type=authorization_code&js_code=" + res.code,
          success: function (res) {
            that.setData({
              openid: res.data.openid
            })
            that.getLocation()
          },
          error: function(err){
            console.log(err)
          }
        })
      }
    })
  },
  getLocation: function(){
    var that = this
    wx.getLocation({
      type: "gcj02",
      success: function (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        that.getFitfamData()
      },
      error: function(err){
        console.log(err)
      }
    })
  },
  getFitfamData: function(){
    console.log('starting get fitfam data')
    const that = this
    wx.request({
      url: "https://fitfam-backend.herokuapp.com/api/v1/events",
      method: 'GET',
      data: {
        open_id: that.data.openid,
        nickname: that.data.nickName,
        avatar_url: that.data.avatarUrl,
        latitude: that.data.latitude,
        longitude: that.data.longitude
      },
      success: res => {
        console.log(res)
        preloader.hide(that)
        let parsedResponse = res.data
        that.setData({
          events: parsedResponse.events
        })
        App.remote_user_info = {
          is_leader: res.data.is_leader,
          wechat_user_id: res.data.wechat_user_id
        }
      },
      fail: err => { console.log(err) }
    })
  },
  onShow: function(){
    console.log('this is onshow')
  }
})
