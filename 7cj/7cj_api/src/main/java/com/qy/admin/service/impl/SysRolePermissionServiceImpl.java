package com.qy.admin.service.impl;

import com.qy.admin.dao.SysRolePermissionMapper;
import com.qy.model.SysRolePermission;
import com.qy.admin.service.SysRolePermissionService;
import com.qy.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by zaq on 2018/07/16.
 */
@Service
@Transactional
public class SysRolePermissionServiceImpl extends AbstractService<SysRolePermission> implements SysRolePermissionService {
    @Resource
    private SysRolePermissionMapper sysRolePermissionMapper;

}
