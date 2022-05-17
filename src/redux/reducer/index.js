import reducerIncDec from "./reducerIncDec";
import reducerTodo from "./reducerTodo";

import { combineReducers } from "redux"; 

const rootReducer = combineReducers({ reducerIncDec, reducerTodo });

export default rootReducer;