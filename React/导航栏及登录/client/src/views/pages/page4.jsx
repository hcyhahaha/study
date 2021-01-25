//page4.jsx
import Menu from '../Menu/Menu.jsx'
import Login from '../Login/Login.jsx'

import React, { Component } from 'react';

export default class Page4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'page4',
    }
  }
  render() {
    return (<div>
      <Menu history={this.props.history} current={this.state.current}></Menu>
      <div>
        <Login></Login>
      </div>
    </div>)
  }
}