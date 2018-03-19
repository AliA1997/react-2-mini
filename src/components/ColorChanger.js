import React from 'react';
//Exporting a default functional Components.
export default function ColorChanger(props) {
  //When dealing with passed in function, must provide parameter if needed, for example a events target value.
  return (
    <select className="dropDownContainer" value={props.fontColor} onChange={e => this.update(e.target.value)}>
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}