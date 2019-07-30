import React from "react";
import PropTypes from "prop-types";
import { StyledWrapper, StyledLabel } from "./style";
import RSelect from "react-select";

const Dropdown = ({ options = [], label, placeholder, onChange, value }) => {
  return (
    <StyledWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <RSelect
        options={options}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StyledWrapper>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ),
  onChange: PropTypes.func
};

export default Dropdown;
