//page1.jsx
import Menu from '../Menu/Menu.jsx'
import React, { Component } from 'react';
import axios from '../../axios.js';

import { Table, Space } from 'antd';
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle" >
        <a href="/#" onClick={(e) => { e.preventDefault() }}>Invite {record.id}</a>
        <a href="/#" onClick={(e) => { e.preventDefault() }}>Delete</a>
      </Space>
    ),
  },
]


export default class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'page1',
      rowStyle: "",
      userData: []
    }
  }
  componentDidMount() {
    // page1列表信息
    axios.get("/").then((res) => {
      if (res.status === 200) {
        this.setState({
          userData: res.data
        }, () => { })
      }
    })
  }
  render() {
    return (<div>
      <Menu history={this.props.history} current={this.state.current}></Menu>
      <h1>Page1</h1>
      <Table columns={columns} dataSource={this.state.userData} rowKey={record => record.id} onRow={this.onClickRow}
        rowClassName={this.setRowClassName} bordered className="page1Table" />
    </div>)
  }
  /*
    rowClassName: 表格行的类名,通过this.setRowClassName方法添加类名
    onRow: 用于给表格添加事件, 如onClick, onMouseEnter 等内部事件
  */
  // 选中行
  onClickRow = (record) => {
    return {
      onClick: () => {
        this.setState({
          rowStyle: record.id,
        });
      },
    };
  }
  // 添加类名
  setRowClassName = (record) => {
    return record.id === this.state.rowStyle ? 'clickRowStyl' : '';
  }
  // react中可以通过preventDefault来实现阻止a标签跳转
  // <a href="http://xxxx.xx" onClick={this.preventJump.bind(this)}>
  // preventJump(e) {
  //   e.preventDefault();
  // }
}