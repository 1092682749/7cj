const ROOT_URL = "https://7cj.knighteam.com/";

// 获取首页导航条
let getHomeNav = (success) => {
  _http({
    url: 'category/getAllCategory',
    data: {},
    success: (res) => {
      success(res);
    }
  })
}

// 修改个人信息
let changeUserInfo = (header, params, success) => {
  _http({
    url: 'user/extend/update',
    method: "POST",
    header: header,
    data: params,
    success: (res) => {
      success(res);
    }
  })
}

// 我的文章列表
let articleList = (url, header, params, success) => {
  _http({
    url: url,
    header: header,
    data: params,
    success: (res) => {
      success(res);
    }
  })
}

// 修改密码
let changePwd = (header, params , success) => {
  _http({
    url: 'sys/ajaxAlterpassMoble',
    method: "POST",
    header: header,
    data: params,
    success: (res) => {
      success(res);
    }
  })
}

// 获取用户信息
let userData = (header, success) => {
  _http({
    url: 'user/extend/userextend',
    header: header,
    data: {},
    success: (res) => {
      success(res);
    }
  })
}

// 验证登录
let userCheck = (header, success) => {
  _http({
    url: 'getUserIdPhoneForAlter',
    header: header,
    data: {},
    success: (res) => {
      success(res);
    }
  })
}

// 登录
let userLogin = (params, success) => {
  _http({
    url: 'sys/ajaxLoginMoble',
    method: 'POST',
    data: params,
    success: (res) => {
      success(res);
    }
  })
}

// 忘记密码
let userForget = (params, success) => {
  _http({
    url: 'sys/ajaxForgotpassMoble',
    method: 'POST',
    data: params,
    success: (res) => {
      success(res.data);
    }
  })
}

// 检查code 
let checkCode = (params, success) => {
  _http({
    url: 'sys/sms/checkSMS',
    data: params,
    success: (res) => {
      success(res.data);
    }
  })
}

// 用户注册
let userRegister = (params, success) => {
  _http({
    url: 'sys/ajaxRegisterMoble',
    method: 'POST',
    data: params,
    success: (res) => {
      success(res.data);
    }
  })
}

// 发送验证码
let getCode = (params, success) => {
  _http({
    url: 'sys/sms/sendSMS',
    data: params,
    success: (res) => {
      success(res.data);
    }
  })
}

// 首页轮播图和数据
let homeBanner = (url, params, success, fail) => {
  _http({
    url: url,
    data: params,
    success: (res) => {
      success(res.data);
    }
  })
}

// 文章详情
let articleDetail = (params, success) => {
  _http({
    url: "front/article/getAllArticleById",
    data: params,
    success: (res) => {
      success(res.data);
    }
  })
}

// 文章作者
let articleUserDetail = (params , success) => {
  _http({
    url: "front/article/getAllArticleById",
    data: params,
    success: (res) => {
      success(res.data);
    }
  })
}

// 网络请求自动增加状态提示框
let _http = (r) => {
  wx.showLoading({
    title: '加载中...'
  });
  wx.request({
    url: ROOT_URL + r.url,
    method: r.method ? r.method : "GET",
    data: r.data,
    header: r.header ? r.header : {},
    success: (res) => {
      wx.hideLoading();
      if (r.success && res['data']){
        r.success(res);
      }else{
        // wx.showToast({
        //   title: res['data']['msg'],
        //   icon: 'none'
        // })
        wx.showToast({
          title: '系统繁忙，请稍后重试',
          icon: "none"
        });
      }
    },
    fail: (res) => {
      wx.hideLoading();
      if (r.fail) {
        r.fail(res);
      } else {
        wx.showToast({
          title: '系统繁忙，请稍后重试',
          icon: "none"
        });
      }
    },
    complete: (res) => {
      if (r.complete) {
        r.complete(res);
      }
    }
  })
}


module.exports = {
  homeBanner: homeBanner,
  getCode: getCode,
  userRegister: userRegister,
  checkCode: checkCode,
  userForget: userForget,
  userLogin: userLogin,
  articleDetail: articleDetail,
  articleUserDetail: articleUserDetail,
  userCheck: userCheck,
  userData: userData,
  changePwd: changePwd,
  articleList: articleList,
  changeUserInfo: changeUserInfo,
  getHomeNav: getHomeNav
}