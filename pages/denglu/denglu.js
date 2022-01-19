// pages/my/my.js
Page({
  data: {
  userInfo:{},
  hasUserInfo: false,
  },
  userInfo:{},
  onLoad: function (options) {

  },
  handleGetUserProfile(e){
 wx.getUserProfile({
   desc: '救援小程序',
   success:(res)=>{
     console.log(res);
    wx.setStorageSync('userInfo', res.userInfo)
    this.setData({
      userInfo: res.userInfo,
      hasUserInfo: true
    })
    wx.navigateBack({
      delta: 1,
    })({
      url: 'url',
    })
   }
 })

  }
})