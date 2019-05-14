import React from 'react';
import ColorPicker from './ColorPicker';
console.log(ColorPicker);

export default function App(){
  return (
    <div>
      <ColorPicker color='red'/>
      <ColorPicker color='blue'/>
      <ColorPicker color='green'/>
    </div>
  );
}
