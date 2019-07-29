import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../configureStore";
import { runSaga } from "redux-saga";

function renderWithReduxStore(reducers) {
  return function(initialState) {
    const store = configureStore(initialState);
    return render(<Provider store={store}></Provider>);
  };
}

async function recordSaga(state, saga, ...args) {
  const dispatched = [];

  await runSaga(
    {
      dispatch: action => dispatched.push(action),
      getState: () => state
    },
    saga,
    ...args
  ).done;

  return dispatched;
}
export { renderWithReduxStore, recordSaga };
