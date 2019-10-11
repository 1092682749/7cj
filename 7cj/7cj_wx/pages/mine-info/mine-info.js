// pages/mine-info/mine-info.js
let cookie;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headimg: '',
    nickname: '',
    name: '',
    wallet: '',
    work: '',
    county: '',
    address: '',
    imgUrl: getApp().globalData.IMG_URL
  },
  selectImg(){
    wx.chooseImage({
      count:1,
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success: (res) => {
        let tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        this.setData({
          headimg: tempFilePaths[0]
        })
      },
    })
  },
  nicknameInput(e){
    this.setData({
      nickname: e.detail.value
    })
  },
  nameInput(e){
    this.setData({
      name: e.detail.value
    })
  },
  walletInput(e) {
    this.setData({
      wallet: e.detail.value
    })
  },
  workInput(e) {
    this.setData({
      work: e.detail.value
    })
  },
  countyInput(e) {
    this.setData({
      county: e.detail.value
    })
  },
  addressInput(e) {
    this.setData({
      address: e.detail.value
    })
  },
  confirm(){
    if (this.data.headimg) {
      if (this.data.nickname) {
        if (this.data.name) {
          if (this.data.wallet) {
            if (this.data.work) {
              if (this.data.county) {
                if (this.data.address) {
                  let params = {
                    name: this.data.name,
                    nickname: this.data.nickname,
                    trade: this.data.work,
                    country: this.data.county,
                    address: this.data.address,
                    mytoken: this.data.wallet,
                  };
                  console.log(params);
                  getApp().globalData.api.changeUserInfo({ 'cookie': cookie}, params, (res) => {
                    console.log(res);
                    if (this.data.headimg.indexOf("uploads") == -1){
                      wx.showLoading({
                        title: '加载中...',
                      });
                      wx.uploadFile({
                        url: getApp().globalData.ROOT_URL + 'userAndUserExtend/upload/picture',
                        filePath: this.data.headimg,
                        name: 'file',
                        header: { 'cookie': cookie, "Content-Type": "multipart/form-data"},
                        success: (res) => {
                          wx.hideLoading();
                          let data = res.data
                          console.log(data);
                          wx.showToast({
                            title: '修改成功',
                          });
                          setTimeout(() => {
                            wx.navigateBack({
                              delta: 1
                            })
                          }, 1200)
                        }
                      })
                    }else{
                      wx.showToast({
                        title: '修改成功',
                      });
                      setTimeout(() => {
                        wx.navigateBack({
                          delta: 1
                        })
                      },1200)
                    }
                  });
                } else {
                  wx.showToast({
                    title: '请填写居住地',
                    icon: 'none'
                  })
                }
              } else {
                wx.showToast({
                  title: '请填写国家',
                  icon: 'none'
                })
              }
            } else {
              wx.showToast({
                title: '请填写所在行业',
                icon: 'none'
              })
            }
          } else {
            wx.showToast({
              title: '请填写钱包地址',
              icon: 'none'
            })
          }
        } else {
          wx.showToast({
            title: '请填写姓名',
            icon: 'none'
          })
        }
      } else {
        wx.showToast({
          title: '请填写昵称',
          icon: 'none'
        })
      }
    } else {
      wx.showToast({
        title: '请选择上传头像',
        icon: 'none'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人资料',
    });
    cookie = wx.getStorageSync('cookie');
    getApp().globalData.api.userData({ 'cookie': cookie}, (res) => {
      console.log(res);
      if (res['data']['data']) {
        if (res['data']['data']['list'].length == 0) {
          
        } else {
          let data = res['data']['data']['list'][0];
          this.setData({
            nickname: data.nickname,
            name: data.name,
            wallet: data.mytoken,
            work: data.trade,
            county: data.country,
            address: data.address,
            headimg: this.data.imgUrl + data.info
          })
        }
      }
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