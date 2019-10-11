var orderBy = "time";
var loadBox = document.getElementsByClassName("loadBox")[0];
var userPageStart = 0;
var loadCount = 0;
var authorName = "";
function addNews(e) {
    var all_articles = document.getElementById("all_articles");
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
    var contentHeadPic = document.createElement('img');
    contentHeadPic.setAttribute("class","contentHeadPic");
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
    smallSpan.appendChild(commentSpan);
    contentUserSpan.appendChild(contentHeadPic);
    contentUserSpan.appendChild(p);
    contentBox.appendChild(span);
    contentBox.appendChild(contentBrief);
    all_articles.insertBefore(contentBox,loadBox);
    //设置新闻图片

    img.setAttribute("src",e.coverimg);
    //点击跳转到详情
    a.setAttribute("href","/readArticle?id="+e.aid);
    //标题
    h2Title.innerHTML = e.atitle;
    //内容简要
    contentP.innerHTML = e.brief;
    //用户名字
    // var user = findUserByAId(e.uid);
    if (testphone(e.username)){
        p.innerHTML = e.username.substring(0,3) + "***" + e.username.substring(8,11);
    } else {
        p.innerHTML =e.username;
    }

    //发表时间
    if (document.body.clientWidth > 650)
    {
        timeSpan.innerHTML = e.addtime.substring(0,18);
    }else {
        timeSpan.innerHTML = e.addtime.substring(0,9);
    }
    //浏览次数
    pageViewSpan.innerHTML = "浏览量" + e.readnumber + "次";
    //评价按钮
    commentSpan.innerHTML = "";
    //头像
    contentHeadPic.setAttribute("src",e.header);
}
loadBox.onclick = function (){
    var newsList = requestNews(orderBy);
    if (newsList.length > 0) {
        for (var i = 0; i < newsList.length; i++){
            addNews(newsList[i]);
        }
    }else {
        layer.msg("没有更多了");
    }
};
function requestNews(orderBy) {
    var newsList;
    var URL;
    if (orderBy == "time"){
        URL = "/front/article/findUserArticleDESC/";
    } else if (orderBy == "hot"){
        URL = "/front/article/findArticleByHot/";
    }
    $.ajax({
        url:URL+"?pageStart=" + userPageStart,
        type:"get",
        dateType:"json",
        async:false,
        success:function (e) {
            newsList = e;
            userPageStart++;
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
        hotAs[i].setAttribute("href","/readArticle?id="+hotNewsList[i%5].aid);///////////////
        hotAs[i].innerHTML = "<p>" + hotNewsList[i%5].brief + "</p>";
    }
}
//省略文字
function ellipsis(str,length) {
    // console.log(element);
    // var str = element.innerText;
    console.log(str.length);
    if (str.length > length) {
        str = str.substring(0,length) + "...";
    }
    return str;
}
window.onload = function (ev) {
    var middleBox = document.getElementsByClassName('middleBox')[0];
    requestUser();
    if (loadCount == 0){
        loadCount++;
        var newsList = requestNews("time");
        for (var i = 0; i < newsList.length; i++){
            addNews(newsList[i]);
        }
    }
    userPageStart = 0;
    requestHotNews();
    middleBox.style.opacity = "1";
};
//设置用户相关信息
function putUserData(map){
    var topBlank = document.getElementsByClassName("topBlank")[0];
    var headImg = document.getElementById("headImg");
    var userName = document.getElementById("userName");
    var allArticleCount = document.getElementById("allArticleCount");
    var allViewCount = document.getElementById("allViewCount");
    topBlank.innerHTML = "<img class='topImg' src='../../public/images/写作者.png'>"+ map.user.username + "的文章";
    headImg.setAttribute("src",map.user.header);
    if (testphone(map.user.username)){
        userName.innerText = map.user.username.substring(0,3) + "***" + map.user.username.substring(8,11);
    } else {
        userName.innerText =map.user.username;
    }


    allArticleCount.innerText = map.articleCount;
    allViewCount.innerText = map.allViewCount;
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
function requestUser() {
    $.ajax({
        url:"/front/article/findUserInfoByArticleId",
        dataType:"json",
        async:false,
        type:"get",
        success:function (map) {
            putUserData(map);
        }
    })
}
function testphone(num){

    // console.log("绑定成功")
    if (num.length == 11 || (checkPhone(num) == 1)){
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