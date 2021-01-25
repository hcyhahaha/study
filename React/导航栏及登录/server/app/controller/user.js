'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    // 登录
    async login() {
        const { ctx } = this;
        if (ctx.request.body.verif.toUpperCase() === ctx.session.verif.toUpperCase()) {
            var result = await ctx.service.user.login(ctx.request.body)
            if (result[0]) {
                if (ctx.request.body.remember) {
                    ctx.session.userid = result[0].id;
                }
                ctx.body = { code: 2002, info: "登录成功" }
            } else {
                ctx.body = { code: 2003, info: "账号或密码错误" }
            }
        } else {
            ctx.body = { code: 2001, info: "验证码错误" };
        }
    }

    // 注册
    async register() {
        const { ctx } = this;
        if (ctx.request.body.verif.toUpperCase() === ctx.session.verif.toUpperCase()) {
            ctx.body = await ctx.service.user.register(ctx.request.body)
        } else {
            ctx.body = { code: 2001, info: "验证码错误" };
        }
    }
}

module.exports = UserController;
