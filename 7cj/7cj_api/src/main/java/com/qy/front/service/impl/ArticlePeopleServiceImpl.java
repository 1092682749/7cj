package com.qy.front.service.impl;

import com.qy.front.dao.ArticlePeopleMapper;
import com.qy.model.ArticlePeople;
import com.qy.front.service.ArticlePeopleService;
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
public class ArticlePeopleServiceImpl extends AbstractService<ArticlePeople> implements ArticlePeopleService {
    @Resource
    private ArticlePeopleMapper articlePeopleMapper;

    @Override
    public List<ArticlePeople> findLastThousand() {
        return articlePeopleMapper.findLastThousand();
    }
}
