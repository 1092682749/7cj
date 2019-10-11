package com.qy.admin.controller;

import com.github.pagehelper.PageHelper;
import com.qy.admin.service.SysUserService;
import com.qy.admin.service.UserExtendService;
import com.qy.base.core.PageBean;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.base.utils.UploadFile;
import com.qy.model.SysUser;
import com.qy.model.UserExtend;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sun.misc.BASE64Encoder;

import javax.annotation.Resource;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
* Created by hang on 2018/07/23.
*/
@RestController
@RequestMapping("/user/extend")
public class UserExtendController {

    @Autowired
    private SysUserService sysUserService;

    @Resource
    private UserExtendService userExtendService;

    @PostMapping("/add")
    public Result add(@RequestBody UserExtend userExtend) {
        userExtendService.save(userExtend);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        userExtendService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody UserExtend userExtend) {


//        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm");
//        String addtime = format.format(new Date());

        SysUser user = (SysUser) SecurityUtils.getSubject().getPrincipal();

        if(userExtend.getInfo() != null){

            String url = UploadFile.uploadBase64(userExtend.getInfo());

            userExtend.setInfo("../"+url.substring(2,url.length() - 2));
            user.setHeader("../"+url.substring(2,url.length() - 2));

        }
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


        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        UserExtend userExtend = userExtendService.findById(id);
        return ResultGenerator.successResult(userExtend);
    }

    @GetMapping("/list")
    public Result list(PageBean<UserExtend> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<UserExtend> list = userExtendService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }

    @GetMapping("/userextend")
    public Result userextend(PageBean<UserExtend> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());

        SysUser user = (SysUser) SecurityUtils.getSubject().getPrincipal();


        List<UserExtend> list = userExtendService.findUserByUid(user.getId());

//        UserExtend  userExtend =userExtendService.findByIds(user.getId());
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
//    @PostMapping("/upHeaderImg")
//    public Result upHeaderImg(@RequestBody File file){
//        Map<String,String> map = new HashMap<>();
//
//        FileInputStream inputFile = null;
//        try {
//            inputFile = new FileInputStream(file);
//        } catch (FileNotFoundException e) {
//            e.printStackTrace();
//        }
//        byte[] buffer = new byte[(int)file.length()];
//        try {
//            inputFile.read(buffer);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        try {
//            inputFile.close();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        String base64File = new BASE64Encoder().encode(buffer);
//        String url = UploadFile.uploadSingleBase64(base64File);
//        map.put("url",url);
//        return ResultGenerator.successResult(map);
//    }
}
