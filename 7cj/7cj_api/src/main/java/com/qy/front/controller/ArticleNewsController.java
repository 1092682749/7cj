package com.qy.front.controller;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.model.ArticleNews;
import com.qy.front.service.ArticleNewsService;
import com.qy.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by dyz on 2018/08/08.
*/
@RestController
@RequestMapping("/article/news")
public class ArticleNewsController {
    @Resource
    private ArticleNewsService articleNewsService;

    @PostMapping("/add")
    public Result add(@RequestBody ArticleNews articleNews) {
        articleNewsService.save(articleNews);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        articleNewsService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody ArticleNews articleNews) {
        articleNewsService.update(articleNews);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        ArticleNews articleNews = articleNewsService.findById(id);
        return ResultGenerator.successResult(articleNews);
    }

    @GetMapping("/list")
    public Result list(PageBean<ArticleNews> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<ArticleNews> list = articleNewsService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
}
