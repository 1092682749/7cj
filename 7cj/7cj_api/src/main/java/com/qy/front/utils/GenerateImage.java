package com.qy.front.utils;



import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

class StringUtil{
    static String[] stringSplit(String s,int l){
        String[] ss;
        int num = s.length()/l;
        if (s.length()%l == 0){
            ss = new String[num];
            for (int i = 0; i < num; i++){
                ss[i] = s.substring(i*l,(i+1)*l);
            }
        }else {
            ss = new String[num+1];
            for (int i = 0; i < num; i++){
                ss[i] = s.substring(i*l,(i+1)*l);
            }
            ss[num] = s.substring(num*l,s.length());
        }
        return ss;
    }
}
class MyImage extends Canvas{
    Image image ;

    public void setImage(Image image) {
        this.image = image;
    }

    @Override
    public void paint(Graphics g) {
        g.drawImage(image,0,0,this);
    }
}
public class GenerateImage {
    static double rate = 1;
    public static void myDrawString(String str,int x,int y,double rate,Graphics g){
        String tempStr=new String();
        int orgStringWight=g.getFontMetrics().stringWidth(str);
        int orgStringLength=str.length();
        int tempx=x;
        int tempy=y;
        while(str.length()>0)
        {
            tempStr=str.substring(0, 1);
            str=str.substring(1, str.length());
            g.drawString(tempStr, tempx, tempy);
            tempx=(int)(tempx+(double)orgStringWight/(double)orgStringLength*rate);
        }

    }
    public static BufferedImage getImage(String titles,String contents) {
        StringBuilder sb = new StringBuilder();
        String[] cs = contents.split("<br/>");
        for (int i = 0; i < cs.length; i++){
            sb.append(cs[i]);
        }
        //分割字符串设置一行显示数字
        String[] title = StringUtil.stringSplit("【"+titles+"】", 10);
        String[] content = StringUtil.stringSplit(contents.replaceAll("<br/>",""), 15);
        File file = new File(MyImage.class.getResource("/public/imgs/bac.png").getPath());
        file.getPath();
        BufferedImage image = null;
        try {
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String data = format.format(new Date());
            image = ImageIO.read(file);
            Integer width = image.getWidth();
            Integer height = image.getHeight();
            Graphics g = image.createGraphics();
            g.setFont(new Font("宋体", Font.PLAIN, 40));
            g.setColor(new Color(158,158,158));
            g.drawString(data,width/6,530);
            g.setColor(Color.BLACK);
            g.setFont(new Font("宋体", Font.BOLD, 55));
            //画tilte，如果一行就从中间开始画
            if (title.length == 1)
            {
                for (int i = 0; i < title.length; i++) {
//                    g.drawString(title[i], (width-(62*title[i].length())+101)/2, 650 + i * 62);
                    g.drawString(title[i], (width-(62*title[i].length())+101)/2, 650 + i * 62);
// System.out.println((width-(62*title[i].length()))/2);
                    if (i > 5) break;
                }
            }else {
                for (int i = 0; i < title.length; i++) {
                    g.drawString(title[i], (width / 6)-70, 650 + i * 65);
                    if (i > 5){
                        g.drawString("...",(width / 6)-70, 650 + i * 65);
                        System.out.println(650 + i * 65);
                        break;
                    }
                }
            }

            g.setFont(new Font("宋体", Font.PLAIN, 40));
            g.setColor(Color.BLACK);
            for (int i = 0; i < content.length; i++) {
                if ( (709+(title.length*62) + i * 46)>=1300){
                    g.drawString("...", width / 9, 709+(title.length*62) + i * 46);
                    System.out.println(709+(title.length*62) + i * 46);
                    break;
                }else {
                    g.drawString(content[i], width / 9, 709+(title.length*62) + i * 46);
                }
            }

//            Frame frame = new Frame();
//            MyImage canvas = new MyImage();
//            canvas.setImage(image);
//            BufferedImage image1 = ImageIO.read(new File("F:/图片/erweima.png"));

//            frame.setSize(new Dimension(900,900));
//            frame.add(canvas,BorderLayout.CENTER);
//            g.drawImage(image1.getScaledInstance(150, 150, Image.SCALE_AREA_AVERAGING), 320, 650, null);
//            frame.setVisible(true);

        } catch (IOException e) {
            e.printStackTrace();
        }
        return image;
    }
}
