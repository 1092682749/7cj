package com.qy.front.controller;

import com.google.common.annotations.VisibleForTesting;
import com.qy.admin.service.SysUserService;
import com.qy.admin.service.UserExtendService;
import com.qy.base.core.Result;
import com.qy.base.core.ResultGenerator;
import com.qy.base.utils.UploadFile;
import com.qy.base.utils.alipay.util.httpClient.HttpRequest;
import com.qy.base.utils.alipay.util.httpClient.HttpResponse;
import com.qy.front.service.QyUpordownService;
import com.qy.front.utils.GenerateImage;
import com.qy.model.Article;
import com.qy.front.service.ArticleService;
import com.qy.base.core.PageBean;
import com.github.pagehelper.PageHelper;
import com.qy.model.QyUpordown;
import com.qy.model.SysUser;
import com.qy.model.UserExtend;
import net.sf.json.JSONObject;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.annotation.RequiresUser;
import org.apache.shiro.session.mgt.eis.MemorySessionDAO;
import org.apache.shiro.session.mgt.eis.SessionDAO;
import org.apache.shiro.subject.Subject;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.imageio.ImageIO;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.List;
import java.util.logging.Logger;

/**
* Created by zaq on 2018/07/18.
*/
@Controller
//@RequestMapping("")
public class ArticleController {
    @Resource
    private ArticleService articleService;
    @Resource
    private SysUserService sysUserService;
    @Resource
    private UserExtendService userExtendService;
    @Resource
    private QyUpordownService upordownService;

    @PostMapping("/front/article/add")
    public Result add(@RequestBody Article article) {
        articleService.save(article);
        return ResultGenerator.successResult();
    }

    @RequestMapping("/sys/article/delete")
    public @ResponseBody Result delete(@RequestBody Article article) {
        articleService.deleteById(article.getAid());
        return ResultGenerator.successResult();
    }

    @PostMapping("/update")
    public Result update(@RequestBody Article article) {
        articleService.update(article);
        return ResultGenerator.successResult();
    }

    @GetMapping("/detail")
    public Result detail(@RequestParam Integer id) {
        Article article = articleService.findById(id);
        return ResultGenerator.successResult(article);
    }

    @GetMapping("/list")
    public @ResponseBody Result list(PageBean<Article> page) {
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<Article> list = articleService.findAllDESC();
        page.setList(list);
        return ResultGenerator.successResult(page);
    }

    @RequestMapping("/article/uploadArticle")
    public @ResponseBody Result uploadArticle(@RequestBody Article article){
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String addtime = format.format(new Date());
        String url = UploadFile.uploadBase64(article.getCoverimg());
        SysUser user = (SysUser) SecurityUtils.getSubject().getPrincipal();
        article.setCoverimg("../"+url.substring(2,url.length() - 2));
        article.setUid(user.getId());
        article.setAddtime(addtime);
        article.setReadnumber(0);
        article.setState(2);
        article.setIsbanner(0);
        articleService.save(article);
        if(article.getCategory() == 7){
            QyUpordown upordown = new QyUpordown();
            upordown.setAid(articleService.findIdByAllInfo(article));
            upordown.setUp(0);
            upordown.setDown(0);
            upordownService.save(upordown);
        }
        return ResultGenerator.successResult(article);
    }
    @RequestMapping("/front/article/findAllBanner")
    public @ResponseBody List<Article> findAllBanner(){
        return articleService.findAllBanner();
    }
    @RequestMapping("/front/article/findAllArticleByDESC")
    public @ResponseBody List<Map<String,Object>> findAllArticleByDESC(@RequestParam(defaultValue = "0",name = "pageStart") Integer pageStart){
        Integer start = pageStart * 5;
        List<Map<String,Object>> map = articleService.findAllArticleByDESC(start);
        return map;
    }

    @RequestMapping("/front/article/findArticleByHot")
    public @ResponseBody List<Map<String,Object>> findAllArticleByHot(@RequestParam(defaultValue = "0",name = "pageStart") Integer pageStart){
        Integer start = pageStart * 5;
        List<Map<String,Object>> map = articleService.findArticleByHot(start);
        return map;
    }



