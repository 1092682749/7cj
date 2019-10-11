package com.qy.admin.service;
import com.qy.model.SysUserRole;
import com.qy.base.core.Service;

import java.util.List;
import java.util.Map;


/**
 * Created by zaq on 2018/07/16.
 */
public interface SysUserRoleService extends Service<SysUserRole> {

    List<Map> findRoleByUid(String uid);

}
