import React, { Component } from 'react'
import Zi from './views/Zi/Zi.jsx'
import Zi02 from './views/Zi/Zi02.jsx'
import style from './App.module.css'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "张三",
      age: 20,
      num: 1
    }
  }
  // 定义一个结束子组件传过来值的方法
  getZi02 = data => {
    this.setState({
      name: data.zi02Name,
      age: data.zi02Age,
      num: this.state.num + data.zi02Num
    })
  }
  render() {
    return (
      <div className={style.fuBox} >
        <h1>父组件</h1>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>{this.state.num}</p>
        <Zi ziName={this.state.name} ziAge={this.state.age} ziNum={this.state.num} />
        <Zi02 changeFu={this.getZi02} />
      </div>
    );
  }
}

export default App;
