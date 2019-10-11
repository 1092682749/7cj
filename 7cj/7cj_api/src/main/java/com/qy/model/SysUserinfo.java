package com.qy.model;

import javax.persistence.*;

@Table(name = "sys_userinfo")
public class SysUserinfo {
    @Id
    private Integer iid;

    /**
     * 用户姓名与use表一致
     */
    private String username;

    /**
     * 钱包地址
     */
    private String burse;

    /**
     * 所在行业
     */
    private String trade;

    /**
     * 国家
     */
    private String country;

    /**
     * 居住地
     */
    private String home;

    /**
     * @return iid
     */
    public Integer getIid() {
        return iid;
    }

    /**
     * @param iid
     */
    public void setIid(Integer iid) {
        this.iid = iid;
    }

    /**
     * 获取用户姓名与use表一致
     *
     * @return username - 用户姓名与use表一致
     */
    public String getUsername() {
        return username;
    }

    /**
     * 设置用户姓名与use表一致
     *
     * @param username 用户姓名与use表一致
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * 获取钱包地址
     *
     * @return burse - 钱包地址
     */
    public String getBurse() {
        return burse;
    }

    /**
     * 设置钱包地址
     *
     * @param burse 钱包地址
     */
    public void setBurse(String burse) {
        this.burse = burse;
    }

    /**
     * 获取所在行业
     *
     * @return trade - 所在行业
     */
    public String getTrade() {
        return trade;
    }

    /**
     * 设置所在行业
     *
     * @param trade 所在行业
     */
    public void setTrade(String trade) {
        this.trade = trade;
    }

    /**
     * 获取国家
     *
     * @return country - 国家
     */
    public String getCountry() {
        return country;
    }

    /**
     * 设置国家
     *
     * @param country 国家
     */
    public void setCountry(String country) {
        this.country = country;
    }

    /**
     * 获取居住地
     *
     * @return home - 居住地
     */
    public String getHome() {
        return home;
    }

    /**
     * 设置居住地
     *
     * @param home 居住地
     */
    public void setHome(String home) {
        this.home = home;
    }
}