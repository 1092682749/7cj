package com.qy.front.service;
import com.qy.model.Article;
import com.qy.base.core.Service;

import java.util.List;
import java.util.Map;


/**
 * Created by zaq on 2018/07/18.
 */
public interface ArticleService extends Service<Article> {
    public List<Map<String,Object>> findAllArticleByDESC(Integer pageStart);
    public List<Map<String,Object>> findArticleByHot(Integer pageStart);
    public List<Article> findArticleByUserId(String id);
    public Integer getAllViewCount(String id);
    public List<Map<String,Object>> findUserArticleDESC(String id,Integer pageStart);
    public Integer findUserArticleCount(String id);
    public Boolean saveArticle(Article article);
    public List<Article> findMyArticleDESC(String id , Integer pageStart);
    public Map<String,Object> setBanner(Article article);
    public Map<String,Object> findArticleAndUser();
    public List<Article> findMyCheckingArticle(String id,Integer page);
    public List<Article> findMyReleaseArticle(String id,Integer page);
    public List<Article> findMyNotPassArticle(String id,Integer page);
    public List<Article> findAllDESC();
    public List<Article> findAllBanner();
    public List<Article> findUserAllStateArticle(String id);
    public List<Article> findArticleByState(Integer state);
    public List<Map<String,Object>> findArticleByCategory(Integer category,Integer page);
    public List<Map<String,Object>> findFlashById(Integer id);
    public Integer findIdByAllInfo(Article article);
    public List<Article> getAllArticleById(Integer id);
    public List<Map<String,Object>> findJs(Integer page);
    public List<Article> findByTitle(String title);
}
