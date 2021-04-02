import React, { createContext, useReducer } from 'react';

export const ColorContext = createContext();
// export const updataColor = 'updataColor';
/*
 *引入 useReducer 后，useReducer 接受一个 reducer 函数作为参数，
 *reducer 接受两个参数一个是 state 另一个是 action 。
 *然后返回一个状态 count 和 dispath，
 *count 是返回状态中的值，而 dispatch 是一个可以发布事件来更新 state 的。
 */
const reducer = (state, action) => {
  switch (action.type) {
    case 'btn':
      return action.bgcColor;
    default:
      return state;
  }
};

export const Color = (props) => {
  const [color, dispatch] = useReducer(reducer, 'red');
  return (
    <ColorContext.Provider value={{ color, dispatch }}>{props.children}</ColorContext.Provider>
  );
};
