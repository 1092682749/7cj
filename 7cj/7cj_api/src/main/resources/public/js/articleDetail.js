var OrderArry = document.getElementsByClassName('mattterOrder');
function changeStyle(y) {
    for(var i = 0;i < OrderArry.length;i++){
        OrderArry[i].style.color ='#505050';
        OrderArry[i].style.borderBottom = 0;
    }
    y.style.color = '#FF9933';
    y.style.borderBottom = 'solid 1px  #FF9933';
}

(function (_window) {
    var articleTitle = document.getElementById("articleTitle");
    var articleTime = document.getElementById("articleTime");
    var articleSource = document.getElementById("articleSource");
    var articleAuthor = document.getElementById("articleAuthor");
    var articleContent = document.getElementById("articleContent");
    var nextA = document.getElementById("nextA");
    var preA = document.getElementById("preA");
    var userHeadImg = document.getElementById("userHeadImg");
    var allArticlesCount = document.getElementById("allArticlesCount");
    var allView = document.getElementById("allView");
    var userName = document.getElementById("userName");
    var moreArticle = document.getElementById("moreArticle");
    var preSpan = document.getElementById("preSpan");
    var nextSPan = document.getElementById("nextSpan");
    var article = document.getElementsByClassName('articleContent');
    var PageStart = 0;
    console.log(1111);
    $.ajax({
        url:"/front/article/getAllArticleById",
        dataType:"json",
        type:"post",
        success:function (data) {
            putData(data);
            article[0].style.opacity = "1";
        },
        error:function (e) {
            console.log(e);
        }
    });
    requestHotNews();

    function putData(map) {
        //设置文章标题
        articleTitle.innerText = map.article.atitle;

        //设置上传时间和来源
        console.log(map.article.addtime);
        if(document.body.clientWidth < 860){
            articleTime.innerText =  map.article.addtime.substring(5);
            articleSource.innerText = ellipsis(map.article.source,13) ;
        }
        else {
            articleTime.innerText = "时间：" + map.article.addtime;
            articleSource.innerText = "来源：" + map.article.source;
        }

        // //设置来源
        // articleSource.innerText = "来源：" + map.article.source;

        //设置作者
        console.log(map.article.author);
        if(map.article.author == null || map.article.author == ""){
            articleAuthor.innerText = "";
        }
        else{
            if(document.body.clientWidth < 860){
                articleAuthor.innerText = ellipsis(map.article.author,13);
            }
            else{
                articleAuthor.innerText = "作者：" + map.article.author;
            }

        }

        function ellipsis(str, length) {
            // console.log(element);
            // var str = element.innerText;
            // console.log(str.length);
            if (str.length > length) {
                str = str.substring(0, length) + "...";
            }
            return str;
        }

        // if (testphone( map.user.username)) {
        //     articleSource.innerText = "来源: " + map.user.username.substring(0,3) + "***" + map.user.username.substring(8,11);
        //     // articleSource.innerText = "来源：" + map.user.username.substring(1,3)+"***"+map.user.username.substring(9,11);
        // }else {
        //     articleSource.innerText = "来源: " + map.user.source;
        // }
        // articleSource.innerText = "来源" + map.user.username.substring(0,3) + "***" + map.user.username.substring(8,11);

        // 设置富文本内容
        articleContent.innerHTML = map.article.acontent;
        // 判断是否有上一篇
        if (map.preArticle.aid == -1){
            preSpan.innerHTML = map.preArticle.atitle;
        }else {
            preA.setAttribute("href","/readArticle?id="+map.preArticle.aid);
            preA.innerText = map.preArticle.atitle;
        }

        ellipsis(map.preArticle.atitle,20);
        // 判断是否有下一篇
        if (map.nextArticle.aid == -1){
            // nextA.setAttribute("href","#");
            nextSPan.innerHTML = map.nextArticle.atitle;
        }else {

            nextA.setAttribute("href","/readArticle?id="+map.nextArticle.aid);
            nextA.innerText = map.nextArticle.atitle;
        }

        // // 设置用户头像
        // userHeadImg.setAttribute("src",map.user.header);
        // console.log(map.user);
        // // 设置文章数量
        // allArticlesCount.innerText = map.articleCount;
        // // 浏览总量
        // allView.innerText = map.allViewCount;
        // if (testphone( map.user.username)) {
        //     console.log(testphone( map.user.username));
        //     userName.innerText = map.user.username.substring(0,3) + "***" + map.user.username.substring(8,11);
        // }else {
        //     userName.innerText = map.user.username;
        // }
        //
        // // 更多文章页面
        // moreArticle.setAttribute("href","/moreArticle");
    }

    //省略文字
    function ellipsis(str,length) {
        // console.log(element);
        // var str = element.innerText;
        if (str.length > length) {
            str = str.substring(0,length) + "...";
        }
        return str;
    }

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

    // loadBox.onclick = function (){
    //     var newsList = requestNews(orderBy);
    //     if (newsList.length > 0) {
    //         for (var i = 0; i < newsList.length; i++){
    //             addNews(newsList[i]);
    //         }
    //     }else {
    //         layer.msg("没有更多了");
    //     }
    // };
    function requestNews(orderBy) {
        var newsList;
        var URL;
        if (orderBy == "time"){
            URL = "/front/article/findUserArticleDESC/";
        } else if (orderBy == "hot"){
            URL = "/front/article/findArticleByHot/";
        }
        $.ajax({
            url:URL+"?pageStart=" + PageStart,
            type:"get",
            dateType:"json",
            async:false,
            success:function (e) {
                newsList = e;
                PageStart++;
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


})(window);