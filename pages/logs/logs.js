// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    tabs:[
      {
        id:0,
        value:"溺水",
        isActive:true
      },
      {
        id:1,
        value:"火灾",
        isActive:false
      },
      {
        id:2,
        value:"地震",
        isActive:false
      }
    ]
  },
  handlechangeitem(e){
    const {index}=e.detail;
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
   },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  }
})
