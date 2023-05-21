import { combineReducers } from "redux";
import {AppReducer} from "./appReducer";
import {ChatReducer} from "./chatReducer";

export const reducers = combineReducers({
  app: AppReducer,
  chat: ChatReducer
})
