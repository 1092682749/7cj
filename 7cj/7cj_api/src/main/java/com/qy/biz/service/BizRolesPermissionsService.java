package com.qy.biz.service;
import com.qy.biz.model.BizRolesPermissions;
import com.qy.base.core.Service;

import java.util.List;
import java.util.Map;


/**
 * Created by sxd on 2018/07/23.
 */
public interface BizRolesPermissionsService extends Service<BizRolesPermissions> {
    public List<Map<String, String>> selectPermissionsByRoleId(Integer role_id);

}
