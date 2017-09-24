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
    directions: "Line 2 - Jingan Temple Station",
    address: "345 Nanjing Xi Lu",
    name: "Jingan Park",
    marker: [{
      iconPath: "../../images/marker.png",
      latitude: 23.099994,
      longitude: 113.324520,
      width: 30,
      height: 30
    }]
  },
  onLoad: function(res) {
    console.log('This is the res from last page', res.id)
    const id = res.id
    // wx.request({
    //   url: `/events/${id}`,
    //   success: res => {console.log(res)},
    //   fail: res => console.log(res)
    // })
    this.setData({
      dateObject: this.showDate(this.data.date)
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
