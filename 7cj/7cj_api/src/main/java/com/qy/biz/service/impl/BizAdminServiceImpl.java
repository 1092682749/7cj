package com.qy.biz.service.impl;

import com.qy.biz.dao.BizAdminMapper;
import com.qy.biz.model.BizAdmin;
import com.qy.biz.service.BizAdminService;
import com.qy.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;


/**
 * Created by sxd on 2018/07/21.
 */
@Service
@Transactional
public class BizAdminServiceImpl extends AbstractService<BizAdmin> implements BizAdminService {

    @Resource
    private BizAdminMapper bizAdminMapper;

    @Override
    public List<BizAdmin> selectAdminByAcciuntAndPassword(BizAdmin bizAdmin) {
        return bizAdminMapper.selectAdminByAcciuntAndPassword(bizAdmin);
    }

    @Override
    public List<BizAdmin> selectAdmin(BizAdmin bizAdmin) {
        return bizAdminMapper.selectAdmin(bizAdmin);
    }
}
