package com.qy.admin.service.impl;

import com.qy.admin.dao.SysRoleMapper;
import com.qy.model.SysRole;
import com.qy.admin.service.SysRoleService;
import com.qy.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by zaq on 2018/07/16.
 */
@Service
@Transactional
public class SysRoleServiceImpl extends AbstractService<SysRole> implements SysRoleService {
    @Resource
    private SysRoleMapper sysRoleMapper;

}
