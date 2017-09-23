var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    latitude: null,
    longitude: null
  },
  onLoad: function() {
    this.getLocation();
    console.log(this.data.latitude)
    console.log("on loading")
  },
  getLocation: function() {
    console.log("getting my location")
    var that = this;
    wx.getLocation({
      type: "gcj02",
      success: function(res) {
        console.log(res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },
  sendLocation: function() {
    wx.request({
      url: "",
      method: 'POST',
      data: {
        latitude: this.data.latitude,
        longitude: this.data.longitude
      },
      success: function (res) {
        this.setData({
          events: res.events,
          is_leader: res.is_leader
        })
      }
    })
  },
  onShow: function() {
    console.log("loading onShow")
    console.log(this.data.latitude)
  }

})
  