(function () {
    //初始化轮播结构
    var blurTitle = document.getElementById("blurTitle");
    var blurContent = document.getElementById("blurContent");
    var bulrImg = document.getElementsByClassName("blurImg")[0];
    var blurTime = document.getElementById("blurTime");
    var blurReadNumber = document.getElementById("blurReadNumber");
    var blurA = document.getElementById("blurA");
    var list = requestNews("time");


    function requestNews(orderBy) {
        var newsList;
        var URL;
        if (orderBy == "time"){
            URL = "/front/article/findAllArticleByDESC";
        } else if (orderBy == "hot"){
            URL = "/front/article/findArticleByHot/";
        }
        $.ajax({
            url:URL+"?pageStart=" + 0,
            type:"get",
            dateType:"json",
            async:false,
            success:function (map) {
                console.log(map);
                newsList = map;
            },
        });
        return newsList;
    }

    var swiperContainer = document.getElementById("swiper-wrapper");
    for (var i = 0; i < list.length; i++){
        var bannerBox = document.createElement("div");
        bannerBox.setAttribute("class","swiper-slide");
        var bannerA = document.createElement("a");
        bannerA.setAttribute("href","/readArticle?id="+list[i].aid);
        bannerA.setAttribute("class","bannerA");
        var bannerImg = document.createElement("img");
        bannerImg.setAttribute("class","banner");
        bannerA.appendChild(bannerImg);
        bannerImg.setAttribute("src",list[i].coverimg);
        bannerBox.appendChild(bannerA);
        swiperContainer.appendChild(bannerBox);
    }


    blurTitle.innerHTML = ellipsis(list[0].atitle,30);
    blurContent.innerHTML = list[0].brief;
    blurTime.innerHTML = list[0].addtime;
    blurReadNumber.innerHTML = "浏览量" + list[0].readnumber;
    bulrImg.setAttribute("src",list[0].coverimg);
    blurA.setAttribute("href","/readArticle?id="+list[0].aid);
    //省略文字
    function ellipsis(str,length) {
        // console.log(element);
        // var str = element.innerText;
        // console.log(str.length);
        if (str.length > length) {
            str = str.substring(0,length) + "...";
        }
        return str;
    }



})();