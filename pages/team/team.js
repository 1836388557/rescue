// pages/team/team.js
Page({
  data:{
    users:[
      {name:'张三',play:'队长',id:1},{ name:'李四',play:'队员',id:2},{name:'王五',play:'队员',id:3},{name:'小明',play:'队员',id:4}
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
delete:function(){
    const user=this.data.users
    for( var i=0;i<user.length;i++ ){
        if(user[i].id==4){
           user.pop(i)
        }
    }
    this.setData({
      users:user
    })

    }
})