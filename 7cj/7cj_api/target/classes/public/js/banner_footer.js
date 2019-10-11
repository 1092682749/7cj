function loginAfter() {

    banner_css = $("<link rel=\"stylesheet\" href=\"../../public/css/banner.css\">\n" +
        "    <link rel=\"stylesheet\" href=\"../../public/css/banner_small_mobile.css\" media=\"screen and (max-width:650px)\">")


    // banner_css = $("    <link rel=\"stylesheet\" href=\"../../public/css/banner.css\">")
    $("head").append(banner_css)

    banner_login_after =
        "<div class=\"topNavigation\">\n" +
        "    <a href='/'><img  class=\"logo\" src=\"../../public/images/logo1.jpg\"></a>\n" +
        "\n" +
        "    <ul class=\"loginAndRegister\">\n" +
        "        \n" +
        "\n" +
        "        <ul class=\"writebox\">\n" +
        "            <li class=\"writeLi\"><img src='../../public/images/写文章.png'>写文章</li>\n" +
        "        </ul>\n" +
        "\n" +
        "        <ul class=\"author-box\">\n" +
        "            <li id=\"ishover\"><img id='topNavigationImg' src=\"../../public/imgs/user.png\"></li>\n" +
        "            <li>\n" +
        "                <ul class=\"author\" hidden>\n" +
        "\n" +
        "                    <li class=\"li1\">个人中心</li>\n" +
        "                    <li class=\"li2\">我的文章</li>\n" +
        // "                    <li class=\"li3\">消息中心</li>\n" +
        "                    <li class=\"li4\">退出</li>\n" +
        "                </ul>\n" +
        "            </li>\n" +
        "        </ul>\n" +
        "\n" +
        "</div>"

    $("body").prepend(banner_login_after);




    $(".li4").click(function () {
        location.href = "/logout"
    })

    // $(".li3").click(function () {
    //     location.href = "/message"
    // })
    $(".li2").click(function () {
        location.href = "/personalArticle"
    })

    $(".li1").click(function () {
        location.href = "/personalCenter"
    })



    $(".writeLi").click(function () {
        location.href = "/article/writeArticle"
    })

    $(".author-box").hover(function(){
        $(".author").slideDown();
    },function(){
        $(".author").hide();
    });
    
    $(document).on('click','#ishover',function (event) {
        $(".author").slideDown();
        event.stopPropagation();
    })

    $(document).on('click touchstart touchmove','html',function (event) {
        $(".author").hide(500);
        // event.stopPropagation();
    })

    $(document).on('click touchstart','#li4',function (event) {

        location.href = "/logout"
        // $(".author").hide(500);
        // event.stopPropagation();
    })

    $(document).on('click touchstart','#li2',function (event) {

        location.href = "/personalArticle"

        // location.href = "/logout"
        // $(".author").hide(500);
        // event.stopPropagation();
    })

    // $(".author-box").on("touchstart",function (e) {
    //     $(e.target()).css("color","#FFF")
    // })

    $(".li4").on("touchstart",function () {
        location.href = "/logout"
    })

    $(".li2").on("touchstart",function () {
        location.href = "/personalArticle"
    })

    $(".li1").on("touchstart",function () {
        location.href = "/personalCenter"
    })

    $(document).on('click touchstart','#li1',function (event) {

        location.href = "/personalCenter"

        // location.href = "/logout"
        // $(".author").hide(500);
        // event.stopPropagation();
    })

}

