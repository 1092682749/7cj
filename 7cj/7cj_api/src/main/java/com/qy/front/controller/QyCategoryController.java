package com.qy.front.controller;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.front.service.ArticleService;
import com.qy.model.QyCategory;
import com.qy.front.service.QyCategoryService;
import com.qy.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Locale;

/**
* Created by dyz on 2018/08/04.
*/
@RestController
@RequestMapping("/category")
public class QyCategoryController {
    @Resource
    private QyCategoryService qyCategoryService;

    @Resource
    private ArticleService articleService;

    @PostMapping("/add")
    public Result add(@RequestBody QyCategory qyCategory) {
        qyCategoryService.save(qyCategory);
        return ResultGenerator.successResult();
    }

    @RequestMapping("/delete")
    public Result delete(Integer id) {
//        articleService.findArticleByCategory();
        Integer count = qyCategoryService.findCountById(id);
        if (count>0){
            return ResultGenerator.errResult(400,"该分类下有文章不能删除");
        }
        qyCategoryService.deleteById(id);
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody QyCategory qyCategory) {
        qyCategoryService.update(qyCategory);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        QyCategory qyCategory = qyCategoryService.findById(id);
        return ResultGenerator.successResult(qyCategory);
    }

    @GetMapping("/list")
    public Result list(PageBean<QyCategory> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<QyCategory> list = qyCategoryService.findAll();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }
    @RequestMapping("/getAllCategory")
    public List<QyCategory> getAllCategory(){
        return qyCategoryService.findAll();
    }
}
