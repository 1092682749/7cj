package com.qy.admin.controller;

import com.qy.admin.service.SysUserService;
import com.qy.admin.service.UserExtendService;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.base.utils.MyMD5;
import com.qy.model.SysUser;
import com.qy.model.UserExtend;
import com.qy.shiro.ShiroService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Controller
public class LoginController {

    @Autowired
    ShiroService shiroService;
    @Autowired
    SysUserService sysUserService;

    @Autowired
    private UserExtendService userExtendService;

    @RequestMapping("/")
    public String show(){
        return "front/index";
    }

    //首页
    @RequestMapping(value="index")
    public String index(HttpSession session) {
        return "front/index";
    }

    //登录
    @RequestMapping(value="login")
    public String login() {
        return "front/login";
    }

    //登录
    @RequestMapping(value="regis")
    public String regis() {
        return "front/regis";
    }

    //权限测试用
    @RequestMapping(value="add")
    public String add() {
        return "add";
    }

    //未授权跳转的页面
    @RequestMapping(value="403")
    public String noPermissions() {
        return "403";
    }

    //更新权限
    @RequestMapping(value="updatePermission")
    @ResponseBody
    public String updatePermission() {
        shiroService.updatePermission();
        return "true";
    }

    //踢出用户
    @RequestMapping(value="kickouting")
    @ResponseBody
    public String kickouting() {

        return "kickout";
    }

    //被踢出后跳转的页面
    @RequestMapping(value="kickout")
    public String kickout() {
        return "kickout";
    }

