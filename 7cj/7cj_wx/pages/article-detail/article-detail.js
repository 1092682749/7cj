// pages/article-detail/article-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData: {},
    userData: {},
    imgUrl: getApp().globalData.IMG_URL
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '文章详情',
    });
    getApp().globalData.api.articleDetail({ id: options.id}, (res) => {
      console.log(res);
      res.article.acontent = res.article.acontent.replace(/\<img/gi, '<img class="rich-img" ');
      res.article.acontent = getApp().globalData.wxParse.strDiscode(res.article.acontent);
      this.setData({
        detailData: res.article,
        userData: res.user
      })
    })
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