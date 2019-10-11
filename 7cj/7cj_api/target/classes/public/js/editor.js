var button = document.getElementsByClassName('buttonBox');
var fileBox = document.getElementById('file');
var commit = document.getElementById('commit');
var file = document.getElementById('file');
var articleType = document.getElementById('articleType');
var articleBrief = document.getElementById('articleBrief');
var articleTitle = document.getElementById('articleTitle');
var articleSource = document.getElementById('articleSource');
var articleAuthor = document.getElementById('articleAuthor');
// var keyword = document.getElementsByClassName('keywordInput');
var coverImg;
function inputContent() {
    console.log(editor.txt.html());
    console.log(editor.txt.text());
}


// function changcolor(y) {
//     y.style.backgroundColor = '#FF9933';
// }
//
// function rechangecolor(y) {
//     y.style.backgroundColor = '#C8C8C8';
// }

function addFile(y) {
    y.onclick = fileBox.click();
    console.log(fileBox);
}
//限制标题字数
function limitNumber() {
    if($("#articleTitle").val().length > 14){
        layer.msg("文章标题最多输入15个字");
    }
    else{}
}

//添加关键字
$(".addInput").click(function () {

    console.log($(".keywordInput").length);

    if($(".keywordInput").length < 3){
        var keywordInput = document.createElement('input');
        keywordInput.setAttribute("class","keywordInput");
        keywordInput.setAttribute("type","text");
        keywordInput.setAttribute("maxlength",5);
        keywordInput.setAttribute("oninput","limitkeyword()");
        keywordInput.style.marginLeft = '3px';
        console.log(keywordInput);
        $(".addInput").before(keywordInput);
    }
    else{
        layer.msg("最多添加3个关键字");
    }

});

//限制关键字字数
function limitkeyword() {
        if ($(".keywordInput").val().length > 9) {
            layer.msg("关键字最多输入10个字");
        }
        else{}
}

function limitsource() {


        if ($("#articleSource").val().length > 9) {
            layer.msg("来源最多输入10个字");
        }
        else{}

}
function limitauthor() {
        if ($("#articleAuthor").val().length > 9) {
            layer.msg("作者最多输入10个字");
        }
        else{}
}
// tinymce.init({
//     selector: '#tinymceText',
//     height: 500,
//     language: 'zh_CN',
//     language_url: '../../public/langs/zh_CN.js',  // site absolute URL
//     skin_url: '../../public/skins/lightgray',
//     menubar: false,
//     convert_urls: false,
//     // relative_urls: IMG_URL,
//     plugins: [
//         'advlist autolink lists link image charmap print preview hr anchor pagebreak',
//         'searchreplace wordcount visualblocks visualchars code fullscreen',
//         'insertdatetime media nonbreaking save table contextmenu directionality',
//         'emoticons template paste textcolor colorpicker textpattern image imagetools codesample'
//     ],
//     toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent link ',
//     toolbar2: 'image print forecolor backcolor preview',
//     image_advtab: false,
//     codesample_content_css: '../../public/css/prism.css',
//     file_picker_types: 'image',
//     file_browser_callback: function(field_name) {
//         console.log(field_name);
//         var input = document.createElement('input');
//         input.setAttribute('type', 'file');
//         input.setAttribute('accept', 'image/*');
//         input.click();
//         input.onchange = function() {
//             var file = input.files[0];
//             var reader = new FileReader();
//             reader.readAsDataURL(file);
//             if (!reader) {
//                 return;
//             }
//             reader.onload = function() {
//                 // this.processService.show();
//                 // this.processService.drawFrame(0);
//                 var formData = new FormData();
//                 formData.append('file', reader.result);
//                 formData.append('token', localStorage.token);
//                 var xhr = new XMLHttpRequest();
//                 xhr.upload.addEventListener('progress', function(ev) {
//                     uploadProgress(ev);
//                 }, false);
//                 xhr.addEventListener('load', function(ev){ (uploadComplete(ev, field_name))}, false);
//                 xhr.addEventListener('error', this.uploadFailed, false);
//                 xhr.addEventListener('abort', this.uploadCanceled, false);
//                 xhr.open('POST','/front/uploadFile');
//                 xhr.send(formData);
//             }
//         }
//     },
// });

