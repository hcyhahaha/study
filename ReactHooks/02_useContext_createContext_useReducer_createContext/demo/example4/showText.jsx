import React, { useContext } from 'react';
import { ColorContext } from './color.jsx';

export default function ShowText() {
  const { color } = useContext(ColorContext);
  let style = {
    width: '70px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    color: 'white',
    backgroundColor: color,
  };
  return <div style={style}>{color}</div>;
}
