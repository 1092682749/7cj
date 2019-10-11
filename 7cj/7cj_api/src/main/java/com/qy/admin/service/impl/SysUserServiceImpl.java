package com.qy.admin.service.impl;

import com.qy.admin.dao.SysUserMapper;
import com.qy.model.SysUser;
import com.qy.admin.service.SysUserService;
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
public class SysUserServiceImpl extends AbstractService<SysUser> implements SysUserService {

    @Resource
    private SysUserMapper sysUserMapper;

    @Override
    public List<SysUser> selectByMap(Map map){

        return sysUserMapper.selectByMap(map);
    }


    @Override
    public SysUser findUserById(String id) {
        return sysUserMapper.findUserById(id);
    }

    @Override
    public List<SysUser> findUserByUser(String username) {
        return sysUserMapper.findUserByUser(username);
    }

    @Override
    public List<SysUser> findUserByPhone(String phone_number) {

        return sysUserMapper.findUserByPhone(phone_number);

    }

    @Override
    public int deleteUserByUid(String id) {
        return sysUserMapper.deleteUserByUid(id);
    }

    @Override
    public SysUser findAdminFountId(String aid) {
        return sysUserMapper.findAdminFountId(aid);
    }


}
