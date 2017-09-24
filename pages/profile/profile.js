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
  onShow: function(){
    console.log('dis is on show')
  },
  onLoad: function() {
    console.log("loading onload")
    var id = App.remote_user_info.wechat_user_id
    wx.request({
      url: `https://fitfam-backend.herokuapp.com/api/v1/users/${id}`,
      method: 'GET',
      success: res =>{
        debugger
        console.log(res)
      },
      fail: err =>{ console.log(err)}
    })
  }
})
