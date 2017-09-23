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
  onReady: function() {
    console.log(this.data.latitude)
  }

})
  