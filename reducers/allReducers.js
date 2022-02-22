import { combineReducers } from "redux";
import { numberReducer } from "./numberReducer";

export const allReducers = combineReducers({
    counter: numberReducer,
})