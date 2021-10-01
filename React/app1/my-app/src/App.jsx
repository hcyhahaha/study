import React, { Component } from 'react';
import img1 from './imgs/dw1.jpg'
import bgcimg from './imgs/dw2.jpg'
import './mycss1.css'


let imgSty = {
    width: 200,
    height: 150
}
let styDiv1 = {
    backgroundImage: `url(${bgcimg})`,
    backgroundSize: '100%'
}
let styDiv2 = {
    backgroundColor: '#7dc2ab'
}
class App extends Component {


    constructor(arg) {

        super(arg)
        this.state = {
            msg: "hello world",
            flag: true,
            userList: [
                { name: "张三", age: 18 },
                { name: "李四", age: 10 },
                { name: "王五", age: 40 },
                { name: "苏东坡", age: 1 },
            ]
        }
    }

    render() {
        return (<div>
            <h1>{this.state.msg}</h1>
            <img src={img1} style={imgSty} alt="动物1" />
            <button onClick={() => this.state.flag = !this.state.flag}>切换图片</button>
            <div style={this.state.flag ? styDiv1 : styDiv2} className="imgbox"></div>
            {this.state.userList.map((el) =>
                <ul><li>{el.name} {el.age > 17 ? <span>成年</span> : <span>未成年</span>} </li></ul>
            )}
        </div>)
    }
}

export default App;