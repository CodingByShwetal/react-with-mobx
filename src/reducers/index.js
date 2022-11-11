 import {combineReducers} from "redux";
import nameListReducer from "./nameListReducer"

 export default combineReducers({
     nameList : nameListReducer
 })