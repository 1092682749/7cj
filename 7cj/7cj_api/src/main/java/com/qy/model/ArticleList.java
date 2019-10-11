package com.qy.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Table(name = "article_list")
public class ArticleList {
    /**
     * id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * 地址
     */
    private String url;

    /**
     * 标题
     */
    private String title;

    /**
     * 封面
     */
    private String cover_image;

    private Date add_time;

    /**
     * 备注
     */
    private String info;

    /**
     * 文章内容
     */
    private String context;

    /**
     * 获取id
     *
     * @return id - id
     */
    public Integer getId() {
        return id;
    }

    /**
     * 设置id
     *
     * @param id id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取地址
     *
     * @return url - 地址
     */
    public String getUrl() {
        return url;
    }

    /**
     * 设置地址
     *
     * @param url 地址
     */
    public void setUrl(String url) {
        this.url = url;
    }

    /**
     * 获取标题
     *
     * @return title - 标题
     */
    public String getTitle() {
        return title;
    }

    /**
     * 设置标题
     *
     * @param title 标题
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * 获取封面
     *
     * @return cover_image - 封面
     */
    public String getCover_image() {
        return cover_image;
    }

    /**
     * 设置封面
     *
     * @param cover_image 封面
     */
    public void setCover_image(String cover_image) {
        this.cover_image = cover_image;
    }

    /**
     * @return add_time
     */
    public Date getAdd_time() {
        return add_time;
    }

    /**
     * @param add_time
     */
    public void setAdd_time(Date add_time) {
        this.add_time = add_time;
    }

    /**
     * 获取备注
     *
     * @return info - 备注
     */
    public String getInfo() {
        return info;
    }

    /**
     * 设置备注
     *
     * @param info 备注
     */
    public void setInfo(String info) {
        this.info = info;
    }

    /**
     * 获取文章内容
     *
     * @return context - 文章内容
     */
    public String getContext() {
        return context;
    }

    /**
     * 设置文章内容
     *
     * @param context 文章内容
     */
    public void setContext(String context) {
        this.context = context;
    }
}