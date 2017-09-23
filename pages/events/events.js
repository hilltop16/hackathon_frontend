//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    latitude: '',
    longitude: ''
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
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

  },
  getLocation: function () {
    wx.navigateTo({
      url: './location/location'
    })
  },
  showLocation: function() {
    wx.navigateTo({
      url: './Jingan/location'
    })
  }
})
