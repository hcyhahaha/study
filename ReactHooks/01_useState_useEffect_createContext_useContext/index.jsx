import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
  useEffect(() => {
    console.log('首页lalalala---进入');
    return () => {
      console.log('首页---离开');
    };
  }, []);
  return <h1>首页</h1>;
}

function List() {
  useEffect(() => {
    console.log('列表lalala-----进入');
    return () => {
      console.log('列表---离开');
    };
  });
  return <h1>列表</h1>;
}

function Counter() {
  const [sex, setSex] = useState('男');
  const [age, setAge] = useState(18);
  const [like, setLike] = useState('睡觉');
  useEffect(() => {
    console.log('useEffect年龄--->', age);
    return () => {
      console.log('useEffect年龄--->结束', age);
    };
  }, [age]);
  return (
    <div>
      <h1>张三：{age}岁</h1>
      <p>性别：{sex}</p>
      <p>爱好：{like}</p>
      <button onClick={() => setAge(age + 1)}>增加年龄</button>

      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/mylist">列表</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/mylist" component={List}></Route>
      </Router>
    </div>
  );
}

export default React.memo(Counter);
