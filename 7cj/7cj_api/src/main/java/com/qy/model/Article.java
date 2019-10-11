package com.qy.model;

import javax.persistence.*;
import java.util.Objects;

public class Article {
    /**
     * 文章id
     */
    @Id
    private Integer aid;

    /**
     * 标题
     */
    private String atitle;

    /**
     * 用户id
     */
    private String uid;

    /**
     * 添加日期
     */
    private String addtime;

    /**
     * 阅读量
     */
    private Integer readnumber;

    /**
     * 是否上架1是0否2待审核3未通过
     */
    private Integer state;

    /**
     * 是否为轮播图
     */
    private Integer isbanner;

    /**
     * 文章分类1最新，2政策，3会议，4社区，5项目，6人物,7快讯
     */
    private Integer category;

    /**
     * 来源
     */
    private String source;

    /**
     * 关键字
     */
    private String keyword;

    /**
     * 作者
     */
    private String author;

    /**
     * 富文本内容
     */
    private String acontent;

    /**
     * 封面
     */
    private String coverimg;

    /**
     * 简要
     */
    private String brief;

    /**
     * 获取文章id
     *
     * @return aid - 文章id
     */
    public Integer getAid() {
        return aid;
    }

    /**
     * 设置文章id
     *
     * @param aid 文章id
     */
    public void setAid(Integer aid) {
        this.aid = aid;
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
     * 获取添加日期
     *
     * @return addtime - 添加日期
     */
    public String getAddtime() {
        return addtime;
    }

    /**
     * 设置添加日期
     *
     * @param addtime 添加日期
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
     * 获取是否上架1是0否2待审核3未通过
     *
     * @return state - 是否上架1是0否2待审核3未通过
     */
    public Integer getState() {
        return state;
    }

    /**
     * 设置是否上架1是0否2待审核3未通过
     *
     * @param state 是否上架1是0否2待审核3未通过
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
     * 获取文章分类1最新，2政策，3会议，4社区，5项目，6人物,7快讯
     *
     * @return category - 文章分类1最新，2政策，3会议，4社区，5项目，6人物,7快讯
     */
    public Integer getCategory() {
        return category;
    }

    /**
     * 设置文章分类1最新，2政策，3会议，4社区，5项目，6人物,7快讯
     *
     * @param category 文章分类1最新，2政策，3会议，4社区，5项目，6人物,7快讯
     */
    public void setCategory(Integer category) {
        this.category = category;
    }

    /**
     * 获取来源
     *
     * @return source - 来源
     */
    public String getSource() {
        return source;
    }

    /**
     * 设置来源
     *
     * @param source 来源
     */
    public void setSource(String source) {
        this.source = source;
    }

    /**
     * 获取关键字
     *
     * @return keyword - 关键字
     */
    public String getKeyword() {
        return keyword;
    }

    /**
     * 设置关键字
     *
     * @param keyword 关键字
     */
    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    /**
     * 获取作者
     *
     * @return author - 作者
     */
    public String getAuthor() {
        return author;
    }

    /**
     * 设置作者
     *
     * @param author 作者
     */
    public void setAuthor(String author) {
        this.author = author;
    }

    /**
     * 获取富文本内容
     *
     * @return acontent - 富文本内容
     */
    public String getAcontent() {
        return acontent;
    }

    /**
     * 设置富文本内容
     *
     * @param acontent 富文本内容
     */
    public void setAcontent(String acontent) {
        this.acontent = acontent;
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

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (getClass() != o.getClass()){
            return false;
        }
        Article article = (Article)o;
        return aid.equals(article.aid);
    }

    @Override
    public int hashCode() {
        return aid;
    }
}