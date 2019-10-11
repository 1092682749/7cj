// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '',
    imgUrl: getApp().globalData.IMG_URL
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的',
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    let cookie = wx.getStorageSync('cookie');
    console.log(cookie);
    if (cookie) {
      let header = {
        'cookie': cookie
      }
      getApp().globalData.api.userData(header, (res) => {
        console.log(res);
        if (res['data']['data']) {
          if(res['data']['data']['list'].length == 0){
            this.setData({
              userInfo: ''
            })
          }else{
            this.setData({
              userInfo: res['data']['data']['list'][0]
            })
          }
        }else{
          wx.navigateTo({
            url: '../login/login',
          })
        }
      })
    } else {
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  goToInfo(){
    wx.navigateTo({
      url: '../mine-info/mine-info',
    })
  },
  goToArticle() {
    wx.navigateTo({
      url: '../mine-article/mine-article',
    })
  },
  goToPwd() {
    wx.navigateTo({
      url: '../mine-pwd/mine-pwd',
    })
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