import { combineReducers } from "redux";
import { createSelector } from "reselect";
import {
  SELECT_ROW,
  GET_PRICES_SUCCESS,
  GET_PRICES_FAILURE,
  GET_PRICES_REQUEST,
  UPDATE_CURRENCY_QUERY,
  UPDATE_DATE_QUERY
} from "./actions";
import { TOGGLE_DRAWER } from "../DrawerContainer/actions";

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

const selectedCurrency = (
  state = initialState.selectedCurrency,
  { type, payload }
) => {
  switch (type) {
    case UPDATE_CURRENCY_QUERY:
      return payload.query;
    default:
      return state;
  }
};

const selectedDate = (state = initialState.selectedDate, { type, payload }) => {
  switch (type) {
    case UPDATE_DATE_QUERY:
      return payload.query;
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
  state.prices.reduce((list, price) => {
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

export const selectRowIndex = state => state.prices.selectedRowIndex;

export const selectPriceByRow = createSelector(
  selectPriceList,
  selectRowIndex,
  (list, index) => {
    return list.indexOf(index);
  }
);

export default combineReducers({
  prices,
  selectedRowIndex,
  selectedCurrency,
  selectedDate,
  loading
});
