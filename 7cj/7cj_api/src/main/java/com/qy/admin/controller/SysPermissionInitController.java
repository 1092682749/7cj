package com.qy.admin.controller;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.model.SysPermissionInit;
import com.qy.admin.service.SysPermissionInitService;
import com.qy.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by zaq on 2018/07/16.
*/
@RestController
@RequestMapping("/sys/permission/init")
public class SysPermissionInitController {
    @Resource
    private SysPermissionInitService sysPermissionInitService;

    @PostMapping("/add")
    public Result add(@RequestBody SysPermissionInit sysPermissionInit) {
        sysPermissionInitService.save(sysPermissionInit);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        sysPermissionInitService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody SysPermissionInit sysPermissionInit) {
        sysPermissionInitService.update(sysPermissionInit);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        SysPermissionInit sysPermissionInit = sysPermissionInitService.findById(id);
        return ResultGenerator.successResult(sysPermissionInit);
    }

    @GetMapping("/list")
    public Result list(PageBean<SysPermissionInit> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<SysPermissionInit> list = sysPermissionInitService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
}
