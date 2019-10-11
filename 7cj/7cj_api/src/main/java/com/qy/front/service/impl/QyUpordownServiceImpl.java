package com.qy.front.service.impl;

import com.qy.front.dao.QyUpordownMapper;
import com.qy.model.QyUpordown;
import com.qy.front.service.QyUpordownService;
import com.qy.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by dyz on 2018/07/29.
 */
@Service
@Transactional
public class QyUpordownServiceImpl extends AbstractService<QyUpordown> implements QyUpordownService {
    @Resource
    private QyUpordownMapper qyUpordownMapper;

}
