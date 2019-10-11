package com.qy.biz.dao;

import com.qy.base.core.Mapper;
import com.qy.biz.model.BizAdmin;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BizAdminMapper extends Mapper<BizAdmin> {
    public List<BizAdmin> selectAdminByAcciuntAndPassword(BizAdmin bizAdmin);
    public List<BizAdmin> selectAdmin(BizAdmin bizAdmin);
}