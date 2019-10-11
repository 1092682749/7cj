package com.qy.front.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PersonalCenterController {

    @RequestMapping("/personalArticle")
    public String personalArticle(){
        return "front/personalArticle";
    }

    @RequestMapping("/personalCenter")
    public String personalCenter(){
        return "front/personalCenter";
    }

    @RequestMapping("/message")
    public String message(){
        return "front/message";
    }

    @RequestMapping("/bindPhone")
    public String bindPhone(){
        return "front/bindPhone";
    }

    @RequestMapping("/alterPass")
    public String alterPass(){
        return "front/alterPass";
    }
}
