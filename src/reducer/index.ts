import { combineReducers } from "redux";
import {
  logInReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
} from "../screen/login/reducer";
import {
  SignUpReducer,
  profileSelectorReducer,
} from "../screen/signup/reducer";
import { dropDownReducer } from "./globalReducer";

const rootReducer = combineReducers({
  logInReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  SignUpReducer,
  profileSelectorReducer,
  dropDownReducer,
});

export default rootReducer;
