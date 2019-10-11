package com.qy.front.dao;

import com.qy.base.core.Mapper;
import com.qy.model.ArticleNews;
import com.qy.model.ArticlePeople;

import java.util.List;

public interface ArticlePeopleMapper extends Mapper<ArticlePeople> {
    public List<ArticlePeople> findLastThousand();
}