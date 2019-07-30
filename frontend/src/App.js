import React, { Component } from "react";
import { connect } from "react-redux";
import { StyledWrapper, StyledTitle } from "./style";
import PriceTableContainer from "./containers/PriceTableContainer";
import { GET_PRICES_REQUEST } from "./containers/PriceTableContainer/actions";
import SearchBar from "./containers/SearchBar";
import DrawerContainer from "./containers/DrawerContainer";
import ExchangeOutputContainer from "./containers/ExchangeOutputContainer";

class App extends Component {
  componentDidMount() {
    const { getPrices } = this.props;
    getPrices({});
  }

  render() {
    return (
      <div className="App">
        <StyledWrapper>
          <StyledTitle>Crypto Currency Exchange</StyledTitle>
          <SearchBar />
          <PriceTableContainer />
        </StyledWrapper>
        <DrawerContainer>
          <ExchangeOutputContainer />
        </DrawerContainer>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPrices: query => {
    dispatch({
      type: GET_PRICES_REQUEST,
      payload: query
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(App);
