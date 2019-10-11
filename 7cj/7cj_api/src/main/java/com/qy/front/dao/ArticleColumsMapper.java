package com.qy.front.dao;

import com.qy.base.core.Mapper;
import com.qy.model.ArticleColums;

import java.util.List;

public interface ArticleColumsMapper extends Mapper<ArticleColums> {
    public List<ArticleColums> findLastThousand();
}