package com.qy.admin.controller;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.model.SysUserRole;
import com.qy.admin.service.SysUserRoleService;
import com.qy.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by zaq on 2018/07/16.
*/
@RestController
@RequestMapping("/sys/user/role")
public class SysUserRoleController {
    @Resource
    private SysUserRoleService sysUserRoleService;

    @PostMapping("/add")
    public Result add(@RequestBody SysUserRole sysUserRole) {
        sysUserRoleService.save(sysUserRole);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        sysUserRoleService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody SysUserRole sysUserRole) {
        sysUserRoleService.update(sysUserRole);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        SysUserRole sysUserRole = sysUserRoleService.findById(id);
        return ResultGenerator.successResult(sysUserRole);
    }

    @GetMapping("/list")
    public Result list(PageBean<SysUserRole> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<SysUserRole> list = sysUserRoleService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
}
