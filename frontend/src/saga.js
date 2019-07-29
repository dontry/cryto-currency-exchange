import { all } from "redux-saga/effects";
import priceSaga from "./containers/PriceTableContainer/saga";

export default function* rootSaga() {
  yield all([priceSaga()]);
}
