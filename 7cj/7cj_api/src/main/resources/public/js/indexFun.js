var fontLi = document.querySelectorAll(".fontUl li");
var count = $.cookie("count");
function up(_this,id) {
    if (isDown(id)){
        var downLi = _this.parentNode.querySelector("li:nth-child(2)");
        var downI = downLi.getElementsByTagName("i")[0];
        var downImg = downLi.getElementsByTagName("img")[0];
        downI.innerText = parseInt(downI.innerText) - 1;
        downImg.setAttribute("src","../../public/imgs/down.svg");
        downLi.isSeleced = false;
        downLi.style.color = "#8a8a8a";
        upOrDown("0",id,"down");
    }
    var i = _this.getElementsByTagName("i")[0];
    var img = _this.getElementsByClassName("upImg")[0];
    if (_this.isSeleced) {
        if (!upOrDown("0",id,"up")) {
            layer.msg("您已经点过了1");
            return;
        }
        _this.isSeleced = false;
        _this.style.color = "#8a8a8a";
        var num = parseInt(i.innerText) - 1;
        i.innerText = num;

        img.setAttribute("src","../../public/imgs/up.svg");
    }else {
        if (!upOrDown("1",id,"up")) {
            /////////////////////////////////2
            _this.isSeleced = false;
            _this.style.color = "#8a8a8a";
            var num = parseInt(i.innerText) - 1;
            i.innerText = num;
            return;
        }
        _this.isSeleced = true;
        // _this.style.color = "#ff9d11";
        var num = parseInt(i.innerText) + 1;
        i.innerText = num;
        img.setAttribute("src","../../public/imgs/cup.svg");
    }
}
function down(_this,id) {
    var img = _this.getElementsByClassName("downImg")[0];
    var i = _this.getElementsByTagName("i")[0];
    if (_this.isSeleced) {
        if (!upOrDown("0",id,"down")) {
            layer.msg("您已经点过了3");
            return;
        }
        var num = parseInt(i.innerText) - 1;
        i.innerText = num;
        _this.isSeleced = false;
        _this.style.color = "#8a8a8a";

        img.setAttribute("src","../../public/imgs/down.svg");
    }else {
        if (!upOrDown("1",id,"down")) {
            var num = parseInt(i.innerText) - 1;
            i.innerText = num;
            _this.isSeleced = false;
            _this.style.color = "#8a8a8a";
            return;
        }
        _this.isSeleced = true;
        // _this.style.color = "#ff9d11";
        var num = parseInt(i.innerText) + 1;
        i.innerText = num;

        img.setAttribute("src","../../public/imgs/cdown.svg");
    }
    if (isUp(id)){
        var upLi = _this.parentNode.querySelector("li:nth-child(1)");
        var upI = upLi.getElementsByTagName("i")[0];
        var upImg = upLi.getElementsByTagName("img")[0];
        upI.innerText = parseInt(upI.innerText) - 1;
        upLi.isSeleced = false;
        upImg.setAttribute("src","../../public/imgs/up.svg");
        upLi.style.color = "#8a8a8a";
        upOrDown("0",id,"up");
    }
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
//op : up or down   ud:+ or -    id:快讯id
function upOrDown(ud,id,op) {
    var isClick = false;
    $.ajax({
        url:"/front/upOrDown?ud="+ud+"&id="+id+"&op="+op,
        async:false,
        success:function (e) {
            // console.log(e);
            isClick = e;
        }
    });
    return isClick;
}
function isUp(id) {
    var is;
    $.ajax({
        url:"/front/isUp?id="+id,
        async:false,
        success:function (e) {
            is = e;
        }
    });
    return is;
}
function isDown(id) {
    var is;
    $.ajax({
        url:"/front/isDown?id="+id,
        async:false,
        success:function (e) {
            is = e;
        }
    });
    return is;
}
