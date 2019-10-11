var inputArry = document.getElementsByClassName('inputbox');
var mail =  document.getElementById('mail');
var pass = document.getElementById('pass');
var repass = document.getElementById('repass');
var inVerify = document.getElementById('inVerify');
var button = document.getElementById("button");

function changecolor(y) {
    for(var i = 0;i<inputArry.length;i++){
        inputArry[i].style.outline = 0 ;
        inputArry[i].style.borderColor = '#D8D8D8';
        inVerify.style.outline = 0;
    }
    y.style.borderColor = '#FF9933';
}


function  isphone(phone) {
    // var filter = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    var filter = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    if(!filter.test(phone.value)){
        confirm('请输入正确的手机号码！');
        phone.focus();
        return false;
    }
    else {
        return false;
    }

}

// function check() {
//     var boolean = true;
//     if(mail.value != ""){
//
//         if(pass.value != ""){
//
//             if(repass.value != "" && pass.value == repass.value){
//
//                 if(inVerify.value != ""){
//                     if(boolean){
//                         button.style.backgroundColor = '#FF9933';
//                         button.style.borderColor = '#FF9933';
//                     }
//                     else {}
//                 }
//                 else {
//                     alert("请输入验证码！");
//                 }
//             }
//             else {
//                 alert("两次密码输入不一致，请重新输入！");
//             }
//         }
//         else {
//             alert("请输入密码！");
//         }
//     }
//     else {
//         alert("请输入用户名！");
//     }
// }


function testphone(){

    // console.log("绑定成功")
    if ($("#phone").val().length === 11 && (checkPhone() != 1)){
        layer.msg("请输入正确的手机号码!");
    }else if ($("#phone").val().length > 11){
        layer.msg("请输入正确的手机号码!");
    }
}
//
// $(function () {
//    $("#phone").bind("oninput",function () {
//
//        // console.log("绑定成功")
//        if ($("#phone").val().length > 11){
//            layer.msg("请输入正确的手机号码!");
//        }
//    })
// });
function sendcode() {

    if (checkPhone() === 1) {

        console.log($("#phone").val());

        $.ajax({
            type: "POST",
            data: {
                "phone": $("#phone").val()
            },
            dataType: "json",
            url: "/sys/sms/sendSMS",
            success: function (result) {
                if (result.code === 0) {
                    layer.msg("验证码发送成功！注意查收！");
                    settime($("#gettime").get(0));
                }
            }
        });
        // return;
    }else {

        layer.msg("请输入正确的手机号码!")
    }
}


var countDown = 60;
function settime(time){

    // sendcode();

    if(countDown  == 0){
        time.removeAttribute("disabled");
        time.value = "获取验证码";
        countDown = 60;
        return false;
    }else{
        time.setAttribute("disabled",true);
        time.value = "已发送"+ countDown +"s";
        countDown--;
    }
    setTimeout(function () {
        settime(time);
    },1000);
}

function register() {
    //1 两次输入密码不一致 2 验证码不能为空
    if(check() === 1){
        layer.msg("两次输入密码不一致!");
    }else if (check() === 2) {
        layer.msg("验证码不能为空!")
    }else if (check() === 3) {
        layer.msg("密码不能为空!")

    }else{


        var username = $("#phone").val();
        console.log(username);
        var password = $("#pass").val();
        var code = $("#inVerify").val();
        console.log(password);

        $.ajax({
            type : "POST",
            data : {
                "phone" : username,
                "code": $("#inVerify").val()
            },
            dataType : "json",
            url : "/sys/sms/checkSMS",
            success : function(result){
                if (result.code === 0){
                    // layer.msg("验证码发送成功！注意查收！")

                    $.ajax({
                        type : "POST",
                        data : {
                            "username" : username,
                            "password" : password
                            // "vcode" : code
                        },
                        dataType : "json",
                        url : "ajaxRegister",
                        success : function(result) {
                            console.log(result);
                            if (result.status != 200) {

                                layer.msg(result.message)

                            } else {
                                layer.msg("注册成功正在跳转登陆页...");
                                setTimeout(function(){
                                    location.href = "/index";
                                }, 1000);
                            }
                        }
                    });
                } else if(result.code === 152){
                    layer.msg("验证码不正确");
                }
            }
        })

    }

}

function checkPhone(){
    var filter = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    if (filter.test($("#phone").val())) {
        return 1;
    }
}

function check() {
    $("#button").css("backgroundColor","#FF9933");
    if( $("#repass").val() != $("#pass").val()) {
        return 1; // 两次密码不一致
    }else if ( $("#inVerify").val() === null) {
        return 2; // 验证码不能为空
    }else if ($("#repass").val() === null || $("#pass").val() === null){
        return 3;
    }
}
