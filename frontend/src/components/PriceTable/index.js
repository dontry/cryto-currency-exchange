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

const head = ["Currency", "Date", "Time", "Price"];

const PriceTable = ({ prices }) => {
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
        {prices.reduce((acc, price) => {
          const { currency, date, quotes } = price;
          const rows = quotes.map(q => (
            <StyledTableRow data-testid="table-row" key={q.time}>
              <StyledTableCell>{currency}</StyledTableCell>
              <StyledTableCell>{date}</StyledTableCell>
              <StyledTableCell>{q.time}</StyledTableCell>
              <StyledTableCell textAlign="right">{q.price}</StyledTableCell>
            </StyledTableRow>
          ));

          return [...acc, ...rows];
        }, [])}
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
  )
};

export default PriceTable;
