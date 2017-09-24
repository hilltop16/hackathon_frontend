// pages/checkin/checkin.js
Page({
  data: {
    event_id: '',
    user_id: '',
    checked_in: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('starting get fitfam data')
    var that = this
    wx.request({
      url: `https://fitfam-backend.herokuapp.com/api/v1/event/8/bookings`,
      method: 'GET',
      data: {
        event_id: that.data.event_id,
        user_id: that.data.user_id,
        checked_in: that.data.checked_in,
      }
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
