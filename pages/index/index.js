var app = getApp();
Page({
  data: {
    markers: [],
    circles: [],
    identify:0,
    hasLogin:0
  },
  onLoad: function (option) {
    this.login()
    
  },
  toRescue: function () {
      if(this.data.hasLogin){
        if(this.data.identify){
          console.log("已经认证，显示救援信息")
        }else{
          console.log("没有认证，跳转到认证")
        }
      }else{
        this.login()
      }
      
  },
  login(){
    var that=this
    wx.showModal({
      title: '温馨提示',
      content: '亲，授权微信登录后才能正常使用小程序功能',
      success(res) {
        console.log(res)
        //如果用户点击了确定按钮
        if (res.confirm) {
          wx.getUserProfile({
            desc: '获取你的昵称、头像、地区及性别',
            success: res => {
              console.log(res);
              that.getLocation()
              that.setData({
                hasLogin:1
              })             
              wx.setStorage({
                key:'userInfo',
                data:res.userInfo
              })
            },
            fail: res => {
              console.log(res)
              //拒绝授权
              wx.showToast({
                title: '您拒绝了请求,不能正常使用小程序',
                icon: 'error',
                duration: 2000
              });
              return;
            }
          });
        } else if (res.cancel) {
          //如果用户点击了取消按钮
          wx.showToast({
            title: '您拒绝了请求,不能正常使用小程序',
            icon: 'error',
            duration: 2000
          });
          return;
        }
      }
    });
  },
  getLocation(){
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res);
        //  wx.request({
        //    url: 'url',
        //    data: res,
        //    header: { 'Content-Type': 'application/json' },
        //    success: function(ops){
        //     console.log(ops.data)
        //    },
        //  })
        that.setData({
          markers: [{
            id: 0,
            latitude: res.latitude,
            longitude: res.longitude,
            width: 20,
            height: 20,
            iconPath: "/icon/position.png",
            label: {
              content: '当前位置', //文本
              color: '#FF0202', //文本颜色
              borderRadius: 3, //边框圆角
              borderWidth: 1, //边框宽度
              borderColor: '#FF0202', //边框颜色
              bgColor: '#FFFFFF', //背景色
              padding: 5, //文本边缘留白
              textAlign: 'center' //文本对齐方式。有效值: left, right, center
            },
            //气泡callout
            callout: {
              content: '当前位置', //文本
              color: '#FF0202', //文本颜色
              borderRadius: 3, //边框圆角
              borderWidth: 1, //边框宽度
              borderColor: '#FF0202', //边框颜色
              bgColor: '#FFFFFF', //背景色
              padding: 5, //文本边缘留白
              textAlign: 'center' //文本对齐方式。有效值: left, right, center
            }


          }],
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 3000,
            strokeWidth: 1
          }]
        })
      }
    })
  },
  regionchange(e) {
    console.log("regionchange===" + e.type)
  },

  //点击merkers
  markertap(e) {
    console.log(e.markerId)

    wx.showActionSheet({
      itemList: ["A"],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  }
})