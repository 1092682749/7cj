package com.qy.front.dao;

import com.qy.base.core.Mapper;
import com.qy.model.Article;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface ArticleMapper extends Mapper<Article> {
    public List<Map<String,Object>> findAllArticleByDESC(Integer pageStart);
    public List<Map<String,Object>> findArticleByHot(Integer pageStart);
    public Article findUserById(String id);
    public List<Article> findArticleByUserId(String uid);
    public Integer getAllViewCount(String id);
    public List<Map<String,Object>> findUserArticleDESC(String id,Integer pageStart);
    public Integer findUserArticleCount(String id);
    public Integer saveArticle(Article article);
    public List<Article> findMyArticleDESC(String id,Integer pageStart);
    public Integer findAllBannerCount();
    public Map<String,Object> findArticleAndUser();
    public List<Article> findMyCheckingArticle(String id,Integer page);
    public List<Article> findMyReleaseArticle(String id,Integer page);
    public List<Article> findMyNotPassArticle(String id,Integer page);
    public List<Article> findAllDESC();
    public List<Article> findAllBanner();
    public List<Article> findUserAllStateArticle(String id);
    public List<Article> findArticleByState(@Param("state") Integer state);
    public List<Map<String,Object>> findArticleByCategory(Integer category,Integer page);
    public List<Map<String,Object>> findFlashById(Integer id);
    public Integer findIdByAllInfo(Article article);
    public List<Article> getAllArticleById(Integer id);
    public List<Map<String,Object>> findJs(Integer page);
    //分割作者字段所需方法
    public List<Article> findByTitle(String title);

}