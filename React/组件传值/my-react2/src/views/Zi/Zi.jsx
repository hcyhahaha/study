import React, { Component } from 'react'
import style from './Zi.module.css'

export default class Zi extends Component {
    render() {
        return (
            <div className={style.ziBox}>
                <h2>子组件</h2>
                <p>{this.props.ziName}</p>
                <p>{this.props.ziAge}</p>
                <p>{this.props.ziNum}</p>
            </div>
        )
    }
}