    /**
     * ajax登录请求
     * @param username
     * @param password
     * @return
     */
    @RequestMapping(value="ajaxRegister",method=RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> submitRegister(String username, String password,String vcode) {

        System.out.println(username+password);
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();

        vcode = "1234";

        if(!vcode.equals("1234")){
            resultMap.put("status", 500);
            resultMap.put("message", "验证码错误！");
            return resultMap;
        }else {
            SysUser sysUser = new SysUser();
            sysUser.setPhone_number(username);
            sysUser.setUsername(username);
            sysUser.setPassword(MyMD5.myMD5(password+username));

            List<SysUser> userList = sysUserService.findUserByPhone(username);
            if (userList.size()>0){
                resultMap.put("status", 500);
                resultMap.put("message", "该手机号已注册");

                System.out.println(userList.size());
            }else {
                sysUserService.save(sysUser);


                resultMap.put("status", 200);
                resultMap.put("message", "成功");

            }
//            sysUserService.save(sysUser);
//
//
//            resultMap.put("status", 200);
//            resultMap.put("message", "成功");
        }


        return resultMap;
    }


    @RequestMapping(value="/sys/ajaxRegisterMoble",method=RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> submitRegisterMoble(@RequestBody SysUser sysUser1) {


        String username = sysUser1.getUsername();
        String password = sysUser1.getPassword();
        System.out.println(username+password);
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();

        String vcode = "1234";

        if(!vcode.equals("1234")){
            resultMap.put("status", 500);
            resultMap.put("message", "验证码错误！");
            return resultMap;
        }else {
            SysUser sysUser = new SysUser();
            sysUser.setPhone_number(username);
            sysUser.setUsername(username);
            sysUser.setPassword(MyMD5.myMD5(password+username));

            List<SysUser> userList = sysUserService.findUserByPhone(username);
            if (userList.size()>0){
                resultMap.put("status", 500);
                resultMap.put("message", "该手机号已注册");

                System.out.println(userList.size());
            }else {
                sysUserService.save(sysUser);


                resultMap.put("status", 200);
                resultMap.put("message", "成功");

            }
//            sysUserService.save(sysUser);
//
//
//            resultMap.put("status", 200);
//            resultMap.put("message", "成功");
        }


        return resultMap;
    }

    @RequestMapping(value="/sys/ajaxLoginMoble",method=RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> submitLoginMoble(@RequestBody SysUser sysUser1) {

        String phone_number = sysUser1.getPhone_number();
        String password = sysUser1.getPassword();

        System.out.println(phone_number+password);
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();

//        if(!vcode.equals("1234")){
//            resultMap.put("status", 500);
//            resultMap.put("message", "验证码错误！");
//            return resultMap;
//        }

        try {
            UsernamePasswordToken token = new UsernamePasswordToken(phone_number, password);
            SecurityUtils.getSubject().login(token);
            resultMap.put("status", 200);
            resultMap.put("message", "登录成功");

//            UserExtend userExtend = new UserExtend();
//
//            SysUser user = (SysUser) SecurityUtils.getSubject().getPrincipal();
//            userExtend.setUid(user.getId());
//
//            userExtendService.save(userExtend);

        } catch (Exception e) {
            resultMap.put("status", 500);
            resultMap.put("message", e.getMessage());
        }
        return resultMap;
    }

    @RequestMapping(value="ajaxLogin",method=RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> submitLogin(String phone_number, String password) {

        System.out.println(phone_number+password);
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();

//        if(!vcode.equals("1234")){
//            resultMap.put("status", 500);
//            resultMap.put("message", "验证码错误！");
//            return resultMap;
//        }

        try {
            UsernamePasswordToken token = new UsernamePasswordToken(phone_number, password);
            SecurityUtils.getSubject().login(token);
            resultMap.put("status", 200);
            resultMap.put("message", "登录成功");

//            UserExtend userExtend = new UserExtend();
//
//            SysUser user = (SysUser) SecurityUtils.getSubject().getPrincipal();
//            userExtend.setUid(user.getId());
//
//            userExtendService.save(userExtend);

        } catch (Exception e) {
            resultMap.put("status", 500);
            resultMap.put("message", e.getMessage());
        }
        return resultMap;
    }



    /**
     * 退出
     * @return
     */
    @RequestMapping(value="logout",method =RequestMethod.GET)
    @ResponseBody
    public Map<String,Object> logout(){
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        try {
            //退出
            SecurityUtils.getSubject().logout();
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
        return resultMap;
    }

    @RequestMapping(value = "testapi",method = RequestMethod.GET)
    public Result test(){
        return ResultGenerator.successResult("载荷");
    }

    @RequestMapping("/ajaxbindPhone")
    @ResponseBody
    public Map<String,Object> bindPhone(String id,String phone){
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        SysUser user =new SysUser();
        user.setId(id);
        user.setPhone_number(phone);

        try {
            sysUserService.update(user);
            resultMap.put("status",200);
            resultMap.put("message","绑定成功");

        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
        return resultMap;
    }


    @RequestMapping("/ajaxAlterpass")
    @ResponseBody
    public Map<String,Object> ajaxAlterpass(String id,String password,String vcode){
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();

        vcode = "1234";

        if (!vcode.equals("1234")){
            resultMap.put("code",500);
            resultMap.put("message","修改失败");
            return resultMap;
        }
        String username = ((SysUser)SecurityUtils.getSubject().getPrincipal()).getPhone_number();
        SysUser user =(SysUser)SecurityUtils.getSubject().getPrincipal();
//        user.setId(id);
        user.setPassword(MyMD5.myMD5(password+username));

        try {
            sysUserService.update(user);

            resultMap.put("status",200);
            resultMap.put("message","修改成功");
        } catch (Exception e) {

            resultMap.put("status",500);
            resultMap.put("message",e.getMessage());
            System.err.println(e.getMessage());
        }
        return resultMap;
    }

    @RequestMapping("/sys/ajaxAlterpassMoble")
    @ResponseBody
    public Map<String,Object> ajaxAlterpassMoble(@RequestBody SysUser sysUser1){
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        String password = sysUser1.getPassword();

        String username = ((SysUser)SecurityUtils.getSubject().getPrincipal()).getPhone_number();
        SysUser user =(SysUser)SecurityUtils.getSubject().getPrincipal();
//        user.setId(id);
        user.setPassword(MyMD5.myMD5(password+username));

        try {
            sysUserService.update(user);

            resultMap.put("status",200);
            resultMap.put("message","修改成功");
        } catch (Exception e) {

            resultMap.put("status",500);
            resultMap.put("message",e.getMessage());
            System.err.println(e.getMessage());
        }
        return resultMap;
    }

    @RequestMapping("/getUserIdPhoneForAlter")
    @ResponseBody
    public Map<String,Object> getUserIdPhoneForAlter(){
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();
        String userID;
        try {
//获取登陆信息
            SysUser user = (SysUser) SecurityUtils.getSubject().getPrincipal();
            userID = user.getId();
            user = sysUserService.findUserById(userID);

            resultMap.put("userID",user.getPhone_number());
            resultMap.put("userPhone",user.getPhone_number());
            System.out.println(user.getId());
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
        return resultMap;
    }


    @RequestMapping("/sys/ajaxForgotpass")
    @ResponseBody
    public Map<String,Object> ajaxForgotpass(String phone,String password,String vcode){
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();

        vcode = "1234";

        if (!vcode.equals("1234")){
            resultMap.put("code",500);
            resultMap.put("message","修改失败");
            return resultMap;
        }

//        String username = ((SysUser)SecurityUtils.getSubject().getPrincipal()).getPhone_number();
//        SysUser user =(SysUser)SecurityUtils.getSubject().getPrincipal();
//        user.setId(id);
        List<SysUser> userList = sysUserService.findUserByPhone(phone);

        SysUser user = userList.get(0);
        user.setPassword(MyMD5.myMD5(password+user.getPhone_number()));

        try {
            sysUserService.update(user);

            resultMap.put("status",200);
            resultMap.put("message","修改成功");
        } catch (Exception e) {

            resultMap.put("status",500);
            resultMap.put("message",e.getMessage());
            System.err.println(e.getMessage());
        }
        return resultMap;
    }

    @RequestMapping("/sys/ajaxForgotpassMoble")
    @ResponseBody
    public Map<String,Object> ajaxForgotpassMoble(@RequestBody SysUser sysUser1){
        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();

        String phone = sysUser1.getPhone_number();
        String password = sysUser1.getPassword();

//        String username = ((SysUser)SecurityUtils.getSubject().getPrincipal()).getPhone_number();
//        SysUser user =(SysUser)SecurityUtils.getSubject().getPrincipal();
//        user.setId(id);
        List<SysUser> userList = sysUserService.findUserByPhone(phone);

        SysUser user = userList.get(0);
        user.setPassword(MyMD5.myMD5(password+user.getPhone_number()));

        try {
            sysUserService.update(user);

            resultMap.put("status",200);
            resultMap.put("message","修改成功");
        } catch (Exception e) {

            resultMap.put("status",500);
            resultMap.put("message",e.getMessage());
            System.err.println(e.getMessage());
        }
        return resultMap;
    }

    @RequestMapping("sys/forgotPass")
    public String forgotPass(){
        return "front/forgotPass";
    }


    @RequestMapping("/sys/test/test")
    public String tttttt(){
        return "admin/personal";
    }


}