// function sc() {
//     // var tinymceText = document.getElementById("tinymceText");
//     $.ajax({
//         url:"/front/article/uploadArticle",
//         dataType:"json",
//         data:{"content":tinymce.activeEditor.getContent()},
//         success:function (data) {
//             alert("success!");
//         }
//     })
// }
// // 上传中 上传进度控制
// function uploadProgress(evt) {
//     // this.processService.drawFrame(evt.loaded / evt.total * 100);
// }
//
// // 上传完成
// function uploadComplete(evt, field_name) {
//     console.log("success!");
//     console.log(evt);
//     console.log(field_name);
//     var str = evt.target.responseText;
//     console.log(str);
//     console.log(str.substring(4,str.length-4));
//     (document.getElementById(field_name)).setAttribute("value","../"+evt.target.responseText.substring(4,str.length-4));
//     // processService.drawFrame(100);
//     setTimeout(function () {
//         // processService.hide();
//     }, 200);
// }
//
// // 中止图片上传后
// function uploadCanceled(evt) {
//     console.log(evt);
// }
//
// // 上传失败
// function uploadFailed(evt) {
//     console.log(evt);
// }
//
// function ngOnDestroy() {
//     tinymce.remove(editor);
// }
// // 上传中 上传进度控制
// function uploadProgress(evt) {
//     // processService.drawFrame(evt.loaded / evt.total * 100);
// }

commit.onclick = function (ev) {
    var keyword = '';
    for(var i = 0;i < $(".keywordInput").length;i++){
        var word = document.getElementsByClassName('keywordInput')[i].value;
        console.log(word);
        keyword = keyword + word;
    }
    var coverImg = file.files[0];
    var reader = new FileReader();
    var type = articleType.value;
    var title = articleTitle.value;
    var brief = articleBrief.value;
    var source = articleSource.value;
    var author = articleAuthor.value;
    console.log(keyword);
    var content = $("#editor").html();
    console.log(type);
    // console.log(content);
    if (coverImg == null || coverImg == "") {
        layer.msg("请选择图片");
        return;
    }
    if (title == null || title == ""){
        layer.msg("请设置标题");
        return;
    }
    if (type  == null || type  == ""){
        layer.msg("请选择文章类型");
        return;
    }
    if (brief == null || brief == ""){
        layer.msg("请写入摘要");
        return;
    }
    if (keyword == null || keyword == ""){
        layer.msg("请写入关键字");
        return;
    }
    // if (source == null || source == ""){
    //     layer.msg("请写入来源");
    //     return;
    // }
    if (author == null || author == ""){
        layer.msg("请写入作者");
        return;
    }
    if (content == null || content == ""){
        layer.msg("文本内容不能为空");
        return;
    }
    layer.confirm('请扫描右侧二维码，确定您已打币', {
        time: 0 //不自动关闭
        ,btn: ['确定', '取消']
        ,yes: function(index){
            reader.readAsDataURL(coverImg);
            reader.onload = function (ev1) {
                var article = {
                    atitle:title,
                    category:type,
                    brief:brief,
                    coverimg:reader.result,
                    keyword:keyword,
                    source:source,
                    author:author,
                    acontent:content
                };
                console.log(article);
                $.ajax({
                    url:"/article/uploadArticle",
                    contentType:"application/json",
                    type:"post",
                    async:false,
                    data:JSON.stringify(article),
                    success:function (is) {
                        console.log(is);
                        if (is.message == "成功"){
                            layer.msg("保存成功");
                            location.href = "/index";
                        } else {
                            layer.msg("服务器错误，保存失败");
                        }
                    }
                })
            }
            // layer.close(index);
            // layer.msg('雅蠛蝶 O.o', {
            //     icon: 6
            //     ,btn: ['嗷','嗷','嗷']
            // });
        }
    });
    // layer.tips("确认您已打币","确定","取消");
    // var f = confirm("请确认您已打币");
    // if (!f){
    //     return;
    // }

};
