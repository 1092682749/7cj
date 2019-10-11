package com.qy.admin.dao;

import com.qy.base.core.Mapper;
import com.qy.model.SysUser;
import com.qy.model.UserExtend;

import java.util.List;
import java.util.Map;

public interface UserExtendMapper extends Mapper<UserExtend> {

     int updateByUid(UserExtend userExtend);

     List<UserExtend> findUserByUid(String uid);
}