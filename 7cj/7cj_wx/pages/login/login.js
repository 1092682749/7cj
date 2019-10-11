// pages/login/login.js
let userType;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: '',
    password: ''
  },
  accountInput(e){
    this.setData({
      account: e.detail.value
    })
  },
  pwdInput(e){
    this.setData({
      password: e.detail.value
    })
  },
  login(){
    if(this.data.account){
      if(this.data.password){
        if (/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.data.account)) {
          console.log('登录');
          let params = {
            phone_number: this.data.account,
            password: this.data.password
          };
          getApp().globalData.api.userLogin(params, (res) => {
            if (res['data']['status'] == 200){
              wx.setStorageSync('cookie', res['header']['Set-Cookie']);
              wx.showToast({
                title: '登录成功',
              });
              setTimeout(() => {
                if (userType == 'changePwd'){
                  wx.navigateBack({
                    delta: 2
                  })
                }else{
                  wx.navigateBack({
                    delta: 1
                  })
                }
              },1200);
            }else{
              wx.showToast({
                title: res['data']['message'],
                icon: 'none'
              });
            }
          })
        } else {
          wx.showToast({
            title: '手机号码不正确',
            icon: "none"
          })
        }
      }else{
        wx.showToast({
          title: '请输入密码',
          icon: "none"
        })
      }
    }else{
      wx.showToast({
        title: '请输入手机号',
        icon: "none"
      })
    }
  },
  goToForget(){
    wx.navigateTo({
      url: '../forget/forget',
    })
  },
  register(){
    wx.navigateTo({
      url: '../register/register',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '会员登录',
    });
    if (options.type){
      userType = options.type;
    }
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
    // wx.switchTab({
    //   url: '../index/index',
    // })
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