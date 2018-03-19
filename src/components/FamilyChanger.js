import React from 'react';

export default function FamilyChanger(props) {
  return (
    <select className="dropDownContainer" value={props.fontFamily} 
    onChange={e => update(e.target.value)}
    disabled={!props.allowEdit}>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}

FamilyChanger.propTypes = {
  fontFamily: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  allowEdit: PropTypes.bool.isRequired,
};