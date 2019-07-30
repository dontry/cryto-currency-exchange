import React from "react";
import ExchangeOutput from "../../components/ExchangeOutput";
import {
  selectDateByRow,
  getExchangeInfo
} from "../PriceTableContainer/reducer";
import { connect } from "react-redux";

const ExchangeOutputContainer = ({ date, exchangeInfo }) => {
  if (exchangeInfo == null) return "";
  const { buy, sell, profit } = exchangeInfo;
  return <ExchangeOutput buy={buy} sell={sell} profit={profit} date={date} />;
};

const mapStateToProps = state => ({
  date: selectDateByRow(state),
  exchangeInfo: getExchangeInfo(state)
});

export default connect(mapStateToProps)(ExchangeOutputContainer);
