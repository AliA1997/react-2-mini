import React from 'react';
import PropTypes from 'prop-types';

export default function EditToggle() {
  return (
    <select className="dropDownContainer ml0" value={props.allowEdit} 
    onChange={e => props.update(e.target.value === 'true')}>
      <option value="true"> Allow Edit </option>
      <option value="false"> Disable Edit </option>
    </select>
  )
}
//Make sure the import the prop-types so you can certian props to have certain data types.
EditToggle.propTypes = {
  allowEdit: PropTypes.boolean.isRequired,
  update: PropTypes.func.isRequired,
}