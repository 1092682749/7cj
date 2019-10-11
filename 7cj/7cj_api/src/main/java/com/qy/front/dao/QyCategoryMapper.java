package com.qy.front.dao;

import com.qy.base.core.Mapper;
import com.qy.model.QyCategory;

public interface QyCategoryMapper extends Mapper<QyCategory> {
    public Integer findCountById(Integer id);
}