import { combineReducers } from "redux";
import { TOGGLE_DRAWER } from "./actions";
const initialState = {
  toggled: false
};

export const toggled = (state = initialState.toggled, { type, payload }) => {
  switch (type) {
    case TOGGLE_DRAWER:
      return payload.toggled;
    default:
      return state;
  }
};

export default combineReducers({
  toggled
});
