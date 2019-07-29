import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectPriceList } from "./reducer";
import PriceTable from "../PriceTable";

const PriceTableContainer = ({ prices }) => {
  return <PriceTable prices={prices} />;
};

PriceTableContainer.propTypes = {
  prices: PropTypes.array
};

const mapStateToProps = state => ({
  prices: selectPriceList(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceTableContainer);
