(function (){
    var time = $(".time")[0];
    var flashTitle = $("#title")[0];
    var flashDetail = $("#flashDetail")[0];
    var good = $("#good")[0];
    var bearish = $("#bearish")[0];
    var upClick = $("#up")[0];
    var downClick = $("#down")[0];
    var pageStart = 0;
    var show_day = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
    var date = new Date();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var day = date.getDay();
    var weekToday = show_day[day];
    // var hours = date.getHours();
    // var minutes = date.getMinutes();
    var  article = document.getElementsByClassName('articleContent')[0];
    if(strDate >= 1 && strDate <= 9){
        strDate = "0" + strDate;
    }
    // if(hours >= 1 && hours <= 9){
    //     hours = "0" + hours;
    // }
    // if(minutes >= 0 && minutes <= 9){
    //     minutes = "0" + minutes;
    // }
    // var time = hours + ":" + minutes;
    console.log(time);
    console.log(weekToday);
    console.log(month);
    console.log(strDate);
    $(".month")[0].innerText = month + "月";
    $(".day")[0].innerText = strDate + "日";
    $(".week")[0].innerText = weekToday;
    // $(".time")[0].innerText = time;
    requestHotNews();

    $.ajax({
        url:"/front/readFlash",
        type:"get",
        dataType:"json",
        success:function (data) {
            console.log(data);
            putData(data);
            article.style.opacity = "1";
        },
        error:function (e) {
            console.log(e);
        }
    })

    function putData(map) {

        //设置快讯标题
        flashTitle.innerText = map[0].atitle;
        //设置快讯详情
        flashDetail.innerHTML = map[0].acontent;
        //设置时间
        time.innerText = map[0].addtime;
        // //设置利好
        // good.innerText = "利好" + map[0].up;
        // //设置利空
        // bearish.innerText = "利空" + map[0].down;

        // var articleUrl = window.location + "/front/toReadFlash?id=" + map[0].aid;

        var comment ="<div class=\"comment\">\n" +
            "                    <ul>\n" +
            "                        <li id=\"up\" onclick=\"up(this,"+map[0].udid+")\"><img class=\"upImg\" src=\"../../public/images/上升.png\" alt=\"\">利好<i id=\"good\"> "+map[0].up+"</i></li>\n" +
            "                        <li id=\"down\" onclick='down(this,"+map[0].udid+")'><img class=\"downImg\" src=\"../../public/images/下降.png\" alt=\"\">利空<i id=\"bearish\">"+map[0].down+"</i></li>\n" +
            "                        <li class=\"share\" onclick=\"share(this,"+map[0].aid+")\"> <img  src=\"../../public/imgs/share.svg\"> 分享"+

            "<div class=\"social-share share-component \">\n" +
            "    <!--<a class=\"social-share-icon icon-qzone\" href=\"\"></a>-->\n" +
            "<a class=\"social-share-icon icon-qq\" href=\"#\" onclick=\"shareToQq('7cj的分享','" +window.location +"' ,'"+ map[0].atitle +"');return false; \"></a>" +
            // "    <a class=\"social-share-icon icon-qq\" href=\"#\" onclick='shareToQq(\"7cj\",\" + articleUrl + \",\"7cj\")'></a>\n" +
            "    <a class=\"social-share-icon icon-weibo\" href=\"#\"\n" +
            "       onclick=\"shareToXl('"+map[0].atitle+" ','" + window.location +"' ,'"+ window.location +"../../public/images/logo1.jpg');return false;\"></a>\n" +
            "    <a class=\"social-share-icon icon-wechat\" href=\"#\" onclick =\"createQrCode('"+window.location+"');return false;\"></a>\n" +
            // "<div id='qrcode'></div>" +
            "    <!--<div id=\"shareToWx\"></div>-->\n" +
            "    <!--<div id=\"shareToWx\" style=\"width:100px; height:100px; margin-top:15px;\"></div>-->\n" +
            // "    <div id=\"qrcode\" ></div>\n" +
            "</div>" +
            " <script>" +
            "    function shareToXl(title, url, picurl) {\n" +
            "        var sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + url + '&content=utf-8&sourceUrl=' + url;//+'&pic='+picurl;\n" +
            "        window.open(sharesinastring, 'newwindow');\n" +
            "    }\n" +
            "\n" +
            "    function shareToQq(title, url, desc) {\n" +
            "        // var shareString = 'http://connect.qq.com/widget/shareqq/index.html?url=你的分享网址&sharesource=qzone&title=你的分享标题&pics=你的分享图片地址&summary=你的分享描述&desc=你的分享简述';\n" +
            "        var shareString = \"http://connect.qq.com/widget/shareqq/index.html?url=\" + url + \"&sharesource=qzone&title=\" + title + \"&pics=你的分享图片地址&summary=来自7财经的分享&desc=\" + desc;\n" +
            "        window.open(shareString, 'newwindow');\n" +
            "    }" +
            "    function createQrCode(articleUrl){\n" +
            "        \n" +
            // "        qrcode.clear();" +
            // "          qrcode.makeCode(articleUrl);" +
            "        layer.open({\n" +
            "            type: 1,\n" +
            "title: '扫描二维码分享到微信'," +
            "            skin: 'layui-layer-demo', //样式类名\n" +
            "            closeBtn: 0, //不显示关闭按钮\n" +
            "            anim: 2,\n" +
            "            shadeClose: true, //开启遮罩关闭\n" +
            "            content: \"<div id='qrcode'></div>\"\n" +
            "        });\n" +
            "        qrcode = new QRCode(document.getElementById(\"qrcode\"),{\n" +
            "            text: articleUrl,\n" +
            "            width: 128,\n" +
            "            height: 128,\n" +
            "            colorDark : \"#FF9D11\",\n" +
            "            colorLight : \"#FFF\",\n" +
            "            correctLevel : QRCode.CorrectLevel.H\n" +
            "        });  // 设置要生成二维码的链接\n" +
            "    }" +

            "</script>"




        "</li>\n" +
            "                    </ul>\n" +
            "                </div>"
        $(".fl_main_content").after(comment);
    }

    function share(_this,id) {
        if (document.body.clientWidth < 650) {
            var loaderStr = "<div id=\"loader\"></div>";
            $("body").after(loaderStr);
            var imgBox = document.createElement("div");
            imgBox.setAttribute("class","shareImgBox");
            var closeImg = document.createElement("img");
            closeImg.setAttribute("class","closeImg");
            closeImg.setAttribute("src","../../public/imgs/imgClose.png");
            var shareImg = document.createElement("img");
            shareImg.setAttribute("src","/front/getImage?id="+id);
            shareImg.setAttribute("class","shareImg");
            var body = document.getElementsByTagName('body')[0];
            imgBox.appendChild(shareImg);
            imgBox.appendChild(closeImg);
            $('#loader').shCircleLoader({
                color:"#ff9d11",
                dots: 22,
                dotsRadius: 3
            });
            var point = document.querySelectorAll(".shcl > div");
            for (var i = 0; i < point.length; i++){
                point[i].style.boxShadow = "none"
            }
            setTimeout(function () {
                $("#loader").css("display","none");
                body.appendChild(imgBox);
            },1500);
            closeImg.onclick = function (ev) {
                imgBox.style.display = "none";
            }
        }else {

        }
    }


    // $("#up").click(up(this,));
    // $("#down").click(down(this,udid));
    // var up1 = document.getElementById('up');
    // var down1 = document.getElementById('down');
    // up1.onclick = up(this,udid);
    // down1.onclick = down(this,udid);

    function requestNews(orderBy) {
        var newsList;
        var URL;
        if (orderBy == "time"){
            URL = "/front/article/findUserArticleDESC/";
        } else if (orderBy == "hot"){
            URL = "/front/article/findArticleByHot/";
        }
        $.ajax({
            url:URL+"?pageStart=" + pageStart,
            type:"get",
            dateType:"json",
            async:false,
            success:function (e) {
                newsList = e;
                pageStart++;
            },
        });
        return newsList;
    }

//设置热点文章
    function requestHotNews() {

        var hotImgs = document.querySelectorAll(".hotUl img");
        var hotAs = document.querySelectorAll(".hotUl a");
        var hotNewsList = requestNews("hot");
        for (var i = 0; i < hotImgs.length; i++){
            hotImgs[i].setAttribute("src",hotNewsList[i%5].coverimg);
            hotAs[i].setAttribute("href","/readArticle?id="+hotNewsList[i%5].aid);
            hotAs[i].innerHTML = "<p>" + hotNewsList[i%5].brief + "</p>";
        }
    }
}(window));

