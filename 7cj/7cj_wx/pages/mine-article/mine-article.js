// pages/mine-article/mine-article.js
let cookie;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stateData: ["全部", "待审核", "已发布", "未通过"],
    selectIndex: 0,
    pageStart: 0,
    contentList: [],
    url: '',
    isInfinite: false,
    noMore: false
  },
  goToDetail(e){
    wx.navigateTo({
      url: '../article-detail/article-detail?id=' + e.currentTarget.dataset.id,
    })
  },
  changeState(i){
    let url;
    switch (Number(i.currentTarget.dataset.index)){
      case 0:
        url = "front/article/myAllArticle";
        break;
      case 1:
        url = "front/article/myArticleChecking";
        break;
      case 2:
        url = "front/article/myArticleRelease";
        break;
      case 3:
        url = "front/article/myArticleNotPass";
        break;
    };
    getApp().globalData.api.articleList(url, { 'cookie': cookie }, {}, (res) => {
      console.log(res);
      let noMore, isInfinite;
      if (res['data'] && res['data'].length >= 5) {
        isInfinite = true;
        noMore = false;
      } else {
        noMore = true;
        isInfinite = false;        
      }
      this.setData({
        pageStart: 0,
        url: url,
        contentList: res['data'],
        noMore: noMore,
        isInfinite: isInfinite,
        selectIndex: i.currentTarget.dataset.index
      });
    });
  },
  loadMore(){
    let page = this.data.pageStart;
    if (this.data.isInfinite) {
      page++;
      getApp().globalData.api.articleList(this.data.url, { 'cookie': cookie }, { pageStart: page }, (res) => {
        console.log(res);
        let data = this.data.contentList;
        let noMore, isInfinite;
        if (res['data'] && res['data'].length >= 5) {
          noMore = false;
          isInfinite = true;
        } else {
          noMore = true;
          isInfinite = false;
        }
        this.setData({
          pageStart: page,
          isInfinite: isInfinite,
          contentList: data.concat(res['data']),
          noMore: noMore
        });
      });
    }else{
      wx.showToast({
        title: '暂无更多',
        icon: 'none'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options){
    wx.setNavigationBarTitle({
      title: '我的文章',
    });
    cookie = wx.getStorageSync('cookie');
    getApp().globalData.api.articleList("front/article/myAllArticle", { 'cookie':cookie},{}, (res) => {
      console.log(res);
      let noMore, isInfinite;
      if(res['data'] && res['data'].length >= 5){
        noMore = false;
        isInfinite = true;
      }else{
        noMore = true;
        isInfinite = false;
      }
      this.setData({
        pageStart: 0,
        url: 'front/article/myAllArticle',
        isInfinite: isInfinite,
        contentList: res['data'],
        noMore: noMore
      });
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
  onPullDownRefresh() {
    getApp().globalData.api.articleList(this.data.url, { 'cookie': cookie }, {}, (res) => {
      console.log(res);
      wx.stopPullDownRefresh();
      let noMore, isInfinite;
      if (res['data'] && res['data'].length >= 5) {
        noMore = false;
        isInfinite = true;
      } else {
        noMore = true;
        isInfinite = false;
      }
      this.setData({
        pageStart: 0,
        isInfinite: isInfinite,
        contentList: res['data'],
        noMore: noMore
      });
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})