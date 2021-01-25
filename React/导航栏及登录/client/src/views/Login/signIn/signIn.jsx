

import React, { Component } from 'react';
import axios from '../../../axios.js';

import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


// 立即注册 样式
var signUPNow = {
    color: '#1890ff',
    display: 'inline-block',
    marginLeft: 5,
    cursor: 'pointer'
}

export default class SignIn extends Component {
    normal_login = React.createRef()

    constructor(props) {
        super(props);
        this.state = {
            signUpNow: "signUp",
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
                    name="normal_login"
                    className="login-form-signIn"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    ref={this.normal_login}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名！',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
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
                    <div className="verifBox">
                        <div className="verif-input">
                            <Form.Item
                                name="verif"
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
                        <div className="verif-svg" onClick={this.refreshCode} dangerouslySetInnerHTML={{ __html: this.state.verif }}></div>
                    </div>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>


                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
        </Button>
        Or<p onClick={this.toSignUp} style={signUPNow}>立即注册！</p>
                    </Form.Item>
                </Form>
            </div>
        )
    }

    toSignUp = () => {
        this.props.signUpNow({
            signUpNow: this.state.signUpNow
        });
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

    // 登录
    onFinish = (values) => {
        axios.post("/signin", values).then((res) => {
            if (res.data.code === 2001) {
                message.warning("验证码错误！");
            } else if (res.data.code === 2003) {
                message.error("账号或密码错误！");
            } else if (res.data.code === 2002) {
                message.success("登录成功！");
                this.resetForm()
            } else {
                message.error("未知故障！");
            }
        })
    };

    // 重置form表单为默认值
    resetForm = () => {
        this.normal_login.current.validateFields()
    }

}