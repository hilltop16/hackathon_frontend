var app = getApp();
Page({
  data: {
    eventId: 8,
    openId: null,
    location_id: 1,
    workout_type: "swimming",
    is_cancelled: false,
    announcement: null,
    aqi: null,
    max_attendance: 20,
    date: "2017-09-25T13:45:17.338Z",
    created_at: "2017-09-23T14:28:44.738Z",
    updated_at: "2017-09-23T14:28:44.738Z",
    wechat_user_id: 3,
    latitude: "31.230012338244954",
    longitude: "121.4589166639099",
    photo: "www.thotmail.com",
    members: [{"photo": "http://wx.qlogo.cn/mmopen/vi_32/Nhr2By0AKpvy5YtD8x0Qy63SdnfGOluyCbqiapqhDBICJXaG3CwsiaCK5EbPmDTFapANkljPp1T2xicBCnGJCS9bw/0", "id": 1}, {"photo": "http://wx.qlogo.cn/mmopen/vi_32/Nhr2By0AKpvy5YtD8x0Qy63SdnfGOluyCbqiapqhDBICJXaG3CwsiaCK5EbPmDTFapANkljPp1T2xicBCnGJCS9bw/0", "id": 2}, {"photo": "http://wx.qlogo.cn/mmopen/vi_32/Nhr2By0AKpvy5YtD8x0Qy63SdnfGOluyCbqiapqhDBICJXaG3CwsiaCK5EbPmDTFapANkljPp1T2xicBCnGJCS9bw/0", "id": 3}],
    directions: "Turn right on Nanjing Xi Lu",
    address: "345 Nanjing Xi Lu",
    name: "Jingan Park"
  },
  onLoad: function() {

    var that = this;
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
            console.log(that.data.openid)
          }
        })
      }
    })

    that.setData({
      dateObject: that.showDate(that.data.date)
    })

  },
  onShow: function() {
  },
  navProfile: function() {
    wx.navigateTo({
      url: '/pages/events/events'
    })
  },

  handleRegisterBtn: function() {
    wx.request({
      url: "https://fitfam-backend.herokuapp.com/events/",
      method: 'GET',
      data: {
        id: this.data.eventId,
        user_id: this.data.openId,
      },
      success: function (res) {
        console.log(res)
      }
    })
  },
  showDate: function (date) {
    return {
      day: new Date(date).getDate(),
      month: new Date(date).getMonth(),
      year: new Date(date).getFullYear(),
      hour: new Date(date).getHours(),
      minutes: new Date(date).getMinutes(),
    }
  }

  
})
