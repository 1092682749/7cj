package com.qy.front.service.impl;

import com.qy.front.dao.ArticleColumsMapper;
import com.qy.model.ArticleColums;
import com.qy.front.service.ArticleColumsService;
import com.qy.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;


/**
 * Created by dyz on 2018/08/08.
 */
@Service
@Transactional
public class ArticleColumsServiceImpl extends AbstractService<ArticleColums> implements ArticleColumsService {
    @Resource
    private ArticleColumsMapper articleColumsMapper;

    @Override
    public List<ArticleColums> findLastThousand() {
        return articleColumsMapper.findLastThousand();
    }
}
