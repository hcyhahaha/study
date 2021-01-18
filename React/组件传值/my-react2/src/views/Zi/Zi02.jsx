import React, { Component } from 'react'
import style from './Zi.module.css'

export default class Zi02 extends Component {
    constructor() {
        super();
        this.state = {
            name: "李四",
            age: 40
        }
    }
    // 定义向父组件传值的方法
    ziTofu = () => {
        this.props.changeFu({
            zi02Name: this.state.name,
            zi02Age: this.state.age,
            zi02Num: 2
        });
    }
    render() {
        return (
            <div className={style.Zi02Box}>
                <h2>子组件2</h2>
                <button onClick={this.ziTofu}>子组件传值给父组件</button>
            </div>
        )
    }
}