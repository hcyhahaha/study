//home.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';


export default class Home extends Component {
    render() {
        return (<div>
            <ul>
                <li>
                    <Link to="/page1">page1</Link>
                </li>
                <li>
                    <Link to="/page2">page2</Link>
                </li>
                <li>
                    <button onClick={this.toPage3.bind(this)}>page3</button>
                </li>
                <li>
                    <Button type="primary" onClick={this.toPage4.bind(this)}>page4</Button>
                </li>
            </ul>
        </div>)
    }
    toPage3() {
        this.props.history.push("/page3")
    }
    toPage4() {
        this.props.history.push("/page4")
    }
}