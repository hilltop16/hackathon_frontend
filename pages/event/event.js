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
    members: [],
    id: null,
    directions: "Line 2 - Jingan Temple Station",
    address: "345 Nanjing Xi Lu",
    name: "Jingan Park",
    marker: [{
      iconPath: "../../images/marker.png",
      latitude: 23.099994,
      longitude: 113.324520,
      width: 30,
      height: 30
    }],
    is_leader: null,
    wechat_user_id: null
  },

  onLoad: function(options) {
    let that = this
    let id = options.id
    that.setData({
      id: options.id,
      dateObject: this.showDate(this.data.date)
    })
    wx.request({
      url: `https://fitfam-backend.herokuapp.com/api/v1/events/${id}`,
      success: res => {
        let event = res.data
        that.setData({
          dateObject: this.showDate(event.date),
          openId: event.wechat_user_id,
          max_attendance: event.max_attendance,
          markers: [{
            iconPath: "../../images/marker.png",
            width: 30,
            height: 30,
            latitude: event.latitude,
            longitude: event.longitude
          }],
          latitude: event.latitude,
          longitude: event.longitude,
          workout_type: event.workout_type,
          photo: event.photo,
          directions: event.directions,
          location_id: event.location_id,
          is_cancelled: event.is_cancelled,
          address: event.address,
          aqi: event.aqi,
          announcement: event.announcement,
          members: event.members,
          location_name: event.location_name
        })
      },
      fail: res => {console.log(res)}
    })
  },
  onShow: function() {
  },

  navProfile: function(e) {
    let id = e.target.id
    wx.navigateTo({
      url: `/pages/profile/profile?id=${id}`
    })
  },
  handleCheckinBtn: function() {
    wx.navigateTo({
      url: '/pages/checkin/checkin'
    })
  },

  handleRegisterBtn: function () {
    wx.request({
      url: "https://fitfam-backend.herokuapp.com/api/v1/bookings/",
      method: 'POST',
      data: {
        id: this.data.eventId,
        wechat_user_id: this.data.openId,
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
      minutes: new Date(date).getMinutes()
    }
  }
})