    @RequestMapping("/front/article/getAllArticleById")
    public @ResponseBody Map<String,Object> getAllArticleById(Integer id,HttpSession session){
        if (id == null){
            id = (Integer) session.getAttribute("articleId");
        }
        Article article = articleService.findById(id);
        List<Article> articles = articleService.getAllArticleById(id);
        SysUser user = sysUserService.findUserById(article.getUid());
        Integer index = articles.indexOf(article);
        Article preArticle = new Article();
        preArticle.setAtitle("没有上一篇");
        preArticle.setAid(-1);
        Article nextArticle = new Article();
        nextArticle.setAtitle("没有下一篇");
        nextArticle.setAid(-1);
        nextArticle  = index - 1 >= 0 ? articles.get(index-1) : nextArticle;
        preArticle = index + 1 < articles.size() ? articles.get(index + 1) : preArticle;
        Map<String,Object> uAa = new HashMap<>();
        uAa.put("user",user);
        uAa.put("article",article);
        uAa.put("preArticle",preArticle);
        uAa.put("nextArticle",nextArticle);
        uAa.put("articleCount",articleService.findUserArticleCount(user.getId()));
        uAa.put("allViewCount",articleService.getAllViewCount(user.getId()));
        return uAa;
    }

    @RequestMapping("/front/article/getArticleById")
    public @ResponseBody Map<String,Object> getArticle(@SessionAttribute("articleId") Integer id, HttpSession session){
//        session.removeAttribute("articleId");
        Article article = articleService.findById(id);
        SysUser user = sysUserService.findUserById(article.getUid());
//        article.setReadnumber(article.getReadnumber()+1);
        List<Article> articles;
        if (article.getState() != 1){
            articles = articleService.findUserAllStateArticle(user.getId());
        }else {
            articles = articleService.findArticleByUserId(user.getId());
        }
//        System.out.println(article);
//        System.out.println(articles.get(0));
        Integer index = articles.indexOf(article);
        Article preArticle = new Article();
        preArticle.setAtitle("没有上一篇");
        preArticle.setAid(-1);
        Article nextArticle = new Article();
        nextArticle.setAtitle("没有下一篇");
        nextArticle.setAid(-1);
        nextArticle  = index - 1 >= 0 ? articles.get(index-1) : nextArticle;
        preArticle = index + 1 < articles.size() ? articles.get(index + 1) : preArticle;
        Map<String,Object> uAa = new HashMap<>();
        uAa.put("user",user);
        uAa.put("article",article);
        uAa.put("preArticle",preArticle);
        uAa.put("nextArticle",nextArticle);
        uAa.put("articleCount",articles.size());
        uAa.put("allViewCount",articleService.getAllViewCount(user.getId()));
        return uAa;
    }

    @RequestMapping("/readArticle")
    public String readArticle(Integer id, HttpSession session){
        session.setAttribute("articleId",id);
        Article article = articleService.findById(id);
        if (article.getState() == 1){
            if (session.getAttribute("readList") == null){
                List<Integer> readList = new LinkedList<>();
                session.setAttribute("readList",readList);
            }
            List<Integer> readList = (List<Integer>) session.getAttribute("readList");
            if (!readList.contains(id)) {
                readList.add(id);
                session.setAttribute("readList", readList);
                article.setReadnumber(article.getReadnumber() + 1);
                articleService.update(article);
            }
        }else {
        }
        return "front/articleDetail";
    }

    @RequestMapping("/moreArticle")
    public String moreArticle(){
        return "front/moreArticle";
    }

    @RequestMapping("/front/article/findUserArticleDESC")
    public @ResponseBody List<Map<String,Object>> findUserArticleDESC(@SessionAttribute("articleId")Integer id,
                                                           @RequestParam(defaultValue = "0",name = "pageStart") Integer pageStart){
        Integer start = pageStart * 5;
        List<Map<String,Object>> articles = articleService.findUserArticleDESC(articleService.findById(id).getUid(),start);
        return articles;
    }
    @RequestMapping("/front/article/findUserInfoByArticleId")
    public @ResponseBody Map<String,Object> findUserByArticleId(@SessionAttribute("articleId")Integer id){
        Article article = articleService.findById(id);
        Map<String,Object> map = new HashMap<>();
        SysUser user = sysUserService.findUserById(article.getUid());
        Integer articleCount = articleService.findUserArticleCount(article.getUid());
        map.put("user",user);
        map.put("articleCount",articleCount);
        map.put("allViewCount",articleService.getAllViewCount(user.getId()));
        return map;
    }
//    通过文章id找到用户
    @RequestMapping("/front/article/findUserByArticleId")
    public @ResponseBody SysUser findUserArticleId(String id){
        SysUser user = sysUserService.findUserById(id);
        return user;
    }
    //写文章接口
    @RequestMapping("/article/writeArticle")
    public String writeArticle(){
        return "front/editor";
    }

