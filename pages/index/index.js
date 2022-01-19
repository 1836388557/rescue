var app=getApp();
Page({
data:{
  markers:[]
},
getposition:function(){
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
onLoad:function(option){
  var that=this
   wx.getLocation({
     success: function(res){
       console.log(res);
       wx.request({
         url: 'url',
         data: res,
         header: { 'Content-Type': 'application/json' },
         success: function(ops){
          console.log(ops.data)
         },
       })
       that.setData({
         markers:[
           {
           latitude:res.latitude,
           longitude:res.longitude,
           iconPath:"../../icon/位置.png",
           width:20,
            height:20,
            callout:{
              content:"当前位置",
              color:'red',
              fontSize:13,
              borderRadius:5,
              borderWidth:1,
              borderColor:'#0000ff',
              padding:2,
              display:"ALWAYS"
            }
           },
         ]
       })
     }
   })
},

  
 
})
