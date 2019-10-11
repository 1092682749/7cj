package com.qy.admin.service.impl;

import com.qy.admin.dao.SysUserRoleMapper;
import com.qy.model.SysUserRole;
import com.qy.admin.service.SysUserRoleService;
import com.qy.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;


/**
 * Created by zaq on 2018/07/16.
 */
@Service
@Transactional
public class SysUserRoleServiceImpl extends AbstractService<SysUserRole> implements SysUserRoleService {
    @Resource
    private SysUserRoleMapper sysUserRoleMapper;

    public List<Map> findRoleByUid(String uid){
        return sysUserRoleMapper.findRoleByUid(uid);
    }

}
