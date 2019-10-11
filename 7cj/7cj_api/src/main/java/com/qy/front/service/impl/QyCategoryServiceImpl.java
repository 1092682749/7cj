package com.qy.front.service.impl;

import com.qy.front.dao.QyCategoryMapper;
import com.qy.model.QyCategory;
import com.qy.front.service.QyCategoryService;
import com.qy.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by dyz on 2018/08/04.
 */
@Service
@Transactional
public class QyCategoryServiceImpl extends AbstractService<QyCategory> implements QyCategoryService {
    @Resource
    private QyCategoryMapper qyCategoryMapper;

    @Override
    public Integer findCountById(Integer id) {
        return qyCategoryMapper.findCountById(id);
    }
}
