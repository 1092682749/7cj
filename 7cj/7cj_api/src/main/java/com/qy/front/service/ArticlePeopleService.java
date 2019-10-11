package com.qy.front.service;
import com.qy.model.ArticlePeople;
import com.qy.base.core.Service;

import java.util.List;


/**
 * Created by dyz on 2018/08/08.
 */
public interface ArticlePeopleService extends Service<ArticlePeople> {
    public List<ArticlePeople> findLastThousand();
}
