

import React, { Component } from 'react';
import axios from '../../../axios.js';

import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import style from './signUp.module.css'

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            verif: ""// 验证码
        }
    }

    componentDidMount() {
        this.getVerif()
    }
    render() {
        return (
            <div>
                <Form
                    name="normal_register"
                    className="login-form-signIn"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="username"
                        label="账号"
                        rules={[
                            {
                                required: true,
                                message: '请输入账号！',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="密码"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码！',
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        label="确认密码"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请确认密码',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('确认密码不一致！');
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <div className={style.verifBox}>
                        <div className={style.verifInput}>
                            <Form.Item
                                name="verif"
                                label="验证码"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入验证码！',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="验证码"
                                    autoComplete="off"
                                />
                            </Form.Item>
                        </div>
                        <div className={style.verifSvg} onClick={this.refreshCode} dangerouslySetInnerHTML={{ __html: this.state.verif }}></div>
                    </div>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={style.loginFormButton}>注册</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }

    // 获取验证码
    getVerif = () => {
        axios.get("/verif").then((res) => {
            if (res.status === 200) {
                this.setState({
                    verif: res.data.data
                })
            }
        })
    }

    // 刷新验证码
    refreshCode = () => {
        this.getVerif()
    }

    // 注册
    onFinish = (values) => {
        axios.post("/signup", values).then((res) => {
            if (res.data.code === 2001) {
                message.warning("验证码错误！");
            } else if (res.data.code === 4002) {
                message.warning("账号已被注册！");
            } else if (res.data.code === 4001) {
                message.success("注册成功!");
            } else if (res.data.code === 4004) {
                message.error("注册失败,稍后再试!");
            } else {
                message.error("未知故障！");
            }
        })
    };

}