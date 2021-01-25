//page3.jsx
import Menu from '../Menu/Menu.jsx'
import React, { Component } from 'react';

export default class Page3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'page3',
    }
  }
  render() {
    return (<div>
      <Menu history={this.props.history} current={this.state.current}></Menu>
      <h1>Page3</h1>
    </div>)
  }
}