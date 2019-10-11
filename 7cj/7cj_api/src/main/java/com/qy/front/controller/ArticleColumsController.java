package com.qy.front.controller;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.model.ArticleColums;
import com.qy.front.service.ArticleColumsService;
import com.qy.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by dyz on 2018/08/08.
*/
@RestController
@RequestMapping("/article/colums")
public class ArticleColumsController {
    @Resource
    private ArticleColumsService articleColumsService;

    @PostMapping("/add")
    public Result add(@RequestBody ArticleColums articleColums) {
        articleColumsService.save(articleColums);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        articleColumsService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody ArticleColums articleColums) {
        articleColumsService.update(articleColums);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        ArticleColums articleColums = articleColumsService.findById(id);
        return ResultGenerator.successResult(articleColums);
    }

    @GetMapping("/list")
    public Result list(PageBean<ArticleColums> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<ArticleColums> list = articleColumsService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
}
