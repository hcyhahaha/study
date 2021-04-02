import React, { useContext } from 'react';
import { ColorContext, updataColor } from './color.jsx';
import { Button } from 'antd';

export default function Buttons() {
  let style = {
    margin: '5px',
  };
  const { dispatch } = useContext(ColorContext);
  return (
    <div>
      <Button
        onClick={() => {
          dispatch({ type: 'btn', bgcColor: '#96bb7c' });
        }}
        type="primary"
        style={style}
      >
        绿
      </Button>
      <Button
        onClick={() => {
          dispatch({ type: 'btn', bgcColor: '#f39189' });
        }}
        type="primary"
        style={style}
      >
        粉
      </Button>
    </div>
  );
}
