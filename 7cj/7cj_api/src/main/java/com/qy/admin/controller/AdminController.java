package com.qy.admin.controller;

import com.alibaba.fastjson.JSON;
import com.qy.admin.service.SysUserService;
import com.qy.admin.service.UserExtendService;
import com.qy.base.core.Constants;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.model.SysUser;
import com.qy.model.UserExtend;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.*;


@RestController
public class AdminController {

    @Autowired
    SysUserService sysUserService;

    @Autowired
    UserExtendService userExtendService;


    @RequestMapping(value = "islogin")
    public Map<String, Object> isLogin() {

        System.out.println("登录验证");

        Map<String, Object> resultMap = new LinkedHashMap<String, Object>();

        SysUser sysUser = (SysUser) SecurityUtils.getSubject().getPrincipal();

        SysUser user = sysUserService.findUserById(sysUser.getId());

        if (SecurityUtils.getSubject().isAuthenticated()) {
            System.out.println("已登录");
            resultMap.put("islogin", "login");
            resultMap.put("header", user.getHeader());
        } else {
            resultMap.put("islogin", "noLogin");
            System.out.println("未登录");
        }

        return resultMap;
    }

//    @RequestMapping(value = "admin", method = RequestMethod.GET)
//    public ModelAndView admin() {
//        return new ModelAndView("admin/index");
//    }

    @RequestMapping(value = "sys/user/forbid", method = RequestMethod.GET)
    public Result forbid(String id) {

        SysUser sysUser = sysUserService.findUserById(id);
        if (sysUser.getStatus().equals("0")) {
            sysUser.setStatus("1");
        } else {
            sysUser.setStatus("0");
        }
        sysUserService.update(sysUser);
        return ResultGenerator.successResult();
    }

//    @RequestMapping(value = "sys/user/allow",method = RequestMethod.GET)
//    public Result allow(String id){
//
//        SysUser sysUser = new SysUser();
//        sysUser.setId(id);
//        sysUser.setStatus("1");
//        sysUserService.update(sysUser);
//        return ResultGenerator.successResult();
//    }
//

    protected static String getDate() {
        Date currentTime = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMdd");
        return simpleDateFormat.format(currentTime);
    }

    @RequestMapping("/userAndUserExtend/upload/picture")
    public void uploadPicture(HttpServletRequest request, HttpServletResponse response) throws Exception {



        SysUser user = (SysUser) SecurityUtils.getSubject().getPrincipal();

        request.setCharacterEncoding("utf-8");  //设置编码

        String randomName = UUID.randomUUID().toString() + ".jpg";
        String imageName = getDate() + "/" + randomName;
        //服务器真正存放的路径
        String fileName = Constants.PATH_IMAGE_PATH + imageName;
        // 保存图片到本地
        File file = new File(fileName);
        if (!file.getParentFile().exists()) {
            file.getParentFile().mkdirs();
        }

            OutputStream out = new FileOutputStream(file);
            InputStream in = request.getPart("file").getInputStream();
            int length = 0;
            byte[] buf = new byte[1024];
//             in.read(buf); 每次读到的数据存放在buf 数组中
            while ((length = in.read(buf)) != -1) {
//                //在buf数组中取出数据写到（输出流）磁盘上
                out.write(buf, 0, length);
            }
            in.close();
            out.close();

        UserExtend userExtend = new UserExtend();
        userExtend.setInfo(fileName);
        user.setHeader(fileName);

        user.setUsername(userExtend.getNickname());
        user.setLast_update_time(new Date());

        sysUserService.update(user);



        userExtend.setUid(user.getId());
        userExtend.setId(user.getId());
//        userExtendService.findbyUid();
        try{
            userExtendService.save(userExtend);
        }catch (Exception e){
            userExtendService.update(userExtend);
//            userExtendService.updateByUid(userExtend);
        }


        PrintWriter printWriter = response.getWriter();
        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");
        HashMap<String, Object> res = new HashMap<String, Object>();



        res.put("success", true);
        res.put("url",fileName);


        printWriter.write(JSON.toJSONString(res));
        printWriter.flush();

    }


    @RequestMapping("/sys/getadminfountid")
    public Result getadminfountid(String aid){

        SysUser user = sysUserService.findAdminFountId(aid);
//        user.getId();
        return ResultGenerator.successResult(user);
    }
}
