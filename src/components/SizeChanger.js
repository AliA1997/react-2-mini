import React from 'react';
import PropTypes from 'prop-types';

export default function SizeChanger(props) {
  //Make to change the fontsize.
  return (
    <select className="dropDownContainer" value={props.fontSize} onChange={e => props.update(parseInt(e.target.value, 10))} disabled={!props.allowEdit}>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  );
}

SizeChanger.propTypes = {
  fontSize: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  allowEdit: PropTypes.bool.isRequired,
}