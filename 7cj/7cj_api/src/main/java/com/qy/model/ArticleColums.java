package com.qy.model;

import javax.persistence.*;

@Table(name = "article_colums")
public class ArticleColums {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String atitle;

    private String uid;

    private String addtime;

    private Integer readnumber;

    private Integer state;

    private Integer isbanner;

    private String author;

    private String source_from;

    private String acontent;

    private String coverimg;

    private String brief;

    /**
     * @return id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return atitle
     */
    public String getAtitle() {
        return atitle;
    }

    /**
     * @param atitle
     */
    public void setAtitle(String atitle) {
        this.atitle = atitle;
    }

    /**
     * @return uid
     */
    public String getUid() {
        return uid;
    }

    /**
     * @param uid
     */
    public void setUid(String uid) {
        this.uid = uid;
    }

    /**
     * @return addtime
     */
    public String getAddtime() {
        return addtime;
    }

    /**
     * @param addtime
     */
    public void setAddtime(String addtime) {
        this.addtime = addtime;
    }

    /**
     * @return readnumber
     */
    public Integer getReadnumber() {
        return readnumber;
    }

    /**
     * @param readnumber
     */
    public void setReadnumber(Integer readnumber) {
        this.readnumber = readnumber;
    }

    /**
     * @return state
     */
    public Integer getState() {
        return state;
    }

    /**
     * @param state
     */
    public void setState(Integer state) {
        this.state = state;
    }

    /**
     * @return isbanner
     */
    public Integer getIsbanner() {
        return isbanner;
    }

    /**
     * @param isbanner
     */
    public void setIsbanner(Integer isbanner) {
        this.isbanner = isbanner;
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
     * @return acontent
     */
    public String getAcontent() {
        return acontent;
    }

    /**
     * @param acontent
     */
    public void setAcontent(String acontent) {
        this.acontent = acontent;
    }

    /**
     * @return coverimg
     */
    public String getCoverimg() {
        return coverimg;
    }

    /**
     * @param coverimg
     */
    public void setCoverimg(String coverimg) {
        this.coverimg = coverimg;
    }

    /**
     * @return brief
     */
    public String getBrief() {
        return brief;
    }

    /**
     * @param brief
     */
    public void setBrief(String brief) {
        this.brief = brief;
    }
}