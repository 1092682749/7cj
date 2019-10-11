package com.qy.front.service.impl;

import com.qy.front.dao.ArticleMapper;
import com.qy.model.Article;
import com.qy.front.service.ArticleService;
import com.qy.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * Created by zaq on 2018/07/18.
 */
@Service
@Transactional
public class ArticleServiceImpl extends AbstractService<Article> implements ArticleService {
    @Resource
    private ArticleMapper articleMapper;

    @Override
    public List<Map<String,Object>> findAllArticleByDESC(Integer pageStart) {
        return articleMapper.findAllArticleByDESC(pageStart);
    }

    @Override
    public List<Map<String,Object>> findArticleByHot(Integer pageStart) {
        return articleMapper.findArticleByHot(pageStart);
    }

    @Override
    public List<Article> findArticleByUserId(String id) {
        return articleMapper.findArticleByUserId(id);
    }

    @Override
    public Integer getAllViewCount(String id) {
        return articleMapper.getAllViewCount(id);
    }

    @Override
    public List<Map<String,Object>> findUserArticleDESC(String id, Integer pageStart) {
        return articleMapper.findUserArticleDESC(id,pageStart);
    }

    @Override
    public Integer findUserArticleCount(String id) {
        return articleMapper.findUserArticleCount(id);
    }

    @Override
    public Boolean saveArticle(Article article) {
        Integer cart = articleMapper.saveArticle(article);
        if (cart == null){
            return false;
        }else if (cart < 0){
            return false;
        }
        return true;
    }

    @Override
    public List<Article> findMyArticleDESC(String id, Integer pageStart) {
        return articleMapper.findMyArticleDESC(id,pageStart);
    }

    @Override
    public Map<String, Object> setBanner(Article article) {
        Integer count = articleMapper.findAllBannerCount();
        Map<String,Object> map = new HashMap<>();
        if (count >= 5){
            map.put("bool",false);
            map.put("msg","轮播图数量不能大于五张");
            map.put("object",null);
        }else {
            article.setIsbanner(1);
            map.put("bool",true);
            map.put("msg","设置成功");
            map.put("object",article);
        }
        return map;
    }

    @Override
    public Map<String, Object> findArticleAndUser() {
        return articleMapper.findArticleAndUser();
    }

    @Override
    public List<Article> findMyCheckingArticle(String id,Integer page) {
        return articleMapper.findMyCheckingArticle(id,page);
    }

    @Override
    public List<Article> findMyReleaseArticle(String id, Integer page) {
        return articleMapper.findMyReleaseArticle(id,page);
    }

    @Override
    public List<Article> findMyNotPassArticle(String id, Integer page) {
        return articleMapper.findMyNotPassArticle(id,page);
    }

    @Override
    public List<Article> findAllDESC() {
        return articleMapper.findAllDESC();
    }

    @Override
    public List<Article> findAllBanner() {
        return articleMapper.findAllBanner();
    }

    @Override
    public List<Article> findUserAllStateArticle(String id) {
        return articleMapper.findUserAllStateArticle(id);
    }

    @Override
    public List<Article> findArticleByState(Integer state) {
        return articleMapper.findArticleByState(state);
    }

    @Override
    public List<Map<String, Object>> findArticleByCategory(Integer category, Integer page) {
        return articleMapper.findArticleByCategory(category,page);
    }

    @Override
    public List<Map<String, Object>> findFlashById(Integer id) {
        return articleMapper.findFlashById(id);
    }

    @Override
    public Integer findIdByAllInfo(Article article) {
        return articleMapper.findIdByAllInfo(article);
    }

    @Override
    public List<Article> getAllArticleById(Integer id) {
        return articleMapper.getAllArticleById(id);
    }

    @Override
    public List<Map<String,Object>> findJs(Integer page) {
        return articleMapper.findJs(page);
    }

    @Override
    public List<Article> findByTitle(String title) {
        return articleMapper.findByTitle(title);
    }


}
