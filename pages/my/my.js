// pages/my/my.js
Page({

  data: {
    userinfo:{},
  },
  onShow(){
    // 获取缓存中的userInfo
     const userInfo=wx.getStorageSync('userInfo')
     this.setData({
       userInfo
     })

  }
})