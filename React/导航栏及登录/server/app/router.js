'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get("/verif", controller.home.verif);// 请求验证码
  router.post('/signin', controller.user.login);// 登录
  router.post('/signup', controller.user.register);// 注册
};
