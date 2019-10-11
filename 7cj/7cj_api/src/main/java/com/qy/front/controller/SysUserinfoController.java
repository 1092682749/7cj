package com.qy.front.controller;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.model.SysUserinfo;
import com.qy.front.service.SysUserinfoService;
import com.qy.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by dyz on 2018/07/23.
*/
@RestController
@RequestMapping("/sys/userinfo")
public class SysUserinfoController {
    @Resource
    private SysUserinfoService sysUserinfoService;

    @PostMapping("/add")
    public Result add(@RequestBody SysUserinfo sysUserinfo) {
        sysUserinfoService.save(sysUserinfo);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        sysUserinfoService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody SysUserinfo sysUserinfo) {
        sysUserinfoService.update(sysUserinfo);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        SysUserinfo sysUserinfo = sysUserinfoService.findById(id);
        return ResultGenerator.successResult(sysUserinfo);
    }

    @GetMapping("/list")
    public Result list(PageBean<SysUserinfo> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<SysUserinfo> list = sysUserinfoService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
}
