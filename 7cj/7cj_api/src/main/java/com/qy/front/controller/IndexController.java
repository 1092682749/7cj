package com.qy.front.controller;

import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.base.utils.UploadFile;
import com.qy.front.service.ArticleService;
import com.qy.model.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/front")
public class IndexController {

    @Autowired
    ArticleService articleService;

    @RequestMapping("/index")
    public ModelAndView index(){
        ModelAndView mav = new ModelAndView("front/index");
//        List<Article> articles = articleService.findAll();
//        mav.addObject(articles);
        return mav;
    }

    @RequestMapping("/getArticles")
    public @ResponseBody List<Article> getArticle(){
        return articleService.findAll();
    }

    @RequestMapping("/editor")
    public String editor(){
        return "front/editor";
    }

    @RequestMapping("/uploadFile")
    public @ResponseBody
    String uploadFile(String file){
        String str = UploadFile.uploadBase64(file);
        return str;
    }
    @RequestMapping("/sysUploadFile")
    public @ResponseBody Result sysUploadFile(String file){
        String str = UploadFile.uploadBase64(file);
        return ResultGenerator.successResult(str);
    }

}
