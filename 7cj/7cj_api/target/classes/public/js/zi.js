function Zialert(){
    var bgmask = document.createElement("div");
    bgmask.id="bgmask";
    bgmask.style.display="none";
    bgmask.style.width="100%";
    bgmask.style.position="absolute";
    bgmask.style.background="#F0F0F0";
    bgmask.style.zIndex="998";//设置层级，主要是为了遮住页面内的其他内容
    bgmask.style.top="0";
    bgmask.style.left="0";
    bgmask.style.height="2000px";//随便填，超过整屏高度就行，后面由js控制
    bgmask.style.opacity="1.0";// ie8及以下浏览器看不到效果，我也懒的给你写filter，换其他的现代浏览器吧

    var alertframe = document.createElement("div");
    alertframe.id="alertframe";
    alertframe.style.display="none";
    alertframe.style.margin="0";
    alertframe.style.padding="0";
    alertframe.style.fontSize="14px";
    alertframe.style.lineHeight="24px";
    alertframe.style.fontFamily="arial,sans-serif";
    alertframe.style.textAlign="left";
    alertframe.style.position="absolute";// 绝对定位，为了以后控制方便
    alertframe.style.top="200px";
    alertframe.style.background="#fff";
    alertframe.style.zIndex="999";// 层级，当然要比背景高1啦，要不你怎么看见
    alertframe.style.width="400px";
    alertframe.style.height="auto";
    var leftding=(document.body.clientWidth-400)/2+"px";
    alertframe.style.left=leftding;
    //alertframe.style.left="600px";// 随便填，后面由js控制
    alertframe.style.border="1px #ccc solid";

    var alerttitle = document.createElement("h5");
    alerttitle.id="alerttitle";
    alerttitle.style.margin="0";
    alerttitle.style.padding="0";
    alerttitle.style.fontSize="14px";
    alerttitle.style.lineHeight="24px";
    alerttitle.style.fontFamily="arial,sans-serif";
    alerttitle.style.textAlign="left";
    alerttitle.style.margin="4px";
    alerttitle.style.padding="0 16px";
    alerttitle.style.background="#0398e1";
    alerttitle.style.color="#fff";
    alerttitle.style.border="1px #16a8fc solid";
    alerttitle.innerHTML="title";

    var alertreturn = document.createElement("a");
    alertreturn.id="alertreturn";
    alertreturn.style.margin="0";
    alertreturn.style.padding="0";
    alertreturn.style.fontSize="14px";
    alertreturn.style.lineHeight="24px";
    alertreturn.style.fontFamily="arial,sans-serif";
    alertreturn.style.textAlign="left";
    alertreturn.style.fontSize="24px";
    alertreturn.style.float="right";/* 右浮动 */
    alertreturn.style.margin="-32px 8px 00";/* 使用负值margin 调高 */
    alertreturn.style.padding="4px";
    alertreturn.style.color="#72d5fb";
    alertreturn.style.fontWeight="bold";
    alertreturn.innerHTML="&times;";
    alertreturn.style.textDecoration="none";
    alertreturn.onmouseover=function(){
        alertreturn.style.color="#fff";
    }
    alertreturn.onmouseout=function(){
        alertreturn.style.color="#72D4F9";
    }
    alertreturn.onclick=function(){

        bgmask.style.display="none";
        alertframe.style.display="none"

    }
    var alertpart = document.createElement("p");
    alertpart.id="alertpart";
    alertpart.style.margin="0";
    alertpart.style.padding="10px";
    alertpart.style.fontSize="14px";
    alertpart.style.lineHeight="24px";
    alertpart.style.fontFamily="arial,sans-serif";
    alertpart.style.textAlign="left";
    alertpart.innerHTML="content";

    var alertinput = document.createElement("input");
    alertinput.id="alertinput";
    alertinput.style.marginLeft="10px";
    alertinput.style.padding="0px";
    alertinput.style.lineHeight="12px";
    //alertinput.value="555";
    //alertinput.style.color="#000";
    //alertinput.style.background="#EEE";
    //alertinput.style.border="1px #E6E6E6 solid";
    //alertinput.style.float="";
    //alertinput.style.width="380px";
    alertinput.style.display="inline-block";

    this.inputtext="我是输入的内容";

    var alertbutton = document.createElement("div");
    alertbutton.id="alertbutton";
    alertbutton.style.margin="12px";
    alertbutton.style.padding="0";
    alertbutton.style.fontSize="14px";
    alertbutton.style.lineHeight="24px";
    alertbutton.style.fontFamily="arial,sans-serif";
    alertbutton.style.textAlign="right";

    var innerbtn_y = document.createElement("button");
    innerbtn_y.id="innerbtn_y";
    innerbtn_y.style.margin="8px";
    innerbtn_y.style.padding="0 24px";
    innerbtn_y.style.color="#000";
    innerbtn_y.style.background="#EEE";
    innerbtn_y.style.border="1px #E6E6E6 solid";
    innerbtn_y.style.display="inline-block";
    innerbtn_y.style.float="left";
    innerbtn_y.innerHTML="ok";
    innerbtn_y.onmouseover=function(){
        innerbtn_y.style.background="#ccc";
        innerbtn_y.style.border="1px #ddd solid";
    }
    innerbtn_y.onmouseout=function(){
        innerbtn_y.style.background="#EEE";
        innerbtn_y.style.border="1px #E6E6E6 solid";
    }
    innerbtn_y.onclick=function(){

        alertframe.style.display="none"
        return 1;

    }

    var innerbtn_n = document.createElement("button");
    innerbtn_n.id="innerbtn_n";
    innerbtn_n.style.margin="8px";
    innerbtn_n.style.padding="0 24px";
    innerbtn_n.style.color="#000";
    innerbtn_n.style.background="#EEE";
    innerbtn_n.style.border="1px #E6E6E6 solid";
    innerbtn_n.style.display="inline-block";
    innerbtn_n.style.float="right";
    innerbtn_n.innerHTML="cancel";
    innerbtn_n.onmouseover=function(){
        innerbtn_n.style.background="#ccc";
        innerbtn_n.style.border="1px #ddd solid";
    }
    innerbtn_n.onmouseout=function(){
        innerbtn_n.style.background="#EEE";
        innerbtn_n.style.border="1px #E6E6E6 solid";
    }
    innerbtn_n.onclick=function(){

        alertframe.style.display="none"
        return 0;

    }

    alertframe.appendChild(alerttitle);
    //alertframe.appendChild(inputtext);
    alertframe.appendChild(alertreturn);
    alertframe.appendChild(alertpart);
    alertframe.appendChild(alertinput);
    alertframe.appendChild(alertbutton);
    alertbutton.appendChild(innerbtn_y);
    alertbutton.appendChild(innerbtn_n);

    document.body.appendChild(bgmask);
    document.body.appendChild(alertframe);

    this.bgmask=bgmask;
    this.alertframe=alertframe;
}
Zialert.prototype.zimsg=function(str,strb,fun){

    //var str=document.getElementById(bgmask)//.style.display="block";
    bgmask.style.display="block";
    alertframe.style.display="block";
    alerttitle.style.display="none";
    alertreturn.style.display="none";
    alertinput.style.display="none";
    alertpart.innerHTML=str;
    innerbtn_y.style.display="none";
    innerbtn_n.innerHTML=strb;
    if(fun!=null){
        innerbtn_n.onclick=fun;
    }
    //return 1;
}
Zialert.prototype.ziconfirm=function(str,by,bn,funy,funn,va){

    bgmask.style.display="block";
    alertframe.style.display="block";
    alerttitle.style.display="block";
    alertreturn.style.display="inline-block";
    alertpart.innerHTML=str;
    if(va!=null){
        alertinput.value=va;
    }
    alertinput.onclick=function(){
        alertinput.value="";
    }
    alertinput.style.display="inline-block";
    alertbutton.style.display="block";
    innerbtn_y.style.display="inline-block";
    if (by!=null)
        innerbtn_y.innerHTML=by;
    innerbtn_n.style.display="inline-block";
    if (bn!=null)
        innerbtn_n.innerHTML=bn;
    if(funy!=null){
        innerbtn_y.onclick=funy;
    }
    if(funn!=null){
        innerbtn_n.onclick=funn;
    }

}
Zialert.prototype.getinput=function(){

    this.inputtext=alertinput.value;//document.getElementById(alertinput).value;
}
Zialert.prototype.zialert=function(str,by,bn,funy,funn){
    bgmask.style.display="block";
    alertframe.style.display="block";
    alerttitle.style.display="block";
    alertreturn.style.display="inline-block";
    alertinput.style.display="none";
    alertpart.innerHTML=str;
    alertbutton.style.display="block";
    innerbtn_n.style.display="inline-block";
    innerbtn_y.style.display="inline-block";
    if (by!=null)
        innerbtn_y.innerHTML=by;
    if (bn!=null)
        innerbtn_n.innerHTML=bn;
    if(funy!=null){
        innerbtn_y.onclick=funy;
    }
    if(funn!=null){
        innerbtn_n.onclick=funn;
    }
}
Zialert.prototype.closeall=function(){
    //document.write("");
    //var hu = document.createElement("div");
    //document.body.appendChild(hu);

    document.body.removeChild(bgmask);
    alertframe.style.width="auto";
    alertframe.style.display="none"
    //document.body.removeChild(alertframe);
    //bgmask.style.display="none";
    //alertframe.style.display="none";
}