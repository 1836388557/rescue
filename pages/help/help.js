// pages/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tip:"",
     num:'',
     qk:'',
     tiem:'',
     biaozhi:'',
     buchong:''
  },
  formBindsubmit:function(e){
     if(e.detail.value.num.length==0||e.detail.value.time.length==0){
       this.setData({
         tip:'未输入',
       })
     }else{
       this.setData({
         tip:'',
         num:e.detail.value.num,
         qk:e.detail.value.qk,
         time:e.detail.value.time,
         biaozhi:e.detail.value.biaozhi,
         buchong:e.detail.value.buchong

       })
     }
     console.log(e);
     console.log(this.data.num);
  },
  formReset:function(){
    this.setData({
      num:'',
      qk:'',
      tiem:'',
      biaozhi:'',
      buchong:''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
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