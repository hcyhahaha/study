'use strict';

const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');

class HomeService extends Service {
    async userinfo() {
        var sql = `select * from user`
        var result = await this.app.mysql.query(sql)
        return result
    }

    // 请求验证码
    async verif() {
        //生成验证码 缓存文字 返回给调用者svg标签字符串
        const verifobj = svgCaptcha.create({
            size: 4, //验证码长度
            fontSize: 35, //验证码字号
            noise: 2, //干扰线条数目，默认为1
            width: 100, //宽度
            height: 32, //高度
            //color: true, //验证码字符是否有颜色，默认是没有，但是如果设置了背景颜色，那么默认就是有字符颜色
            //background: 'gray' //beijing
        });
        this.ctx.session.verif = verifobj.text;
        return verifobj;
    }
}

module.exports = HomeService;
