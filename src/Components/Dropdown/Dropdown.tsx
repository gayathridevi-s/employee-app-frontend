import React, { FC } from 'react';
import './Styles.css';
type DropdownProps = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
  options: { value: string; label: string }[]; // Specify the options
};

const Dropdown: FC<DropdownProps> = (props) => {
  return (
    <div className='dropdownWrap'>
      <label>{props.label}</label>
      <select
        className='input'
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)} // Pass the selected value
      >
        <option value='' disabled>
          {props.placeholder}
        </option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
