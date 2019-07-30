import React from "react";
import PropTypes from "prop-types";
import { StyledLabel, StyledText, StyledTitle, StyledDate } from "./style";
import {
  StyledWrapper,
  StyledFieldWrapper,
  StyledSectionWrapper
} from "./style";
import { formatTime, formatDate } from "../../utils";

const InfoField = ({ title, label, text }) => (
  <StyledFieldWrapper>
    <StyledLabel>{label}</StyledLabel>
    <StyledText>{text}</StyledText>
  </StyledFieldWrapper>
);

const InfoSection = ({ title, info = {} }) => {
  const { time, price } = info;
  const fomattedTime = formatTime(time);
  return (
    <StyledSectionWrapper>
      <StyledTitle>{title}</StyledTitle>
      <InfoField label="Price:" text={price ? `$${price}` : "--"} />
      <InfoField label="Time:" text={fomattedTime} />
    </StyledSectionWrapper>
  );
};

const ExchangeOutput = ({ buy, sell, profit, date = "" }) => {
  const formattedDate = formatDate(date);

  return (
    <StyledWrapper>
      <StyledDate>{formattedDate}</StyledDate>
      <InfoSection title="Buy" info={buy} />
      <InfoSection title="Sell" info={sell} />
      <StyledSectionWrapper>
        <StyledLabel fontWeight="bold">Profit:</StyledLabel>
        <StyledText>{profit ? `$${profit}` : "--"}</StyledText>
      </StyledSectionWrapper>
    </StyledWrapper>
  );
};

ExchangeOutput.propTypes = {
  date: PropTypes.string,
  buy: PropTypes.shape({
    time: PropTypes.string,
    price: PropTypes.string
  }),
  sell: PropTypes.shape({
    time: PropTypes.string,
    price: PropTypes.string
  }),
  profit: PropTypes.string
};

export default ExchangeOutput;
