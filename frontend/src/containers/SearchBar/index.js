import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Select from "../../components/Select";
import { StyledWrapper } from "./style";
import { GET_PRICES_REQUEST } from "../PriceTableContainer/actions";
import api from "../../utils/api";
import { cleanObject } from "../../utils";

class SearchBar extends Component {
  static propTypes = {
    currency: PropTypes.string,
    date: PropTypes.string
  };

  state = {
    date: null,
    currency: null,
    dateOptions: [],
    currencyOptions: []
  };

  async componentDidMount() {
    const currencies = (await api.get("/currencies")).data;
    const dates = (await api.get("/dates")).data;
    this.setState({
      dateOptions: createOptions(dates),
      currencyOptions: createOptions(currencies)
    });
  }

  handleChange = key => option => {
    this.setState({ [key]: option.value }, () => {
      const { currency, date } = this.state;
      let query = cleanObject({ currency, date });
      this.props.getPrices(query);
    });
  };

  render() {
    const { date, currency, dateOptions, currencyOptions } = this.state;
    return (
      <StyledWrapper>
        <Select
          placeholder="Date"
          value={date}
          options={dateOptions}
          onChange={this.handleChange("date")}
        />
        <Select
          placeholder="Currency"
          value={currency}
          options={currencyOptions}
          onChange={this.handleChange("currency")}
        />
      </StyledWrapper>
    );
  }
}

function createOptions(array = []) {
  return [null, ...array].map(item => ({ label: item, value: item }));
}

const mapDispatchToProps = dispatch => ({
  getPrices: query => dispatch({ type: GET_PRICES_REQUEST, payload: query })
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
