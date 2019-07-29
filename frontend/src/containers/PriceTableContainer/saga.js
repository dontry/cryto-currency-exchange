import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  GET_PRICES_REQUEST,
  GET_PRICES_SUCCESS,
  GET_PRICES_FAILURE
} from "./actions";
import api from "../../utils/api";

export function* fetchPrices(action) {
  let query = {};
  const { currency, date } = action.payload;
  if (currency != null) {
    query = { ...query, currency };
  }
  if (date != null) {
    query = { ...query, date };
  }

  try {
    const response = yield call(api.get, "/prices", query);
    const prices = response.data.sort((a, b) => a.currency > b.currency);
    yield put({
      type: GET_PRICES_SUCCESS,
      payload: {
        prices
      }
    });
  } catch (error) {
    console.error("Error: ", error.message);
    yield put({
      type: GET_PRICES_FAILURE
    });
  }
}

function* watcher() {
  yield all([takeLatest(GET_PRICES_REQUEST, fetchPrices)]);
}

export default watcher;
