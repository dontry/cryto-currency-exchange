import React from "react";
import PropTypes from "prop-types";
import {
  StyledTable,
  StyledTableHead,
  StyledTableRow,
  StyledTableHeadCell,
  StyledTableBody,
  StyledTableCell
} from "./style";
import { formatDate, formatTime } from "../../utils/index";

const head = ["Currency", "Date", "Time", "Price"];

const PriceTable = ({ prices = [], onClick }) => {
  const handleClick = index => () => {
    onClick(index);
  };
  return (
    <StyledTable>
      <StyledTableHead>
        <StyledTableRow>
          {head.map((title, index) => (
            <StyledTableHeadCell
              key={title}
              textAlign={index === head.length - 1 ? "right" : "center"}
            >
              {title}
            </StyledTableHeadCell>
          ))}
        </StyledTableRow>
      </StyledTableHead>
      <StyledTableBody>
        {prices.map((p, index) => {
          const { currency, date, time, price } = p;
          return (
            <StyledTableRow
              className="highlight"
              onClick={handleClick(index)}
              data-testid="table-row"
              key={`${currency}-${date}-${time}`}
            >
              <StyledTableCell>{currency}</StyledTableCell>
              <StyledTableCell>{formatDate(date)}</StyledTableCell>
              <StyledTableCell>{formatTime(time)}</StyledTableCell>
              <StyledTableCell textAlign="right">${price}</StyledTableCell>
            </StyledTableRow>
          );
        })}
      </StyledTableBody>
    </StyledTable>
  );
};

PriceTable.propTypes = {
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string,
      date: PropTypes.string,
      quotes: PropTypes.arrayOf(
        PropTypes.shape({
          time: PropTypes.string,
          price: PropTypes.string
        })
      )
    })
  ),
  onClick: PropTypes.func
};

export default PriceTable;
