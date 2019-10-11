package com.qy.front.dao;

import com.qy.base.core.Mapper;
import com.qy.model.ArticleColums;
import com.qy.model.ArticleNews;

import java.util.List;

public interface ArticleNewsMapper extends Mapper<ArticleNews> {
    public List<ArticleNews> findLastThousand();
}