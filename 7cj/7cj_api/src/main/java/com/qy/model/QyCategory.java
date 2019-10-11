package com.qy.model;

import javax.persistence.*;

@Table(name = "qy_category")
public class QyCategory {
    @Id
    private Integer cid;

    /**
     * 分类名称
     */
    private String name;

    /**
     * 分类编号
     */
    private Integer number;

    /**
     * @return cid
     */
    public Integer getCid() {
        return cid;
    }

    /**
     * @param cid
     */
    public void setCid(Integer cid) {
        this.cid = cid;
    }

    /**
     * 获取分类名称
     *
     * @return name - 分类名称
     */
    public String getName() {
        return name;
    }

    /**
     * 设置分类名称
     *
     * @param name 分类名称
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取分类编号
     *
     * @return number - 分类编号
     */
    public Integer getNumber() {
        return number;
    }

    /**
     * 设置分类编号
     *
     * @param number 分类编号
     */
    public void setNumber(Integer number) {
        this.number = number;
    }
}