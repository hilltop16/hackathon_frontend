var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    location: {}
  },
  onLoad: function() {
    this.getLocation()
  },
  getLocation: function() {
    console.log("getting my locatibon")
    wx.getLocation({
      type: "gcj02",
      success: function(res) {
        console.log(res)
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          fail: function(err) {
            console.log(err)
          }
        })
      }
    })
  }
})
  