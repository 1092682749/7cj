$(function(){

    banner = $("<div class=\"topNavigation-bg\">\n" +
        "\n" +
        "</div><div class=\"topNavigation\">\n" +
        "    <img class=\"logo\" src=\"../../public/imgs/logo.jpg\">\n" +
        "    <ul class=\"loginAndRegister\">\n" +
        "\n" +
        "        <a href=\"http://www.baidu.com\">\n" +
        "            <li  class=\"userLi\">\n" +
        "                <img class=\"user\" src=\"../../public/imgs/user.png\">\n" +
        "            </li>\n" +
        "        </a>\n" +
        "\n" +
        "\n" +
        "        <!--登陆连接-->\n" +
        "        <a href=\"/login\" class=\"transitionA\"><li>登陆</li></a>\n" +
        "\n" +
        "        <li>|</li>\n" +
        "\n" +
        "        <!--注册链接-->\n" +
        "        <a href=\"/regis\" class=\"transitionA\"><li>注册</li></a>\n" +
        "\n" +
        "        <li class=\"writeLi\"><img src='../../public/images/写文章.png'>写文章</li>\n" +
        "    </ul>\n" +
        "</div>\n");
    $("html").prepend(banner);
});