package com.qy.front.controller;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.model.ArticlePeople;
import com.qy.front.service.ArticlePeopleService;
import com.qy.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
* Created by dyz on 2018/08/08.
*/
@RestController
@RequestMapping("/article/people")
public class ArticlePeopleController {
    @Resource
    private ArticlePeopleService articlePeopleService;

    @PostMapping("/add")
    public Result add(@RequestBody ArticlePeople articlePeople) {
        articlePeopleService.save(articlePeople);
        return ResultGenerator.successResult();
    }

    @PostMapping("/delete")
    public Result delete(@RequestBody Integer id) {
        articlePeopleService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody ArticlePeople articlePeople) {
        articlePeopleService.update(articlePeople);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        ArticlePeople articlePeople = articlePeopleService.findById(id);
        return ResultGenerator.successResult(articlePeople);
    }

    @GetMapping("/list")
    public Result list(PageBean<ArticlePeople> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<ArticlePeople> list = articlePeopleService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
}
