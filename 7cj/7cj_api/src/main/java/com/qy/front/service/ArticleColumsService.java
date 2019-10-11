package com.qy.front.service;
import com.qy.model.ArticleColums;
import com.qy.base.core.Service;

import java.util.List;


/**
 * Created by dyz on 2018/08/08.
 */
public interface ArticleColumsService extends Service<ArticleColums> {
    public List<ArticleColums> findLastThousand();
}
