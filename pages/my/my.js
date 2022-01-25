// pages/my/my.js
Page({

  data: {
    userinfo:{},
  },
  onLoad(){
        // 获取缓存中的userInfo
        const userInfo=wx.getStorageSync('userInfo')
        console.log(userInfo)
        this.setData({
          userInfo
        })
  },
  onShow(){


  }
})