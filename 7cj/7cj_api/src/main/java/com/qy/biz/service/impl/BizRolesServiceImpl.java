package com.qy.biz.service.impl;

import com.qy.biz.dao.BizRolesMapper;
import com.qy.biz.model.BizRoles;
import com.qy.biz.service.BizRolesService;
import com.qy.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by sxd on 2018/07/23.
 */
@Service
@Transactional
public class BizRolesServiceImpl extends AbstractService<BizRoles> implements BizRolesService {
    @Resource
    private BizRolesMapper bizRolesMapper;

}
