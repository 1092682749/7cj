package com.qy.admin.dao;

import com.qy.base.core.Mapper;
import com.qy.model.SysUserRole;

import java.util.List;
import java.util.Map;

public interface SysUserRoleMapper extends Mapper<SysUserRole> {


    List<Map>  findRoleByUid(String uid);
}