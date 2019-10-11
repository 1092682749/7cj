package com.qy.admin.controller;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.model.SysRole;
import com.qy.admin.service.SysRoleService;
import com.qy.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by zaq on 2018/07/16.
*/
@RestController
@RequestMapping("/sys/role")
public class SysRoleController {
    @Resource
    private SysRoleService sysRoleService;

    @PostMapping("/add")
    public Result add(@RequestBody SysRole sysRole) {
        sysRoleService.save(sysRole);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        sysRoleService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody SysRole sysRole) {
        sysRoleService.update(sysRole);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        SysRole sysRole = sysRoleService.findById(id);
        return ResultGenerator.successResult(sysRole);
    }

    @GetMapping("/list")
    public Result list(PageBean<SysRole> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<SysRole> list = sysRoleService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
}
