import React from "react";
import PropTypes from "prop-types";
import { StyledModal, StyledBackDrop, StyledWrapper } from "./style";

const Drawer = ({ children, toggled }) => {
  return (
    <StyledModal>
      <StyledBackDrop toggled={toggled} />
      <StyledWrapper toggled={toggled}>{children}</StyledWrapper>
    </StyledModal>
  );
};

Drawer.propTypes = {
  children: PropTypes.object,
  toggled: PropTypes.bool
};

export default Drawer;
