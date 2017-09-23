const app = getApp();
Page({
  data:{
    avatar: null,
    name: null,
    age: null,
    status: null,
    memberSince: null,
    lastActive: null,
    preferLocation: null
  },
  onLoad: function() {
    var userInfo = app.globalData.userInfo;
    console.log(userInfo.gender);
    this.setData({
      avatar: userInfo.avatarUrl
    })
  }
})