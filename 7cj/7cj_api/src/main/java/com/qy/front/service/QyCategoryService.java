package com.qy.front.service;
import com.qy.model.QyCategory;
import com.qy.base.core.Service;


/**
 * Created by dyz on 2018/08/04.
 */
public interface QyCategoryService extends Service<QyCategory> {
    public Integer findCountById(Integer id);
}
