import { combineReducers } from "redux";
import authreducer from "./authreducer";
import taskreducer from "./taskreducer";

const rootreducer = combineReducers({
  auth: authreducer,
  task: taskreducer,
});

export default rootreducer;
