//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    selectSlide: 100,
    imgUrls: [],
    dataList: [],
    pageStart: 0,
    noMoreData: false,
    isInfinite: false,
    url: '',
    navList: [],
    img_url: getApp().globalData.IMG_URL,
    tabbar: [
      { name: '最新' },
      { name: '政策' },  
      { name: '社区' },
      { name: '人物' },        
      { name: '项目' },
      { name: '快讯' },      
    ]
  },
  goToDetail(e){
    wx.navigateTo({
      url: '../article-detail/article-detail?id=' + e.currentTarget.dataset.item.aid,
    })
  },
  // 加载
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '7财经',
    });
    // 加载导航条
    app.globalData.api.getHomeNav((res) => {
      console.log(res);
      let list = [
        { cid: 100, name: '最新' },
      ];
      list = list.concat(res['data']);
      this.setData({
        navList: list
      })
    });
    //加载数据
    app.globalData.api.homeBanner("front/article/findAllArticleByDESC", '', (res) => {
      let noMoreData, isInfinite;
      if (res.length == 0){
        noMoreData = true;
      }else{
        noMoreData = false;
      }
      if(res.length < 5){
        isInfinite = false;
      }else{
        isInfinite = true;
      }
      for(let i = 0;i < res.length;i++){
        res[i]['showtime'] = res[i]['addtime'].split(' ')[0];
        if (res[i]['coverimg'].indexOf('http') == -1){
          res[i]['coverimg'] = this.data.img_url + res[i]['coverimg']
        }
      }
      this.setData({
        url: "front/article/findAllArticleByDESC",
        imgUrls: res,
        dataList: res,
        isInfinite: isInfinite,
        noMoreData: noMoreData
      })
    })
  },
  changeBody(e){
    console.log(e.currentTarget.dataset.index);
    let url = '';
    if (e.currentTarget.dataset.index == 100){
      // 最新
      url = "front/article/findAllArticleByDESC";      
    } else if (e.currentTarget.dataset.index == 7){
      // 快讯
      url = "front/findJs";      
    } else {
      url = "front/findArticleByCategory?category=" + e.currentTarget.dataset.index;
    }
    let params = {
      pageStart: 0
    };
    app.globalData.api.homeBanner(url, params, (res) => {
      let noMoreData, isInfinite;
      if (res.length == 0) {
        noMoreData = true;
      } else {
        noMoreData = false;
      }
      if (res.length < 5) {
        isInfinite = false;
      } else {
        isInfinite = true;
      }
      for (let i = 0; i < res.length; i++) {
        res[i]['showtime'] = res[i]['addtime'].split(' ')[0];
        if (res[i]['coverimg'].indexOf('http') == -1) {
          res[i]['coverimg'] = this.data.img_url + res[i]['coverimg']
        }
      }
      this.setData({
        dataList: res,
        url: url,
        pageStart: 0,
        isInfinite: isInfinite,
        noMoreData: noMoreData,
        selectSlide: e.currentTarget.dataset.index
      })
    })
  },
  /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
  onPullDownRefresh() {
    app.globalData.api.homeBanner(this.data.url, {pageStart: 0}, (res) => {
      let noMoreData, isInfinite;
      if (res.length == 0) {
        noMoreData = true;
      } else {
        noMoreData = false;
      }
      if (res.length < 5) {
        isInfinite = false;
      } else {
        isInfinite = true;
      }
      for (let i = 0; i < res.length; i++) {
        res[i]['showtime'] = res[i]['addtime'].split(' ')[0];
        if (res[i]['coverimg'].indexOf('http') == -1) {
          res[i]['coverimg'] = this.data.img_url + res[i]['coverimg']
        }
      }
      wx.stopPullDownRefresh();
      this.setData({
        dataList: res,
        pageStart: 0,
        imgUrl: res,
        isInfinite: isInfinite,
        noMoreData: noMoreData
      })
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom(){
    let page = this.data.pageStart;
    if (this.data.isInfinite){
      page++;
      app.globalData.api.homeBanner(this.data.url, { pageStart: page }, (res) => {
        let data = this.data.dataList;
        let noMoreData, isInfinite;
        if (res.length == 0) {
          noMoreData = true;
        } else {
          noMoreData = false;
        }
        if (res.length < 5) {
          isInfinite = false;
        } else {
          isInfinite = true;
        }
        for (let i = 0; i < res.length; i++) {
          res[i]['showtime'] = res[i]['addtime'].split(' ')[0];
          if (res[i]['coverimg'].indexOf('http') == -1) {
            res[i]['coverimg'] = this.data.img_url + res[i]['coverimg']
          }
        }
        wx.stopPullDownRefresh();
        this.setData({
          pageStart: page,
          isInfinite: isInfinite,
          dataList: data.concat(res),
          noMoreData: noMoreData
        })
      })
    }
  },
})
