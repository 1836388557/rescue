var app = getApp();
Page({
  data: {
    markers: [],
    circles: []
  },
  getposition: function () {
    //  var latitude=this.data.markers[0].latitude;
    //  var longitude=this.data.markers[0].longitude;
    //   wx.request({
    //     url: 'https://api.jisuapi.com/illegaladdr/coord?appkey='+app.globalData.appkey  ,
    //     data:{
    //       lat:  latitude,
    //       lng:longitude,
    //       range:1000,
    //       num:10
    //     },
    //     success:function(res){
    //       console.log(res);
    //     }
    //   })

  },
  onLoad: function (option) {
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
            iconPath: "/assests/imgs/位置.png",
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