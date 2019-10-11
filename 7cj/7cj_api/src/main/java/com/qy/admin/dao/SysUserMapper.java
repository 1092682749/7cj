package com.qy.admin.dao;

import com.qy.base.core.Mapper;
import com.qy.model.SysUser;

import java.util.List;
import java.util.Map;

public interface SysUserMapper extends Mapper<SysUser> {
    List<SysUser> selectByMap(Map map);
    public SysUser findUserById(String id);
    List<SysUser> findUserByUser(String username);
    List<SysUser> findUserByPhone(String phone_number);
    int deleteUserByUid(String id);
    SysUser findAdminFountId(String aid);
}