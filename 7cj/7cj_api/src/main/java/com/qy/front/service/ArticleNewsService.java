package com.qy.front.service;
import com.qy.model.ArticleNews;
import com.qy.base.core.Service;

import java.util.List;


/**
 * Created by dyz on 2018/08/08.
 */
public interface ArticleNewsService extends Service<ArticleNews> {
    public List<ArticleNews> findLastThousand();
}
