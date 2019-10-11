var inputArry = document.getElementsByClassName('inputbox');
var mail = document.getElementById("mail");
var pass = document.getElementById("pass");
var login_button = document.getElementById("login_button");

function changecolor(y) {
    for (var i = 0; i < inputArry.length; i++) {
        inputArry[i].style.outline = 0;
        inputArry[i].style.borderColor = '#D8D8D8';
    }
    y.style.borderColor = "#FF9933";
}

function check() {
    var boolean = true;
    if (mail.value != "") {

        if (pass.value != "") {

            if (boolean) {
                login_button.style.borderColor = '#FF9933';
                login_button.style.backgroundColor = '#FF9933';
            }
            else {
            }
        }
        else {
            layer.msg("请输入密码!")
            // alert("请输入密码!");
        }
    }
    else {
        layer.msg("请输入用户名!")
        // alert("请输入用户名!");
    }
}

// login_button.onclick = function (){
//
//     var LoginObject = {
//         uesrname:mail,
//         password:pass
//     }
//     var Login = JSON.stringify(LoginObject);
//     $.ajax({
//         url: "/ajaxLogin",
//         type:"post",
//         dataType:"json",
//         data:"Login",
//         success:function (result) {
//             window.location.href = "";
//         },
//         error:function () {
//
//         }
//     })
// }


function testphone() {

    // console.log("绑定成功")
    if ($("#mail").val().length === 11 && (checkPhone() != 1)) {
        layer.msg("请输入正确的手机号码!");
    }
    // else if ($("#phone").val().length > 11){
    //     layer.msg("请输入正确的手机号码!");
    // }
}

function checkPhone() {
    var filter = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    if (filter.test($("#mail").val())) {
        return 1;
    }
}


function login() {
    var username = $("#mail").val();

    var password = $("#pass").val();



//         var tel = $("#phone").val(); //获取手机号
//         var telReg = !!tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
// //如果手机号码不能通过验证
//         if(telReg == false){
//             layer.msg("请输入正确的手机号码!");
//         }


    if (checkPhone() != 1) {
        layer.msg("请输入正确的手机号码!");
    } else {

        $.ajax({
            type: "POST",
            data: {
                "phone_number": username,
                "password": password
            },
            dataType: "json",
            url: "/ajaxLogin",
            success: function (result) {

                if (result.status != 200) {
                    layer.msg(result.message)
                    // alert("账户或密码错误")
                    // swal("哦豁",result.message,"error");
                } else {
                    location.href = "/index";
                }
            }
        });


    }


}
