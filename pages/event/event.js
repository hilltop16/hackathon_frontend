var app = getApp();
Page({
  data: {
    id: null,
    members: [],
    address: null,
    openId: null
  },
  onLoad: function(options) {
    console.log('This is the res from last page', options.id)
    let that = this
    let id = options.id
    this.setData({
      id: options.id,
      dateObject: this.showDate(this.data.date)
    })
    wx.request({
      url: `https://fitfam-backend.herokuapp.com/api/v1/events/${id}`,
      success: res => {
        let event = res.data
        that.setData(event)
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
