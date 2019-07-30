import React from "react";
import PropTypes from "prop-types";
import { StyledModal, StyledBackDrop, StyledWrapper, CloseIcon } from "./style";

const Drawer = ({ children, toggled, onClose }) => {
  return (
    <StyledModal toggled={toggled}>
      <StyledBackDrop toggled={toggled} onClick={onClose} />
      <StyledWrapper toggled={toggled}>
        <CloseIcon onClick={onClose}>&times;</CloseIcon>
        {children}
      </StyledWrapper>
    </StyledModal>
  );
};

Drawer.propTypes = {
  children: PropTypes.object,
  toggled: PropTypes.bool
};

export default Drawer;
