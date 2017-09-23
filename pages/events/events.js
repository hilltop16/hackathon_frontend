//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',

    latitude: '',
    longitude: '',
    openid: '',
    nickName: '',
    avatarUrl: ''
  },
  //事件处理函数
  viewEvent: function(res) {
    console.log('Id of event', res.currentTarget.id)
    const id = res.currentTarget.id
    wx.navigateTo({
      url: `../event/event?id=${id}`
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      that.setData({
        nickName: userInfo.nickName,
        avatarUrl: userInfo.avatarUrl
        })
        that.doLogin()
        console.log('finished get user info')
    })
  },
  doLogin: function(){
    var that = this
    wx.login({
      success: function (res) {
        var appid = 'wxf9b7a30621259c74';
        var secret = '5697234e6d25de673a035bcb6e0d611b';
        wx.request({
          url: "https://api.weixin.qq.com/sns/jscode2session?appid=" + appid + "&secret=" + secret + "&grant_type=authorization_code&js_code=" + res.code,
          success: function (res) {
            that.setData({
              openid: res.data.openid
            })
            console.log('finished get do login')
            that.getLocation()
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
        console.log(res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        console.log('finished get location')
        // debugger
        that.getFitfamData()
      },
      error: function(err){
        console.log(err)
      }
    })
  },
  getFitfamData: function(){
    var that = this
    wx.request({
      url: "https://fitfam-backend.herokuapp.com/api/v1/events",
      method: 'POST',
      data: {
        open_id: that.data.openid,
        nickname: that.data.nickName,
        avatar_url: that.data.avatarUrl,
        latitude: that.data.latitude,
        longitude: that.data.longitude
      },
      success: function (res) {
        console.log(res)
      }
    })
  }
})
