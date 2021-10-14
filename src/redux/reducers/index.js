import { combineReducers } from "redux";
import RegisterManager from "./registermanager.reducer";
import Login from "./login";
import RegularUser from "./RegularUser";
import GetUsers from "./getusers";
import WorkLogs from "./worklogs";
import GetWorkLogs from "./getworklogs";
import GetFilteredLogs from "./getfilteredlogs";

const rootReducer = combineReducers({
   RegisterManager,
   Login,
   RegularUser,
   GetUsers,
   WorkLogs,
   GetWorkLogs,
   GetFilteredLogs
   
});

export default rootReducer;