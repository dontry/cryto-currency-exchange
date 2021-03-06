import styled from "styled-components";

export const StyledModal = styled.div`
  display: ${props => (props.toggled ? "block" : "none")};
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
`;

export const StyledBackDrop = styled.div`
  opacity: ${props => (props.toggled ? 1 : 0)};
  transition: opacity 225ms ease-in 0ms;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
`;

export const StyledWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: 100%;
  outline: none;
  z-index: 1200;
  overflow-y: auto;
  flex-direction: column;
  left: auto;
  right: 0;
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2);
  transform: ${props => (props.toggled ? "none" : "translateX(-100%)")};
  transition: transform 225ms ease-in 0ms;
  background: ${props => props.bgColor || "#fff"};
  padding: 1.5rem 3rem 4rem 1rem;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  user-select: none;
  cursor: pointer;
`;
