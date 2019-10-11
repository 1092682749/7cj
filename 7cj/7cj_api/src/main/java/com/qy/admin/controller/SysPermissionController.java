package com.qy.admin.controller;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.model.SysPermission;
import com.qy.admin.service.SysPermissionService;
import com.qy.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by zaq on 2018/07/16.
*/
@RestController
@RequestMapping("/sys/permission")
public class SysPermissionController {
    @Resource
    private SysPermissionService sysPermissionService;

    @PostMapping("/add")
    public Result add(@RequestBody SysPermission sysPermission) {
        sysPermissionService.save(sysPermission);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        sysPermissionService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody SysPermission sysPermission) {
        sysPermissionService.update(sysPermission);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        SysPermission sysPermission = sysPermissionService.findById(id);
        return ResultGenerator.successResult(sysPermission);
    }

    @GetMapping("/list")
    public Result list(PageBean<SysPermission> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<SysPermission> list = sysPermissionService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
}
