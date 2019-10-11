package com.qy.admin.service.impl;

import com.qy.admin.dao.UserExtendMapper;
import com.qy.admin.service.UserExtendService;
import com.qy.base.core.AbstractService;

import com.qy.model.UserExtend;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;


/**
 * Created by hang on 2018/07/23.
 */
@Service
@Transactional
public class UserExtendServiceImpl extends AbstractService<UserExtend> implements UserExtendService {
    @Resource
    private UserExtendMapper qyUserExtendMapper;

    @Override
    public int updateByUid(UserExtend userExtend) {
      return   qyUserExtendMapper.updateByUid(userExtend);
    }

    @Override
    public List<UserExtend> findUserByUid(String uid) {
        return qyUserExtendMapper.findUserByUid(uid);
    }
}
