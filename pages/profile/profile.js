const app = getApp();
Page({
  data:{
    avatarUrl: null,
    name: null,
    age: null,
    status: null,
    memberSince: null,
    lastActive: null,
    preferLocation: null
  },

  onLoad: function() {
    var id = App.remote_user_info.wechat_user_id;
    this.setData({
      name: app.globalData.userInfo.nickName,
      avatarUrl: app.globalData.userInfo.avatarUrl
    })
    wx.request({
      url: `https://fitfam-backend.herokuapp.com/api/v1/users/${id}`,
      method: 'GET',
      success: res => {
        console.log("request success", res);
        this.setData({
          memberSince: res.data.created_at.slice(0, 10),
          lastActive: res.data.updated_at.slice(0, 10),
          preferLocation: res.data.preferred_location
        })
        console.log("setData", this.data)
      },
      fail: err => console.log(err)
    })
    this.statusCheck()
  },
  statusCheck: function() {
    var status = App.remote_user_info.is_leader ? 'Leader' : 'Member'
    this.setData({
      status: status
    })
  }

  //   console.log("loading onload")
  //   var id = App.remote_user_info.wechat_user_id
  //   wx.request({
  //     url: `https://fitfam-backend.herokuapp.com/api/v1/users/${id}`,
  //     method: 'GET',
  //     success: res =>{
  //       console.log(res)
  //     },
  //     fail: err =>{ console.log(err)}
  //   })
  // }
})
