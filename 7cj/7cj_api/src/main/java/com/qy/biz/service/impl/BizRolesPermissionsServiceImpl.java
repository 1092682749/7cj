package com.qy.biz.service.impl;

import com.qy.biz.dao.BizRolesPermissionsMapper;
import com.qy.biz.model.BizRolesPermissions;
import com.qy.biz.service.BizRolesPermissionsService;
import com.qy.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;


/**
 * Created by sxd on 2018/07/23.
 */
@Service
@Transactional
public class BizRolesPermissionsServiceImpl extends AbstractService<BizRolesPermissions> implements BizRolesPermissionsService {
    @Resource
    private BizRolesPermissionsMapper bizRolesPermissionsMapper;

    @Override
    public List<Map<String, String>> selectPermissionsByRoleId(Integer role_id) {
        return bizRolesPermissionsMapper.selectPermissionsByRoleId(role_id);
    }
}
