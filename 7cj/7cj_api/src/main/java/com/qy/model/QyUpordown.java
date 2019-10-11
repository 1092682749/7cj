package com.qy.model;

import javax.persistence.*;

@Table(name = "qy_upordown")
public class QyUpordown {
    @Id
    private Integer udid;

    private Integer up;

    private Integer down;

    private Integer aid;

    /**
     * @return udid
     */
    public Integer getUdid() {
        return udid;
    }

    /**
     * @param udid
     */
    public void setUdid(Integer udid) {
        this.udid = udid;
    }

    /**
     * @return up
     */
    public Integer getUp() {
        return up;
    }

    /**
     * @param up
     */
    public void setUp(Integer up) {
        this.up = up;
    }

    /**
     * @return down
     */
    public Integer getDown() {
        return down;
    }

    /**
     * @param down
     */
    public void setDown(Integer down) {
        this.down = down;
    }

    /**
     * @return aid
     */
    public Integer getAid() {
        return aid;
    }

    /**
     * @param aid
     */
    public void setAid(Integer aid) {
        this.aid = aid;
    }
}