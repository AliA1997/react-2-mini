import React from 'react';

export default function SizeChanger(props) {
  //Make to change the fontsize.
  return (
    <select className="dropDownContainer" value={props.fontSize} onChange={e => props.updateSize(parseInt(e.target.value, 10))}>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}