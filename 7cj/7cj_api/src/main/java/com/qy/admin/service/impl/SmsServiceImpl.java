package com.qy.admin.service.impl;

import com.qy.admin.dao.SmsMapper;
import com.qy.admin.service.SmsService;
import com.qy.base.core.AbstractService;
import com.qy.model.Sms;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by hang on 2018/07/23.
 */
@Service
@Transactional
public class SmsServiceImpl extends AbstractService<Sms> implements SmsService {
    @Resource
    private SmsMapper qySmsMapper;

}
