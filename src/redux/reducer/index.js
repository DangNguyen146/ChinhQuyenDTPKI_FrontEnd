import { combineReducers } from "redux";

import userLoginReducer from "./../../container/HomeTemplate/ManagerUser/Login/modules/reducer";
import userCreateReducer from "./../../container/HomeTemplate/ManagerUser/CreateAcc/modules/reducer";

const rootReducer = combineReducers({
  userCreateReducer,
  userLoginReducer,
});

export default rootReducer;
