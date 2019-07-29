import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  // @ts-ignore
  const composeSetup =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  /* eslint-enable */

  // @ts-ignore
  const store = createStore(
    rootReducer,
    initialState,
    composeSetup(...enhancers)
  );

  store.runSaga = sagaMiddleware.run;

  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept("./reducer", () => {
      // @ts-ignore
      const nextRootReducer = require("./reducer").default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