    //后端改变
    @RequestMapping("/sysChangeArticleState")
    public @ResponseBody Result changeArticleState(Integer state,Integer id){
        Article article = articleService.findById(id);
        article.setState(state);
        articleService.update(article);
        return ResultGenerator.successResult(article);
    }
    //后台改变文章审核状态接口
    @RequestMapping("/sysCheckArticle")
    public @ResponseBody Result checkArticle(Integer state,Integer id){
        Article article = articleService.findById(id);
        article.setState(state);
        articleService.update(article);
        return ResultGenerator.successResult();
    }

    //后台审核文章接口
    @RequestMapping("/sysReadArticle")
    public @ResponseBody Article readArticle(Integer id){
        Article article = articleService.findById(id);
        return article;
    }
    //个人中心文章接口
    @RequestMapping("/front/article/myAllArticle")
    public @ResponseBody List<Article> myAllArticle(@RequestParam(defaultValue = "0",name = "pageStart")Integer pageStart){
        SysUser user = (SysUser) SecurityUtils.getSubject().getPrincipal();
        Integer page = pageStart * 5;
        List<Article> articles = articleService.findMyArticleDESC(user.getId(),page);
        return articles;
    }

    //用户自删
    @RequestMapping("/front/article/delete")
    public String deleteMyArticle(Integer id){
        articleService.deleteById(id);
        return "redirect:/personalArticle";
    }

    //设置轮播
    @RequestMapping("/front/article/setBanner")
    public @ResponseBody Map<String,Object> setBanner(Integer id){
        Article article = articleService.findById(id);
        Map<String,Object> map = articleService.setBanner(article);
        if ((Boolean) map.get("bool")){
            articleService.update(article);
            return map;
        }
        return map;
    }
    //取消轮播
    @RequestMapping("/front/article/cancelBanner")
    public @ResponseBody Result cancelBanner(Integer id){
        Article article = articleService.findById(id);
        article.setIsbanner(0);
        articleService.update(article);
        return ResultGenerator.successResult();
    }

    //查找待审核文章
    @RequestMapping("/front/article/myArticleChecking")
    public @ResponseBody List<Article> myArticleChecking(@RequestParam(defaultValue = "0",name = "pageStart")Integer pageStart){
        SysUser user = (SysUser) SecurityUtils.getSubject().getPrincipal();
        Integer page = pageStart * 5;
        List<Article> articles = articleService.findMyCheckingArticle(user.getId(),page);
        return articles;
    }
    //查找已通过文章
    @RequestMapping("/front/article/myArticleRelease")
    public @ResponseBody List<Article> myArticleRelease(@RequestParam(defaultValue = "0",name = "pageStart")Integer pageStart){
        SysUser user = (SysUser) SecurityUtils.getSubject().getPrincipal();
        Integer page = pageStart * 5;
        List<Article> articles = articleService.findMyReleaseArticle(user.getId(),page);
        return articles;
    }
    //查找未通过文章
    @RequestMapping("/front/article/myArticleNotPass")
    public @ResponseBody List<Article> myArticleNotPass(@RequestParam(defaultValue = "0",name = "pageStart")Integer pageStart){
        SysUser user = (SysUser) SecurityUtils.getSubject().getPrincipal();
        Integer page = pageStart * 5;
        List<Article> articles = articleService.findMyNotPassArticle(user.getId(),page);
        return articles;
    }

    //后台根据状态筛选文章
    @RequestMapping("/sysFindArticleByState")
    public @ResponseBody Result sysFindArticleByState(PageBean<Article> page,Integer state){
        PageHelper.startPage(page.getPageNum(),page.getSize());
        List<Article> articles = articleService.findArticleByState(state);
        page.setList(articles);
        return ResultGenerator.successResult(page);
    }

    //后台获取用户信息
    @RequestMapping("/sysFindUserExtend")
    public @ResponseBody UserExtend sysFindUserExtend(String id){

        return userExtendService.findUserByUid(id).get(0);
    }

    @RequestMapping("/front/findArticleByCategory")
    public @ResponseBody List<Map<String,Object>> findArticleByCategory(Integer category,@RequestParam(defaultValue = "0",name = "pageStart")Integer pageStart){
        Integer start = pageStart * 5;
        List<Map<String,Object>> map = articleService.findArticleByCategory(category,start);
        return map;
    }

