package com.qy.front.controller;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.model.QyUpordown;
import com.qy.front.service.QyUpordownService;
import com.qy.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by dyz on 2018/07/29.
*/
@RestController
@RequestMapping("/qy/upordown")
public class QyUpordownController {
    @Resource
    private QyUpordownService qyUpordownService;

    @PostMapping("/add")
    public Result add(@RequestBody QyUpordown qyUpordown) {
        qyUpordownService.save(qyUpordown);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        qyUpordownService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody QyUpordown qyUpordown) {
        qyUpordownService.update(qyUpordown);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        QyUpordown qyUpordown = qyUpordownService.findById(id);
        return ResultGenerator.successResult(qyUpordown);
    }

    @GetMapping("/list")
    public Result list(PageBean<QyUpordown> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<QyUpordown> list = qyUpordownService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
}
