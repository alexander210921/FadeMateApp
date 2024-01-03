import { combineReducers } from "redux";
import loginReducers from "./ReducerUser/ReducerUser";
export default combineReducers({
    login:loginReducers,
});
