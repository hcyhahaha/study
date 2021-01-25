'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.home.userinfo();
  }

  //请求验证码
  async verif() {
    const {ctx} = this;
    ctx.body = await ctx.service.home.verif();
  }
}

module.exports = HomeController;