// function saveUdid(map) {
//     var udid = map[0].udid;
//
//     console.log(udid);
//     return udid;
// }

$(function () {
    $("head").append($("    <link rel=\"stylesheet\" href=\"../../public/js/share/share.min.css\">" +
        "    <script src=\"../../public/js/qrcode.min.js\"></script>"));

    function shareToXl(title, url, picurl) {
        var sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + url + '&content=utf-8&sourceUrl=' + url;//+'&pic='+picurl;
        window.open(sharesinastring, 'newwindow');
    }

    function shareToQq(title, url, desc) {
        // var shareString = 'http://connect.qq.com/widget/shareqq/index.html?url=你的分享网址&sharesource=qzone&title=你的分享标题&pics=你的分享图片地址&summary=你的分享描述&desc=你的分享简述';
        var shareString = "http://connect.qq.com/widget/shareqq/index.html?url=" + url + "&sharesource=qzone&title=" + title + "&pics=你的分享图片地址&summary=来自7财经的分享&desc=" + desc;
        window.open(shareString, 'newwindow');
    }

    // shareToQq("7cj",window.location + "/front/toReadFlash?id=" + list.aid,"7cj")
// var url = window.location + "/front/toReadFlash?id=" + list.aid;
    // qrBox = $("<div id='qrcode'></div>")
    //
    // $("body").append(qrBox)
    // qrcode = new QRCode(document.getElementById("qrcode"),{
    //     text: window.location,
    //     width: 128,
    //     height: 128,
    //     colorDark : "#000000",
    //     colorLight : "#ffffff",
    //     correctLevel : QRCode.CorrectLevel.H
    // });  // 设置要生成二维码的链接

    function createQrCode(articleUrl) {

        layer.open({
            type: 1,
            skin: 'layui-layer-demo', //样式类名
            closeBtn: 0, //不显示关闭按钮
            anim: 2,
            shadeClose: true, //开启遮罩关闭
            content: "<div id='qrcode'></div>"
        });
        qrcode = new QRCode(document.getElementById("qrcode"), {
            text: window.location,
            width: 128,
            height: 128,
            colorDark: "#FF9D11",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });  // 设置要生成二维码的链接
    }

    // layer.open({
    //     type: 1,
    //     skin: 'layui-layer-demo', //样式类名
    //     closeBtn: 0, //不显示关闭按钮
    //     anim: 2,
    //     shadeClose: true, //开启遮罩关闭
    //     content: '内容'
    // });
    $(".icon-wechat").hover(function () {
        qrcode.makeCode(window.location);
        $("#qrcode").show()
    }, function () {
        qrcode.clear(); // 清除代码
        $("#qrcode").hide()
    })
})






