var app = getApp();
Page({
  data: {
    id: null,
    is_event_leader: false,
    is_registered: false,
    is_checked_in: false,
    booking_id: null
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
      data:{
        wechat_user_id: App.remote_user_info.wechat_user_id
      },
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
          location_name: event.location_name,
          leader_id: event.wechat_user_id,
          is_registered: event.is_registered
        })
        if(this.leader_id == App.remote_user_info.wechat_user_id){
          this.setData({
            is_leader: true
          })
        }
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
    let user_id = App.remote_user_info.wechat_user_id
    let that = this
    wx.request({
      url: "https://fitfam-backend.herokuapp.com/api/v1/bookings/",
      method: 'POST',
      data: {
        event_id: this.data.id,
        wechat_user_id: user_id
      },
      success: function (res) {
        that.setData({
          is_registered: true,
          booking_id: res.data.id
        })
      },
      fail: err => {console.log(err)}
    })
  },
  handleCancel: function(){
    let booking_id = this.data.booking_id
    let that = this
    wx.request({
      url:`https://fitfam-backend.herokuapp.com/api/v1/bookings/${id}`,
      method: 'DELETE',
      data: {
        event_id: this.data.id,
        wechat_user_id: user_id
      },
      success: function(res){
        that.setData({
          is_registered: false,
          booking_id: null
        })
      },
      fail: err =>{ console.log(err) }
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