    @RequestMapping("/front/findJs")
    public @ResponseBody List<Map<String,Object>> findJs(@RequestParam(defaultValue = "0",name = "pageStart")Integer pageStart){
        Integer start = pageStart * 5;
        List<Map<String,Object>> map = articleService.findJs(start);
        return map;
    }

    @RequestMapping("/front/getImage")
    public void getImage(HttpServletResponse resp, Integer id){
        Article article = articleService.findById(id);
        BufferedImage img = GenerateImage.getImage(article.getAtitle(),article.getBrief());
        try {
            ImageIO.write(img,"png",resp.getOutputStream());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping("/front/upOrDown")
    public @ResponseBody Boolean upOrDown(String ud, Integer id, String op, HttpServletRequest request){
        HttpSession session = request.getSession();
        if (session.getAttribute("upCards") == null || session.getAttribute("downCards") == null){
            session.setAttribute("upCards",new LinkedList<Integer>());
            session.setAttribute("downCards",new LinkedList<Integer>());
        }
        QyUpordown upordown = upordownService.findById(id);
        List<Integer> us = (List<Integer>) session.getAttribute("upCards");
        List<Integer> ds = (List<Integer>) session.getAttribute("downCards");
        if (op.equals("up")){

            if (ud.equals("1")){
                if (us.contains(id)){
                    upordown.setUp(upordown.getUp() - 1);
                    upordownService.update(upordown);
                    us.remove(id);
                    session.setAttribute("upCards",us);
                    return false;
                }
                upordown.setUp(upordown.getUp() + 1);
                upordownService.update(upordown);
                us.add(id);
                session.setAttribute("upCards",us);
            }else {
                upordown.setUp(upordown.getUp() - 1);
                upordownService.update(upordown);
                us.remove(id);
                session.setAttribute("upCards",us);
            }
        }else {

            if (ud.equals("1")){
                if (ds.contains(id)){
                    upordown.setDown(upordown.getDown() - 1);
                    upordownService.update(upordown);
                    ds.remove(id);
                    session.setAttribute("downCards",ds);
                    return false;
                }
                upordown.setDown(upordown.getDown() + 1);
                upordownService.update(upordown);
                ds.add(id);
                session.setAttribute("downCards",ds);
            }else {
                upordown.setDown(upordown.getDown() - 1);
                upordownService.update(upordown);
                ds.remove(id);
                session.setAttribute("downCards",ds);
            }
        }
        return true;
    }

    @RequestMapping("/front/isDown")
    public @ResponseBody Boolean isDown(Integer id,HttpServletRequest request){
        HttpSession session = request.getSession();
        List<Integer> downCards = (List<Integer>) session.getAttribute("downCards");
        if (downCards == null){
            return false;
        }
        Boolean is = downCards.contains(id);
//        if (is){
//            downCards.remove(id);
//            session.setAttribute("downCards",downCards);
//        }
        return is;
    }

    @RequestMapping("/front/isUp")
    public @ResponseBody Boolean isUp(Integer id,HttpServletRequest request){
        HttpSession session = request.getSession();
        List<Integer> upCards = (List<Integer>) session.getAttribute("upCards");
        Boolean is = upCards.contains(id);
//        if (is){
//            upCards.remove(id);
//            session.setAttribute("upCards",upCards);
//        }
        return is;

    }
    @RequestMapping("/front/toReadFlash")
    public String toReadFlash(Integer id,HttpSession session){
        session.setAttribute("flashId",id);
        return "front/flash";
    }

    @RequestMapping("/front/readFlash")
    public @ResponseBody List<Map<String,Object>> readFlash(@SessionAttribute("flashId") Integer flashId){
        return articleService.findFlashById(flashId);
    }

    @RequestMapping("/sys/uploadArticle")
    public @ResponseBody Result sysUploadArticle(@RequestBody Article article){
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String addtime = format.format(new Date());
        String url = UploadFile.uploadBase64(article.getCoverimg());
        article.setCoverimg("../"+url.substring(2,url.length() - 2));
        article.setUid("49bf3348daa74b1aa25c15db0327b173");
        article.setAddtime(addtime);
        article.setReadnumber(0);
        article.setState(2);
        article.setIsbanner(0);
        articleService.save(article);
        if(article.getCategory() == 7){
            QyUpordown upordown = new QyUpordown();
            upordown.setAid(articleService.findIdByAllInfo(article));
            upordown.setUp(0);
            upordown.setDown(0);
            upordownService.save(upordown);
        }
        return ResultGenerator.successResult(article);
    }
}

