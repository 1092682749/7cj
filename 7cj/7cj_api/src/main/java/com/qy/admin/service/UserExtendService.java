package com.qy.admin.service;

import com.qy.base.core.Service;
import com.qy.model.UserExtend;

import java.util.List;


/**
 * Created by hang on 2018/07/23.
 */
public interface UserExtendService extends Service<UserExtend> {
    int updateByUid(UserExtend userExtend);

    List<UserExtend> findUserByUid(String uid);
}
