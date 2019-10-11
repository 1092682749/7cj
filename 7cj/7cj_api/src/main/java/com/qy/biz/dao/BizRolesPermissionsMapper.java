package com.qy.biz.dao;

import com.qy.base.core.Mapper;
import com.qy.biz.model.BizRolesPermissions;

import java.util.List;
import java.util.Map;

public interface BizRolesPermissionsMapper extends Mapper<BizRolesPermissions> {
    public List<Map<String, String>> selectPermissionsByRoleId(Integer role_id);
}