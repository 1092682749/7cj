package com.qy.admin.controller;
import com.qy.admin.service.SysRoleService;
import com.qy.admin.service.SysUserRoleService;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.model.SysUser;
import com.qy.admin.service.SysUserService;
import com.qy.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import com.qy.model.SysUserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
* Created by zaq on 2018/07/16.
*/
@RestController
@RequestMapping("/sys/user")
public class SysUserController {
    @Resource
    private SysUserService sysUserService;

    @Autowired
    SysUserRoleService sysUserRoleService;

    @Autowired
    SysRoleService roleService;

    @PostMapping("/add")
    public Result add(@RequestBody SysUser sysUser) {
        sysUserService.save(sysUser);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody String id) {
        SysUser user = new SysUser();
        user.setId(id);
        sysUserService.delete(user);
        System.out.println("删除成功");
//            sysUserService.deleteByIds(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody SysUser sysUser) {
        sysUserService.update(sysUser);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        SysUser sysUser = sysUserService.findById(id);
        return ResultGenerator.successResult(sysUser);
    }

    @GetMapping("/list")
    public Result list(PageBean<SysUser> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<SysUser> list = sysUserService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }

    @PostMapping("/listUserRole")
    public Result listUserRole(String uid) {
        List<Map> list = sysUserRoleService.findRoleByUid(uid);
        return ResultGenerator.successResult(list);
    }
}
