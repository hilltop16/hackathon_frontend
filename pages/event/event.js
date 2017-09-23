var app = getApp();
Page({
  data: {    
    id: 8,
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
    directions: "some long string",
    address: "345 Nanjing xi Lu",
    name: "Jingan Park"
  },
  onLoad: function() {
  },
  onShow: function() {
  },
  navProfile: function() {
    wx.navigateTo({
      url: '/pages/events/events'
    })
  }
})
  