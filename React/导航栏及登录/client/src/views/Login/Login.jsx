
import MySignIn from './signIn/signIn.jsx'
import MySignUp from './signUp/signUp.jsx'
import style from './Login.module.css'

import React, { Component } from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeKey: "login"
        }
    }
    render() {
        return (<div className={style.signBox}>
            <Tabs onChange={this.callback} type="card" tabBarGutter={6} activeKey={this.state.activeKey}>
                <TabPane tab="登录" key="login">
                    <MySignIn signUpNow={this.getSignUp} ></MySignIn>
                </TabPane>
                <TabPane tab="注册" key="signUp">
                    <MySignUp></MySignUp>
                </TabPane>
            </Tabs>
        </div>)
    }

    callback = key => {
        this.setState(
            { activeKey: key },
            () => {
                //这里打印的是最新的state值
                // console.log(key);
            }
        );
    }

    // 定义一个结束子组件传过来值的方法
    getSignUp = data => {
        this.setState({
            activeKey: data.signUpNow
        })
    }

}