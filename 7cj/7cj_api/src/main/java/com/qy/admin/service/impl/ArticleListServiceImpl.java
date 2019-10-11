package com.qy.admin.service.impl;

import com.qy.admin.dao.ArticleListMapper;
import com.qy.admin.service.ArticleListService;
import com.qy.base.core.AbstractService;

import com.qy.model.ArticleList;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by hang on 2018/07/26.
 */
@Service
@Transactional
public class ArticleListServiceImpl extends AbstractService<ArticleList> implements ArticleListService {
    @Resource
    private ArticleListMapper articleListMapper;

}
