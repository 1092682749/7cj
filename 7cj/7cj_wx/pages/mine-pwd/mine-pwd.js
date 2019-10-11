// pages/mine-pwd/mine-pwd.js
let cookie;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: '',
    code: '',
    password: '',
    codeText: '获取验证码',
  },
  codeInput(e){
    this.setData({
      code: e.detail.value
    })
  },
  pwdInput(e){
    this.setData({
      password: e.detail.value
    })
  },
  getCode() {
    let that = this.getCode;
    if (this.data.account) {
      if (/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.data.account)) {
        let params = {
          phone: this.data.account
        }
        console.log(params);
        getApp().globalData.api.getCode(params, (res) => {
          console.log(res);
          if (res['code'] == 0) {
            this.getCode = () => { };
            wx.showToast({
              title: '发送成功!'
            });
            let num = 60;
            let timer = setInterval(() => {
              num--;
              if (num <= 0) {
                this.setData({
                  codeText: '重新获取'
                });
                this.getCode = that;
                clearInterval(timer);
              } else {
                this.setData({
                  codeText: num
                })
              }
            }, 1000);
          } else {
            wx.showToast({
              title: res['message'],
              icon: 'none'
            })
          }
        })
      } else {
        wx.showToast({
          title: '请输入正确手机号',
          icon: 'none'
        })
      }
    } else {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options){
    wx.setNavigationBarTitle({
      title: '修改密码',
    });
    cookie = wx.getStorageSync('cookie');
    console.log(cookie);
    if (cookie) {
      let header = {
        'cookie': cookie
      }
      getApp().globalData.api.userCheck(header, (res) => {
        console.log(res);
        if (res['data']) {
          this.setData({
            account: res['data']['userPhone']
          })
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
  confirm() {
    if (this.data.code) {
      if (this.data.password) {
        let params = {
          phone: this.data.account,
          code: this.data.code
        };
        getApp().globalData.api.checkCode(params, (res) => {
          if (res['code'] == 0) {
            let userInfo = {
              password: this.data.password
            };
            let header = {
              'cookie': cookie
            };
            getApp().globalData.api.changePwd(header, userInfo, (res) => {
              console.log(res);
              if (res['data']['status'] == 200) {
                wx.showToast({
                  title: '修改成功',
                })
                setTimeout(() => {
                  wx.navigateTo({
                    url: '../login/login?type=changePwd',
                  })
                }, 1200);
              } else {
                wx.showToast({
                  title: res['data']['message'],
                  icon: 'none'
                })
              }
            })
          } else {
            wx.showToast({
              title: res['message'],
              icon: 'none'
            })
          }
        })
      } else {
        wx.showToast({
          title: '请输入密码',
          icon: 'none'
        })
      }
    } else {
      wx.showToast({
        title: '请输入验证码',
        icon: 'none'
      })
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