import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../reducer";
const enhancer = compose(applyMiddleware(thunk));
const store: any = createStore(RootReducer, enhancer);
export default store; 