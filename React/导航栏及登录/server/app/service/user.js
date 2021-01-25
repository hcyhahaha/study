'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    // 登录
    async login(loginUserInfo) {
        var sql = `select * from userinfo where username="${loginUserInfo.username}" and password="${loginUserInfo.password}"`
        var result = await this.app.mysql.query(sql)
        return result
    }

    // 注册
    async register(userinfo) {
        var sql = `select * from userinfo where username="${userinfo.username}"`
        var results = await this.app.mysql.query(sql)
        if (results[0]) {
            return { code: 4002, info: "账号已被注册" }
        } else {
            var sql = `insert into userinfo (username,password) values ("${userinfo.username}","${userinfo.password}")`
            var results1 = await this.app.mysql.query(sql)
            if (results1.affectedRows > 0) {
                return { code: 4001, info: "注册成功" }
            } else {
                return { code: 4004, info: "注册失败,稍后再试" }
            }

        }


    }
}

module.exports = UserService;
