package com.qy.biz.controller;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.biz.model.BizPermissions;
import com.qy.biz.service.BizPermissionsService;
import com.qy.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by sxd on 2018/07/21.
*/
@RestController
@RequestMapping("/biz/permissions")
public class BizPermissionsController {
    @Resource
    private BizPermissionsService bizPermissionsService;

    @PostMapping("/add")
    public Result add(@RequestBody BizPermissions bizPermissions) {
        bizPermissionsService.save(bizPermissions);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        bizPermissionsService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody BizPermissions bizPermissions) {
        bizPermissionsService.update(bizPermissions);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        BizPermissions bizPermissions = bizPermissionsService.findById(id);
        return ResultGenerator.successResult(bizPermissions);
    }

    @GetMapping("/list")
    public Result list(PageBean<BizPermissions> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<BizPermissions> list = bizPermissionsService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
}
