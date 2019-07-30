import { combineReducers } from "redux";
import { createSelector } from "reselect";
import {
  SELECT_ROW,
  GET_PRICES_SUCCESS,
  GET_PRICES_FAILURE,
  GET_PRICES_REQUEST
} from "./actions";
import { getMaxProfitFromGivenPriceIndex } from "../../utils";

const initialState = {
  prices: [],
  selectedRowIndex: -1,
  selectedCurrency: null,
  selectedDate: null,
  loading: false
};

const prices = (state = initialState.prices, { type, payload }) => {
  switch (type) {
    case GET_PRICES_SUCCESS:
      return payload.prices;
    default:
      return state;
  }
};

const selectedRowIndex = (
  state = initialState.selectedRowIndex,
  { type, payload }
) => {
  switch (type) {
    case SELECT_ROW:
      return payload.index;
    // case TOGGLE_DRAWER:
    // return payload.toggled === false ? -1 : state;
    case GET_PRICES_SUCCESS:
      return -1;
    default:
      return state;
  }
};

const loading = (state = initialState.loading, { type, payload }) => {
  switch (type) {
    case GET_PRICES_REQUEST:
      return true;
    case GET_PRICES_SUCCESS:
    case GET_PRICES_FAILURE:
      return false;
    default:
      return state;
  }
};

export const selectPriceList = state => {
  return state.table.prices.reduce((list, price) => {
    const { currency, date, quotes } = price;
    const rows = quotes.map(q => ({
      currency,
      date,
      time: q.time,
      price: q.price
    }));
    return [...list, ...rows];
  }, []);
};

export const selectRowIndex = state => state.table.selectedRowIndex;

export const selectPriceByRow = createSelector(
  selectPriceList,
  selectRowIndex,
  (list, index) => {
    return list.indexOf(index);
  }
);

export const getExchangeInfo = createSelector(
  selectPriceList,
  selectRowIndex,
  (priceList, rowIndex) => {
    if (priceList.length === 0 || rowIndex === -1) return null;
    const price = priceList[rowIndex];
    const sameCurrencyList = priceList
      .filter(p => p.currency === price.currency && p.date === price.date)
      .sort((a, b) => a.time < b.time);
    const buyIndex = sameCurrencyList.findIndex(ele => ele.time === price.time);
    return getMaxProfitFromGivenPriceIndex(sameCurrencyList, buyIndex);
  }
);

export const selectDateByRow = createSelector(
  selectPriceList,
  selectRowIndex,
  (list, index) => {
    return list[index] ? list[index].date : null;
  }
);

export default combineReducers({
  prices,
  selectedRowIndex,
  loading
});
