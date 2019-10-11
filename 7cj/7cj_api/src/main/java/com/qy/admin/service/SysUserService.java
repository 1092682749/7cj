package com.qy.admin.service;
import com.qy.model.SysUser;
import com.qy.base.core.Service;

import java.util.List;
import java.util.Map;


/**
 * Created by zaq on 2018/07/16.
 */
public interface SysUserService extends Service<SysUser> {
    List<SysUser>  selectByMap(Map<String, Object> map);
    public SysUser findUserById(String id);
    List<SysUser> findUserByUser(String username);

    List<SysUser> findUserByPhone(String phone_number);
    int deleteUserByUid(String id);
    SysUser findAdminFountId(String aid);
}
