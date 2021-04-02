import React from 'react';
import ShowText from './showText.jsx';
import Buttons from './buttons.jsx';
import { Color } from './color.jsx';

export default function Example4() {
  return (
    <div>
      <Color>
        <ShowText />
        <Buttons />
      </Color>
    </div>
  );
}
