(function (_window) {
    //设置热点以及轮播模糊事件
    var addBox = document.getElementById("addBox");
    var figure = document.getElementById("figure");
    var project = document.getElementById("project");
    var community = document.getElementById("community");
    // var meeting = document.getElementById("meeting");
    var policy = document.getElementById("policy");
    var content = document.getElementsByClassName("content")[0];
    var blurBox = $(".blurBox");
    var firstImgSrc = $('.swiper-slide img')[0].getAttribute("src");
    var blurTitle = document.getElementById("blurTitle");
    var blurContent = document.getElementById("blurContent");
    var bulrImg = document.getElementsByClassName("blurImg")[0];
    var slideUlLiArr = document.querySelectorAll(".slideUl button");
    var loadBox = document.getElementsByClassName("loadBox")[0];
    var bannerArr = document.getElementsByClassName("banner");
    var bannerInfo;
    var blurTime = document.getElementById("blurTime");
    var blurReadNumber = document.getElementById("blurReadNumber");
    var blurA = document.getElementById("blurA");
    var isSelected = false;
    var pageStart = 0;//请求的页数
    var orderBy = "time";//排序规则
    var loadCount = 0;//页面全局加载次数
    var hotList = document.getElementsByClassName("hotUl");
    var bannerAs = document.getElementsByClassName("bannerA");

    _window.onload = function (ev) {
        var newsList = requestNews(orderBy);
        content.style.opacity = "1";
        if (loadCount == 0){
            for (var k = 0; k < bannerArr.length; k++){
                bannerInfo = newsList;
                loadCount++;
            }

        }
        pageStart = 0;
        requestHotNews();
    };

    var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical',
        loop: true,
        autoplay:true,
        // 如果需要分页器
        pagination: {
            clickable :true,
            el: '.swiper-pagination',
            // bulletElement:'li',
            // bulletClass:"index-bullet",
            // paginationType : 'custom',
            // bulletActiveClass: 'index-bullet-active',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },

    });

    mySwiper.on("slideChangeTransitionStart",function () {
        var img = document.querySelectorAll(".swiper-slide-active img")[0];
        var imgUrl = img.getAttribute("src");
        blurTitle.innerHTML = ellipsis(bannerInfo[(mySwiper.realIndex)].atitle,300);
        blurContent.innerHTML = bannerInfo[(mySwiper.realIndex)].brief;
        blurTime.innerHTML = bannerInfo[(mySwiper.realIndex)].addtime;
        blurReadNumber.innerHTML = "浏览量" + bannerInfo[(mySwiper.realIndex)].readnumber;
        bulrImg.setAttribute("src",imgUrl);
        blurA.setAttribute("href","/readArticle?id="+bannerInfo[mySwiper.realIndex].aid);
    });

    /***
     *
     * @param orderBy 新闻的排序方式
     * @returns {*} 返回一个新闻list
     */
    function requestNews(orderBy) {
        var newsList;
        var URL;
        if (orderBy == "time"){
            URL = "/front/article/findAllArticleByDESC?";
        } else if (orderBy == "hot"){
            URL = "/front/article/findArticleByHot?";
        }else if (orderBy == "project") {
            URL = "/front/findArticleByCategory?category=5&"
        }else if (orderBy == "community") {
            URL = "/front/findArticleByCategory?category=4&"
        }else if (orderBy == "meeting") {
            URL = "/front/findArticleByCategory?category=3&"
        }else if (orderBy == "policy") {
            URL = "/front/findArticleByCategory?category=2&"
        }else if (orderBy == "figure"){
            URL = "/front/findArticleByCategory?category=6&"
        }else if (orderBy == "js") {
            URL = "/front/findJs?"
        }
           $.ajax({
               url:URL+"pageStart=" + pageStart,
               type:"get",
               dateType:"json",
               async:false,
               success:function (map) {
                   newsList = map;
                   // pageStart++;
                   //
               },
           });
        return newsList;
    }

//增加新闻newsImg,newsDetailsLink,title,content,time,number,headPic
    function addNews(e) {
        var allNews = document.getElementById("allNews");
        var loadBox = document.getElementsByClassName("loadBox")[0];
        var contentBox = document.createElement('div');
        contentBox.setAttribute("class","contentBox");
        var span = document.createElement('span');//略缩图span
        var img = document.createElement('img');
        img.setAttribute("class","newsPic");
        span.appendChild(img);
        var contentBrief = document.createElement('span');
        contentBrief.setAttribute("class","contentBrief");
        var a = document.createElement('a');//标题a标签
        a.style.color = "black";
        var h2Title = document.createElement('h2');//标题标签
        a.appendChild(h2Title);
        var contentP = document.createElement('p');
        var smallSpan = document.createElement('span');
        smallSpan.setAttribute("class","smallSpan");
        var contentUserSpan = document.createElement('span');
        contentUserSpan.setAttribute("class","contentUserSpan");
        // var contentHeadPic = document.createElement('img');
        // contentHeadPic.setAttribute("class","contentHeadPic");
        var p = document.createElement('p');//name的p标签
        var timeSpan = document.createElement('span');
        var pageViewSpan = document.createElement('span');
        var commentSpan = document.createElement('span');
        contentBox.onclick = function (ev) {
            a.click();
        };
        contentBrief.appendChild(a);
        contentBrief.appendChild(contentP);
        contentBrief.appendChild(smallSpan);
        smallSpan.appendChild(contentUserSpan);
        smallSpan.appendChild(timeSpan);
        smallSpan.appendChild(pageViewSpan);
        // smallSpan.appendChild(commentSpan);
        // contentUserSpan.appendChild(contentHeadPic);
        contentUserSpan.appendChild(p);
        contentBox.appendChild(span);
        contentBox.appendChild(contentBrief);
        allNews.insertBefore(contentBox,loadBox);
        //设置新闻图片

        img.setAttribute("src",e.coverimg);
        //点击跳转到详情
        a.setAttribute("href","/readArticle?id="+e.aid);
        //标题
        h2Title.innerHTML = e.atitle;
        //内容简要
        if (document.body.clientWidth > 650){
            contentP.innerHTML = e.brief;
        }
        //用户名字
        // var user = findUserByAId(e.uid);
        // var user = findUserByAId(e.uid);
        if (document.body.clientWidth > 650) {
            if (testphone(e.username)){
                p.innerHTML = e.username.substring(0,3) + "***" + e.username.substring(8,11);
            } else {
                p.innerHTML = ellipsis("来源:"+e.source,15);
            }
        }else {
            if (testphone(e.username)){
                p.innerHTML = e.username.substring(0,3) + "***" + e.username.substring(8,11);
            } else {
                p.innerHTML = ellipsis(e.source,15);
            }
        }
        //发表时间
        if (document.body.clientWidth > 650)
        {
            timeSpan.innerHTML = e.addtime;
        }else {
            timeSpan.innerHTML = e.addtime.substring(0,10);
        }

        //浏览次数
        pageViewSpan.innerHTML = e.readnumber + "次";
        //评价按钮
        commentSpan.innerHTML = "";
        //头像
        // contentHeadPic.setAttribute("src",e.header);
    }
    function findUserByAId(id) {
        var user;
        $.ajax({
            url:"/front/article/findUserByArticleId?id="+id,
            type:"get",
            dateType:"json",
            async:false,
            success:function (userInfo) {
                user = userInfo;
            }
        });
        return user;
    }
//设置轮播文字长度
    function ellipsis(str,length) {

        if (str.length > length) {
            str = str.substring(0,length) + "...";
        }
        return str;
    }


//改变颜色
    function changeColor(_this) {
        for (var j = 0; j < slideUlLiArr.length; j++) {
            slideUlLiArr[j].setAttribute("style","border:none;");

        }
        _this.setAttribute("style","border-bottom:2px solid #ff9d11;" +
            "color:#ff9d11;");
    }


    function addNewsList(list){
        for (var i = 0; i < list.length; i++){
            addNews(list[i]);
        }
    }
    // byHot.onclick = function (ev) {
    //     changeColor(this);
    //     hiddenJs();
    //     hiddenNews();
    //     isFalse();
    //     this.isSeleced = true;
    //     orderBy = "js";
    //     var newsList = requestNews(orderBy);
    //     addJsList(newsList);
    // };
    //根据项目查询
    // project.onclick = function (ev) {
    //     changeColor(this);
    //     hiddenNews();
    //     hiddenJs();
    //     isFalse();
    //     this.isSeleced = true;
    //     orderBy = "project";
    //     var newsList = requestNews(orderBy);
    //     addNewsList(newsList);
    // };
    //根据community查询
    // community.onclick = function (ev) {
    //     changeColor(this);
    //     hiddenNews();
    //     hiddenJs();
    //     isFalse();
    //     this.isSeleced = true;
    //     orderBy = "community";
    //     var newsList = requestNews(orderBy);
    //     addNewsList(newsList);
    //
    // };
    //根据meeting查询
    // meeting.onclick = function (ev) {
    //     hiddenNews();
    //     hiddenJs();
    //     changeColor(this);
    //     isFalse();
    //     this.isSeleced = true;
    //     orderBy = "meeting";
    //     var newsList = requestNews(orderBy);
    //     addNewsList(newsList);
    //
    // };
    //根据policy查询
    // policy.onclick = function (ev) {
    //     hiddenNews();
    //     hiddenJs();
    //     changeColor(this);
    //     isFalse();
    //     this.isSeleced = true;
    //     orderBy = "policy";
    //     var newsList = requestNews(orderBy);
    //     addNewsList(newsList);
    // };
    //根据figure查询
    // figure.onclick = function (ev) {
    //     hiddenNews();
    //     hiddenJs();
    //     changeColor(this);
    //     isFalse();
    //     this.isSeleced = true;
    //     orderBy = "figure";
    //     var newsList = requestNews(orderBy);
    //     addNewsList(newsList);
    // };

    //设置颜色改变
    var modules = document.getElementsByClassName("modules");
    for (var i = 0; i < modules.length; i++){
        modules[i].onmouseenter = function (e) {
            changeColor(this);
        };
        modules[i].onmouseleave = function (e) {
            recoverColor(this);
        };
    }
    //恢复颜色
    function recoverColor(){
        var modules = document.getElementsByClassName("modules");
        for (var i = 0; i < modules.length; i++){
            if (modules[i].isSeleced){
                modules[i].setAttribute("style","border-bottom:2px solid #ff9d11;" +
                    "color:#ff9d11;");
            } else {
                modules[i].setAttribute("style","border:0;");
            }
        }
    }
//设置热点文章
    function requestHotNews() {
        var hotImgs = document.querySelectorAll(".hotUl img");
        var hotAs = document.querySelectorAll(".hotUl a");
        var hotNewsList = requestNews("hot");
        for (var i = 0; i < hotImgs.length; i++){
            hotImgs[i].setAttribute("src",hotNewsList[i%hotImgs.length].coverimg);
            hotAs[i].setAttribute("href","/readArticle?id=" + hotNewsList[i%hotImgs.length].aid);
            hotAs[i].innerHTML = "<p>" + hotNewsList[i%hotImgs.length].brief + "<p>";
        }
    }

    //检查手机号码
    function testphone(num){

        // console.log("绑定成功")
        if (num.length == 11 && (checkPhone(num) == 1)){
            return true;
        }else {
            return false;
        }
        // else if ($("#phone").val().length > 11){
        //     layer.msg("请输入正确的手机号码!");
        // }
    }

    function checkPhone(num){
        var filter = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if (filter.test(num)) {
            return 1;
        }
    }
    function addJsList(list) {
        for (var i = 0; i < list.length; i++){
            addJs(list[i]);
        }
    }

    function addJs(list) {
        // console.log(list);
        // console.log(orderBy);
        var js = "<div class=\"jsBox\">\n" +
            "        <div class=\"grade\"></div>\n" +
            "        <div class=\"time\">"+list.addtime.substring(11,16)+"</div>\n" +
            "        <div class=\"intro\">\n" +
            "            <div class=\"contentJs\">\n" +
            "                <a target=\'_self\' class=\"livesb\" href=\"/front/toReadFlash?id="+list.aid+"\">"+list.atitle+"</a>\n" +
            "                <a target=\'_self\' class=\"livesbx\"  href=\"/front/toReadFlash?id="+list.aid+"\">"+list.brief+"</a><br/>\n" +
            "            </div>\n" +
            "            <div class=\"font\">\n" +
            "                <ul class=\"fontUl\">\n" +
            "                    <li onclick=\"up(this,"+list.udid+")\"> <img class='upImg' src=\"../../public/imgs/up.svg\"> 利好<i>"+list.up+"</i></li>\n" +
            "                    <li onclick=\"down(this,"+list.udid+")\"><img class='downImg' src=\"../../public/imgs/down.svg\"> 利空 <i>"+list.down+"</i></li>\n" +
            "                    <li class=\'shareLi\' onclick=\"share(this,"+list.aid+")\"> <img  src=\"../../public/imgs/share.svg\"> 分享"+"<div class=\"bdsharebuttonbox\"><a href=\"#\" class=\"bds_more\" data-cmd=\"more\"></a><a href=\"#\" class=\"bds_qzone\" data-cmd=\"qzone\" title=\"分享到QQ空间\"></a><a href=\"#\" class=\"bds_tsina\" data-cmd=\"tsina\" title=\"分享到新浪微博\"></a><a href=\"#\" class=\"bds_tqq\" data-cmd=\"tqq\" title=\"分享到腾讯微博\"></a><a href=\"#\" class=\"bds_renren\" data-cmd=\"renren\" title=\"分享到人人网\"></a><a href=\"#\" class=\"bds_weixin\" data-cmd=\"weixin\" title=\"分享到微信\"></a></div>"+
            "  <script>" +
            " window._bd_share_config={\"common\":{\"bdSnsKey\":{},\n" +
            "            \"bdText\":\"来自7财经的分享\",\n" +
            "            \"bdMini\":\"2\",\n" +
            "            \"bdMiniList\":false,\n" +
            "            \"bdPic\":\"\",\n" +
            "            \"bdStyle\":\"0\",\n" +
            "            \"bdSize\":\"16\"},\n" +
            "        \"share\":{},\n" +
            "        \"image\":{\"viewList\":[\"qzone\",\"tsina\",\"tqq\",\"renren\",\"weixin\"],\"viewText\":\"分享到：\",\"viewSize\":\"16\"},\n" +
            "        \"selectShare\":{\"bdContainerClass\":null,\"bdSelectMiniList\":[\"qzone\",\"tsina\",\"tqq\",\"renren\",\"weixin\"]}};\n" +
            "    with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];window._bd_share_main.init();</script>";+"</li>\n" +
            "                </ul>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>";
        $(".loadBox").before(js);
    }
    function hiddenJs(){
        var jsBoxs = document.getElementsByClassName("jsBox");
        pageStart = 0;
        // console.log(jsBoxs)
        if(jsBoxs == ""||jsBoxs == null || jsBoxs.length == 0){
            return;
        }
        for (var i = 0; i < jsBoxs.length; i++){
            jsBoxs[i].style.display = "none";
        }
    }
})(window);
