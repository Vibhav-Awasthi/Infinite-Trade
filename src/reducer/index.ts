import { combineReducers } from "redux";
import {
    logInReducer,
    forgotPasswordReduce,
    resetPasswordReduce,
  } from "../screen/login/reducer";

  const rootReducer = combineReducers({
    logInReducer,
    forgotPasswordReduce,
    resetPasswordReduce,
  })

  export default rootReducer;