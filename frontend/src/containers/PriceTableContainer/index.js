import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectPriceList } from "./reducer";
import PriceTable from "../../components/PriceTable";
import { SELECT_ROW } from "./actions";
import { TOGGLE_DRAWER } from "../DrawerContainer/actions";

const PriceTableContainer = ({ prices = [], onClick }) => {
  return <PriceTable prices={prices} onClick={onClick} />;
};

PriceTableContainer.propTypes = {
  prices: PropTypes.array
};

const mapStateToProps = state => ({
  prices: selectPriceList(state)
});

const mapDispatchToProps = dispatch => ({
  onClick: index => {
    dispatch({ type: SELECT_ROW, payload: { index } });
    dispatch({ type: TOGGLE_DRAWER, payload: { toggled: true } });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceTableContainer);
