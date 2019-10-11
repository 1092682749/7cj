package com.qy.front.service.impl;

import com.qy.front.dao.ArticleNewsMapper;
import com.qy.model.ArticleNews;
import com.qy.front.service.ArticleNewsService;
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
public class ArticleNewsServiceImpl extends AbstractService<ArticleNews> implements ArticleNewsService {
    @Resource
    private ArticleNewsMapper articleNewsMapper;

    @Override
    public List<ArticleNews> findLastThousand() {
        return articleNewsMapper.findLastThousand();
    }
}
