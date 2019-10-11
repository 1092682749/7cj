package com.qy.admin.controller;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.model.SysRolePermission;
import com.qy.admin.service.SysRolePermissionService;
import com.qy.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by zaq on 2018/07/16.
*/
@RestController
@RequestMapping("/sys/role/permission")
public class SysRolePermissionController {
    @Resource
    private SysRolePermissionService sysRolePermissionService;

    @PostMapping("/add")
    public Result add(@RequestBody SysRolePermission sysRolePermission) {
        sysRolePermissionService.save(sysRolePermission);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        sysRolePermissionService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody SysRolePermission sysRolePermission) {
        sysRolePermissionService.update(sysRolePermission);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        SysRolePermission sysRolePermission = sysRolePermissionService.findById(id);
        return ResultGenerator.successResult(sysRolePermission);
    }

    @GetMapping("/list")
    public Result list(PageBean<SysRolePermission> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<SysRolePermission> list = sysRolePermissionService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }


}
