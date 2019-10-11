package com.qy.front.service.impl;

import com.qy.front.dao.SysUserinfoMapper;
import com.qy.model.SysUserinfo;
import com.qy.front.service.SysUserinfoService;
import com.qy.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by dyz on 2018/07/23.
 */
@Service
@Transactional
public class SysUserinfoServiceImpl extends AbstractService<SysUserinfo> implements SysUserinfoService {
    @Resource
    private SysUserinfoMapper sysUserinfoMapper;

}
