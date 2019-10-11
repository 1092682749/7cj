package com.qy.front.utils;

import com.qy.front.service.ArticleService;
import com.qy.front.service.QyUpordownService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.sql.SQLException;
import java.text.SimpleDateFormat;

/**
 * Created by lightClouds917
 * Date 2018/2/6
 * Description:定时任务
 */
@Component
public class ScheduledTask {
    @Autowired
    private ArticleService articleService;
    @Autowired
    private QyUpordownService upordownService;
    private final Logger logger = LoggerFactory.getLogger(getClass());

    /**
     * 每间隔五分钟秒输出时间
     */
    @Scheduled(initialDelay=100,fixedRate = 300000)
    public void logTime() throws IOException {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        logger.info("定时任务，现在时间："+format.format(System.currentTimeMillis()));
    }
    @Scheduled(initialDelay=200,fixedRate = 300000)
    public void logName(){
        try {
            new JinseRequest(articleService,upordownService).requestNews();
        } catch (IOException e) {
            logger.info("io异常");
            e.printStackTrace();
        } catch (SQLException e) {
            logger.info("sql异常");
            e.printStackTrace();
        }
    }
}
