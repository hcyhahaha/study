import React, { useContext } from 'react';
import { Button } from 'antd';
import { MoneyContext } from './example2.jsx';

function Zi() {
  let myMoney = useContext(MoneyContext);
  return (
    <div style={{ border: '1px green solid' }}>
      <h1>余额：{myMoney}</h1>
    </div>
  );
}
export default Zi;
