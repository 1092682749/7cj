package com.qy.model;

import javax.persistence.*;

@Table(name = "article_people")
public class ArticlePeople {
    /**
     * 文章id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * 标题
     */
    private String atitle;

    /**
     * 添加时间
     */
    private String addtime;

    /**
     * 阅读量
     */
    private Integer readnumber;

    /**
     * 是否上架
     */
    private Integer state;

    /**
     * 是否为轮播图
     */
    private Integer isbanner;

    /**
     * 用户id
     */
    private String uid;

    private String author;

    private String source_from;

    /**
     * 封面
     */
    private String coverimg;

    /**
     * 简要
     */
    private String brief;

    /**
     * 内容
     */
    private String acontent;

    /**
     * 获取文章id
     *
     * @return id - 文章id
     */
    public Integer getId() {
        return id;
    }

    /**
     * 设置文章id
     *
     * @param id 文章id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取标题
     *
     * @return atitle - 标题
     */
    public String getAtitle() {
        return atitle;
    }

    /**
     * 设置标题
     *
     * @param atitle 标题
     */
    public void setAtitle(String atitle) {
        this.atitle = atitle;
    }

    /**
     * 获取添加时间
     *
     * @return addtime - 添加时间
     */
    public String getAddtime() {
        return addtime;
    }

    /**
     * 设置添加时间
     *
     * @param addtime 添加时间
     */
    public void setAddtime(String addtime) {
        this.addtime = addtime;
    }

    /**
     * 获取阅读量
     *
     * @return readnumber - 阅读量
     */
    public Integer getReadnumber() {
        return readnumber;
    }

    /**
     * 设置阅读量
     *
     * @param readnumber 阅读量
     */
    public void setReadnumber(Integer readnumber) {
        this.readnumber = readnumber;
    }

    /**
     * 获取是否上架
     *
     * @return state - 是否上架
     */
    public Integer getState() {
        return state;
    }

    /**
     * 设置是否上架
     *
     * @param state 是否上架
     */
    public void setState(Integer state) {
        this.state = state;
    }

    /**
     * 获取是否为轮播图
     *
     * @return isbanner - 是否为轮播图
     */
    public Integer getIsbanner() {
        return isbanner;
    }

    /**
     * 设置是否为轮播图
     *
     * @param isbanner 是否为轮播图
     */
    public void setIsbanner(Integer isbanner) {
        this.isbanner = isbanner;
    }

    /**
     * 获取用户id
     *
     * @return uid - 用户id
     */
    public String getUid() {
        return uid;
    }

    /**
     * 设置用户id
     *
     * @param uid 用户id
     */
    public void setUid(String uid) {
        this.uid = uid;
    }

    /**
     * @return author
     */
    public String getAuthor() {
        return author;
    }

    /**
     * @param author
     */
    public void setAuthor(String author) {
        this.author = author;
    }

    /**
     * @return source_from
     */
    public String getSource_from() {
        return source_from;
    }

    /**
     * @param source_from
     */
    public void setSource_from(String source_from) {
        this.source_from = source_from;
    }

    /**
     * 获取封面
     *
     * @return coverimg - 封面
     */
    public String getCoverimg() {
        return coverimg;
    }

    /**
     * 设置封面
     *
     * @param coverimg 封面
     */
    public void setCoverimg(String coverimg) {
        this.coverimg = coverimg;
    }

    /**
     * 获取简要
     *
     * @return brief - 简要
     */
    public String getBrief() {
        return brief;
    }

    /**
     * 设置简要
     *
     * @param brief 简要
     */
    public void setBrief(String brief) {
        this.brief = brief;
    }

    /**
     * 获取内容
     *
     * @return acontent - 内容
     */
    public String getAcontent() {
        return acontent;
    }

    /**
     * 设置内容
     *
     * @param acontent 内容
     */
    public void setAcontent(String acontent) {
        this.acontent = acontent;
    }
}