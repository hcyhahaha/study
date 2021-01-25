
import React, { Component } from 'react';

import { Menu } from 'antd';


export default class navMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: this.props.current,
        }
    }
    render() {
        const { current } = this.state;
        return (<div>
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="page1" >
                    page1
                </Menu.Item>
                <Menu.Item key="page2" >
                    page2
                </Menu.Item>
                <Menu.Item key="page3" >
                    page3
                </Menu.Item>
                <Menu.Item key="page4" >
                    page4
                </Menu.Item>
            </Menu>
        </div>)
    }
    handleClick = e => {
        // console.log('click ', e);
        this.props.history.push(`/${e.key}`)
    };
}