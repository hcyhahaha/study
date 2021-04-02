import React, { useState, createContext, useContext } from 'react';
import { Button } from 'antd';
import Child from './zi.jsx';

const AgeContext = createContext();
export const MoneyContext = createContext();

function Zi() {
  let myage = useContext(AgeContext);
  return (
    <div>
      <h1>{myage}岁了</h1>
    </div>
  );
}

function Panrent() {
  const [age, setAge] = useState(18);
  const [money, setMoney] = useState(0);
  return (
    <div>
      <Button onClick={() => setAge(age + 1)} type="primary" style={{ marginRight: '5px' }}>
        增加年龄
      </Button>
      <Button onClick={() => setMoney(money + 8)} type="primary" style={{ marginRight: '5px' }}>
        增加金钱
      </Button>
      <p>年龄：{age}</p>
      <p>金钱：{money}</p>
      <AgeContext.Provider value={age}>
        <Zi />
      </AgeContext.Provider>
      <MoneyContext.Provider value={money}>
        <Child />
      </MoneyContext.Provider>
    </div>
  );
}
export default Panrent;