function loginBefore() {

    banner_css = $("<link rel=\"stylesheet\" href=\"../../public/css/banner.css\">\n" +
        "    <link rel=\"stylesheet\" href=\"../../public/css/banner_small.css\" media=\"screen and (max-width:650px)\">")

    // banner_css = $("    <link rel=\"stylesheet\" href=\"../../public/css/banner.css\">")
    $("head").append(banner_css)

    banner = $("<div class=\"topNavigation\">\n" +
        "    <a href='/'><img class=\"logo\" src=\"../../public/images/logo1.jpg\"></a>\n" +
        "    <ul class=\"loginAndRegister\">\n" +
        "\n" +
        "<div class=\"topNavigation-registerorlogin\">\n" +
        "    <!--登陆连接-->\n" +
        "    <a href=\"/login\" class=\"transitionA\"><li><img class='userSvg' src='../../public/imgs/user.svg' alt=''> 登录</li></a>\n" +
        "\n" +
        "    <li>|</li>\n" +
        "\n" +
        "    <!--注册链接-->\n" +
        "    <a href=\"/regis\" class=\"transitionA\"><li>注册</li></a>\n" +
        "</div>\n" +
        "\n" +
        "\n" +
        "        <li class=\"writeLi\"><img src='../../public/images/写文章.png'>写文章</li>\n" +
        "    </ul>\n" +
        "</div>")


    $("body").prepend(banner);



    $(".writeLi").click(function () {
        location.href = "/article/writeArticle"
    })

}
function foot(){

    footerBigDiv = $("<div class='footerBigBox'></div>");
    footerHeadDiv = $("<div class='footerHeadDiv'></div>");
    footerMiddleDiv = $("<div class='footerMiddleDiv'></div>");
    footerFootDiv = $("<div class='footerFootDiv'></div>");

    footerMiddleLeftDiv = $("<div class='footerMiddleLeftDiv'></div>");
    footerMiddleRightDiv = $("<div class='footerMiddleRightDiv'></div>");

    middleLeftTopDiv = $("<div class='middleLeftTopDiv'></div>");
    middleLeftBottomDiv = $("<div class='middleLeftBottomDiv'><span>友情链接：</span></div>");

    headUl = $("<ul class='headUl'></ul>");

    var footerHeadTitle = [
            {
                name: '关于我们',
                href: ''
            },
            {
                name: '服务条款',
                href: ''
            },
            {
                name: '联系我们',
                href: ''
            },
            {
                name: '投稿须知',
                href: ''
            },{
                name: '投稿激励',
                href: ''
            },
            {
                name: '意见反馈',
                href: ''
            }
        ];
    for( var i = 0; i < footerHeadTitle.length; i++ ) {
        headUl.append($("<li><a href='"+ footerHeadTitle[i]['href'] +"'>" + footerHeadTitle[i]['name'] + "</a></li>"))
    }

    var footerMiddleTopImg = [
        {
            img: '../../public/imgs/1.png',
            href: 'http://www.news.one'
        },
        {
            img: '../../public/imgs/3.png',
            href: 'http://hkstv.com.cn/qkl/'
        },
        {
            img: '../../public/imgs/5.png',
            href: 'http://www.block360.pro'
        },
        {
            img: '../../public/imgs/7.png',
            href: 'http://www.xcj.com/'
        },
        {
            img: '../../public/imgs/9.png',
            href: 'http://www.bibaodao.com'
        },
        {
            img: '../../public/imgs/11.png',
            href: 'http://www.one.top'
        },
        {
            img: '../../public/imgs/13.jpg',
            href: 'http://www.qukuaiwang.com.cn'
        },

        {
            img: '../../public/imgs/2.png',
            href: 'http://www.liantuan.vip'
        },
        {
            img: '../../public/imgs/4.png',
            href: 'http://www.block360.pro'
        },
        {
            img: '../../public/imgs/6.png',
            href: 'https://www.bibr.com/'
        },
        {
            img: '../../public/imgs/8.png',
            href: 'https://www.vvbtc.com/'
        },
        {
            img: '../../public/imgs/10.png',
            href: 'http://Bituan.com'
        },
        {
            img: '../../public/imgs/12.png',
            href: 'http://www.hashcaijing.com/Index/index'
        },
        {
            img: '../../public/imgs/14.png',
            href: 'http://www.asbtc.com'
        },
        {
            img: '../../public/imgs/15.png',
            href: 'http://www.aicontractzn.org/'
        }
    ];

    for(var j = 0; j < footerMiddleTopImg.length; j++) {
        middleLeftTopDiv.append("<a href='"+ footerMiddleTopImg[j]['href'] + "' target='_blank'><img src='" + footerMiddleTopImg[j]['img'] +"'></a>")
    }

    var footerMiddleBottomSpan = [
        {
            name: '牛市财经',
            href: 'http://www.news.one'
        },
        {
            name: '香港卫视经济新闻网',
            href: 'http://hkstv.com.cn/qkl/'
        },
        {
            name: '布洛克科技',
            href: 'http://www.block360.pro'
        },
        {
            name: '新财经',
            href: 'http://www.xcj.com/'
        },
        {
            name: '币报道',
            href: 'http://www.bibaodao.com'
        },
        {
            name: 'ONETOP评级',
            href: 'http://www.one.top'
        },
        {
            name: '比特吴',
            href: 'http://www.qukuaiwang.com.cn'
        },
        {
            name: '链团财经',
            href: 'http://www.liantuan.vip'
        },
        {
            name: '布洛克',
            href: 'http://www.block360.pro'
        },
        {
            name: '币和',
            href: 'https://www.bibr.com/'
        },
        {
            name: 'VVBTC',
            href: 'https://www.vvbtc.com/'
        },
        {
            name: '币团',
            href: 'http://Bituan.com'
        },
        {
            name: '哈希头条',
            href: 'http://www.hashcaijing.com/Index/index'
        },
        {
            name: '爱尚比特',
            href: 'http://www.asbtc.com'
        },
        {
            name: 'AI.CONTRACT',
            href: 'http://www.aicontractzn.org/'
        }

    ];
    for(var j = 0; j < footerMiddleBottomSpan.length; j++) {
        middleLeftBottomDiv.append("<span><a href='" + footerMiddleBottomSpan[j]['href'] + "' target='_blank'>" + footerMiddleBottomSpan[j]['name'] +"</a></span>")
    }

    // footerFootDiv.append("<span>首页 | 快讯 | 首页 | 快讯 | 首页 | 快讯 | 首页 | 快讯</span>");
    // footerFootDiv.append("<span>Copyright © 2018  All Rights Reserved</span>");
    // footerFootDiv.append("<span>备案号</span>");
    // footer = $("  <img class='footer' src=\"../../public/images/footer.jpg\" >");
    // footerHeadDiv.append(headUl);


    footerMiddleLeftDiv.append(middleLeftTopDiv);
    footerMiddleLeftDiv.append(middleLeftBottomDiv);
    footerMiddleDiv.append(footerMiddleLeftDiv);
    // footerMiddleDiv.append(footerMiddleRightDiv);
    // footerBigDiv.append(footerHeadDiv);
    footerBigDiv.append(footerMiddleDiv);
    // footerBigDiv.append(footerFootDiv);


    // 让footer始终在底部
    if ($("body")[0].clientHeight > window.screen.height) {
    }else {
        footerBigDiv.css("margin-top", (window.screen.height - $("body")[0].clientHeight) + 101);
    }

    $("body").append(footerBigDiv);
    $("head").append("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, \n" +
        "minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes\" /> ");


    banner_css = $("<link rel=\"stylesheet\" href=\"../../public/css/banner.css\">\n" +
        "    <link rel=\"stylesheet\" href=\"../../public/css/banner_small.css\" media=\"screen and (max-width:650px)\">")

    // banner_css = $("    <link rel=\"stylesheet\" href=\"../../public/css/banner.css\">")
    $("head").append(banner_css)




}
$(function () {

    // banner_css = $("<link rel=\"stylesheet\" href=\"../../public/css/banner.css\">\n" +
    //     "    <link rel=\"stylesheet\" href=\"../../public/css/banner_small.css\" media=\"screen and (max-width:650px)\">")
    //
    // // banner_css = $("    <link rel=\"stylesheet\" href=\"../../public/css/banner.css\">")
    // $("head").append(banner_css)

    $.ajax({
        type: "GET",
        url: "/islogin",
        success: function (result) {
            if (result.islogin === "login") {
                $(".topNavigation").remove();
                loginAfter();
                if (result.header != null){
                    $("#topNavigationImg").attr("src",result.header)
                }
                foot()
            }
            else {
                $(".topNavigation").remove();
                loginBefore();
                foot()
            }
        },
        error: function () {
            console.log("../../public/images/logo1.jpg")
            loginBefore();
            foot()
        }
    })

})