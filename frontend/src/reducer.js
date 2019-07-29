import { combineReducers } from "redux";
import priceTableReducer from "./containers/PriceTableContainer/reducer";
import drawerReducer from "./containers/DrawerContainer/reducer";

const rootReducer = combineReducers({
  table: priceTableReducer,
  drawer: drawerReducer
});

export default rootReducer;
