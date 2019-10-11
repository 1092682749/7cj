package com.qy.biz.service.impl;

import com.qy.biz.dao.BizPermissionsMapper;
import com.qy.biz.model.BizPermissions;
import com.qy.biz.service.BizPermissionsService;
import com.qy.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by sxd on 2018/07/21.
 */
@Service
@Transactional
public class BizPermissionsServiceImpl extends AbstractService<BizPermissions> implements BizPermissionsService {
    @Resource
    private BizPermissionsMapper bizPermissionsMapper;

}
