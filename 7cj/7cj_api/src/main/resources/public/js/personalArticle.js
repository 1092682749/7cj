(function (_window) {
    var loadState = 9;//默认获取规则
    var pageBox = document.getElementById("pageBox");
    var number = 1;//文章顺序
    var pageStart = 0;//分页页码
    var showAllButton = document.getElementById("showAll");
    var showWaitAuditButton = document.getElementById("showWaitAudit");
    var releaseButton = document.getElementById("release");
    var notPassButton = document.getElementById("notPass");
    function addArticle(article) {
        var pageBox = document.getElementById("pageBox");
        var user_article_table_box = document.getElementById("tableBox");
        console.log(user_article_table_box);
        // user_article_table_box.setAttribute("class","user_article_table_box");
        var user_article_table_bd = document.createElement("div");
        user_article_table_bd.setAttribute("class","user_article_table_bd");
        var idSpan = document.createElement("span");
        var coverSpan = document.createElement("span");
        var timeSpan = document.createElement("span");
        timeSpan.setAttribute("class","timeSpan");
        var readNumberSpan = document.createElement("span");
        var stateSpan = document.createElement("span");
        var operateSpan = document.createElement("span");
        var coverImg = document.createElement('img');
        var titleI = document.createElement("i");
        var operateI = document.createElement("i");
        // var viewA = document.createElement("a");
        // viewA.innerText = "预览/";
        // var alertA = document.createElement("a");
        // alertA.innerText = "修改/";
        var deleteI = document.createElement("i");
        // deleteA.setAttribute("class",)
        deleteI.innerText = "删除";
        coverSpan.onclick = function (ev) {
            _window.location.href = "/readArticle?id="+article.aid;
        };
        user_article_table_bd.appendChild(idSpan);
        user_article_table_bd.appendChild(coverSpan);
        var windowWith = document.body.clientWidth;
        console.log(windowWith);
        if(windowWith > 650){
            user_article_table_bd.appendChild(timeSpan);
            coverSpan.appendChild(coverImg);
        }
        user_article_table_bd.appendChild(readNumberSpan);
        user_article_table_bd.appendChild(stateSpan);
        user_article_table_bd.appendChild(operateSpan);
        coverSpan.appendChild(titleI);
        operateI.appendChild(deleteI);
        operateSpan.appendChild(operateI);
        // operateSpan.appendChild(viewA);
        // operateSpan.appendChild(alertA);
        // operateSpan.appendChild(deleteA);
        coverImg.setAttribute("class","user_article_table_img");
        titleI.setAttribute("class","user_article_table_i");
        stateSpan.setAttribute("class","user_article_table_wait");
        user_article_table_box.insertBefore(user_article_table_bd,pageBox);
        //设置预览接口
        // viewA.setAttribute("href","/front/article/readArticle?id="+article.aid);
        // 设置删除接口
        // deleteA.setAttribute("href","/front/article/delete?id="+article.aid);
        deleteI.onclick = function (ev) {
            layer.confirm("确定要删除么？",{
                time:0,
                btn:["确定","取消"],
                yes:function (index) {
                    user_article_table_bd.style.display = "none";
                    $.ajax({
                        url:"/front/article/delete?id="+article.aid,
                        success:function (e) {
                            layer.msg("删除成功!");
                        }
                    })
                }
            });
        };
        //设置文章序号
        idSpan.innerText = number + "";
        number++;
        //设置路径
        coverImg.setAttribute("src",article.coverimg);
        //设置标题
        titleI.innerText = article.atitle;
        //设置时间
        timeSpan.innerText = article.addtime.substring(5,18);
        //设置阅读量
        readNumberSpan.innerText = article.readnumber;
        //判断逻辑不同分支颜色不同
        if (article.state == 2){
            stateSpan.innerText = "等待审核";
            stateSpan.style.color = "#9B9B9B";
        } else if (article.state == 3){
            stateSpan.innerText = "未通过";
            stateSpan.style.color = "#DA361A";
        } else if (article.state == 1){
            stateSpan.innerText = "已通过";
            stateSpan.style.color = "#ff9d11";
        }else if (article.state == 0)
        {
            stateSpan.innerText = "已下架";
            stateSpan.style.color = "#DA361A";
        }else {
            stateSpan.innerText = "未知状态";
            stateSpan.style.color = "#DA361A";
        }
    }


    _window.onload = function (e) {
       var articles = requestMyArticle(9);
       if (articles.length > 0){
           for (var i = 0; i < articles.length; i++){
               addArticle(articles[i]);
           }
       }
    };
    function requestMyArticle(state) {
        var articles;
        var URL = "";
        if (state == 9) {
            URL = "/front/article/myAllArticle?pageStart=";
        }else if (state == 2) {
            URL = "/front/article/myArticleChecking?pageStart=";
        }else if (state == 1) {
            URL = "/front/article/myArticleRelease?pageStart=";
        }else if (state == 3){
            URL = "/front/article/myArticleNotPass?pageStart=";
        }
        $.ajax({
            url: URL + pageStart,
            async:false,
            dataType:"json",
            type:"get",
            success:function (data) {
                articles = data;
                pageStart++;
            },
            error:function (e) {
                console.log(e);
            }
        });
        return articles;
    }
    //加载更多
    pageBox.onclick = function (e) {
        var articles = requestMyArticle(loadState);
        if (articles.length <= 0){
           layer.msg("没有更多了");
        }else {
            for (var i = 0; i < articles.length; i++){
                addArticle(articles[i]);
            }
        }
    };
    //隐藏文章
    function hidden(){
        var articleList = document.getElementsByClassName("user_article_table_bd");
        for (var i = 0; i < articleList.length; i++){
            articleList[i].style.display = "none";
        }
    }
    //展示所有
    showAllButton.onclick = function (ev) {
        selectByState(9);
        changeLiColor(this);
    };
    //展示审核中
    showWaitAuditButton.onclick = function (ev) {
        selectByState(2);
        changeLiColor(this);
    };
    //展示已通过
    releaseButton.onclick = function (ev) {
        selectByState(1);
        changeLiColor(this);
    };
    //展示未通过
    notPassButton.onclick = function (ev) {
        selectByState(3);
        changeLiColor(this);
    };
    //筛选方法
    function selectByState(state) {

        number = 1;
        pageStart = 0;
        hidden();
        loadState = state;
        var articles = requestMyArticle(state);
        for (var i = 0; i < articles.length; i++){
            addArticle(articles[i]);
        }
    };
    function changeLiColor(_this){
        var lis = document.querySelectorAll(".user_article_menu li");
        for (var i = 0; i < lis.length; i++){
             lis[i].style.backgroundColor = "white";
            lis[i].style.color = "#9B9B9B";
            lis[i].style.border = "1px solid #C1C1C1";
        }
        _this.style.backgroundColor = "#ff9d11";
        _this.style.color = "#fff";
        _this.style.border = "1px solid #ff9d11";
    }
})(window);