$(function () {


    banner_login_after =
        "<div class=\"topNavigation\">\n" +
        "    <a href='/'><img class=\"logo\" src=\"../../public/images/logo1.jpg\"></a>\n" +
        "\n" +
        "    <ul class=\"loginAndRegister\">\n" +
        "        \n" +
        "\n" +
        "        <ul class=\"writebox\">\n" +
        "            <li class=\"writeLi\"><img src='../../public/images/写文章.png'>写文章</li>\n" +
        "        </ul>\n" +
        "\n" +
        "        <ul class=\"author-box\">\n" +
        "            <li id=\"ishover\"><img src=\"../../public/imgs/user.png\"></li>\n" +
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

    banner_css = $("<link rel=\"stylesheet\" href=\"../../public/css/banner.css\">\n" +
        "    <link rel=\"stylesheet\" href=\"../../public/css/banner_small_mobile.css\" media=\"screen and (max-width:650px)\">")

    // banner_css = $("    <link rel=\"stylesheet\" href=\"../../public/css/banner.css\">")
    $("head").append(banner_css)


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
        $(".author").show(500);
    },function(){
        $(".author").hide();
    });

    $(document).on('click','#ishover',function (event) {
        $(".author").show(500);
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

    $(document).on('click touchstart','#li1',function (event) {

        location.href = "/personalCenter"

        // location.href = "/logout"
        // $(".author").hide(500);
        // event.stopPropagation();
    })


})