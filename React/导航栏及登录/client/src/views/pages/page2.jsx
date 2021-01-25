//page2.jsx
import Menu from '../Menu/Menu.jsx'
import React, { Component } from 'react';

export default class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'page2',
    }
  }
  render() {
    return (<div>
      <Menu history={this.props.history} current={this.state.current}></Menu>
      <h1>Page2</h1>
    </div>)
  }
}