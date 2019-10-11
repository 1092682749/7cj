package com.qy.biz.service;
import com.qy.biz.model.BizAdmin;
import com.qy.base.core.Service;

import java.util.List;


/**
 * Created by sxd on 2018/07/21.
 */
public interface BizAdminService extends Service<BizAdmin> {
    public List<BizAdmin> selectAdminByAcciuntAndPassword(BizAdmin bizAdmin);
    public List<BizAdmin> selectAdmin(BizAdmin bizAdmin);

}
