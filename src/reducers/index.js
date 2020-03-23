import { combineReducers } from "redux";
import authedUser from "../reducers/authedUser";
import questions from "../reducers/questions";
import users from "../reducers/users";

const rootReducer = combineReducers({
  authedUser,
  questions,
  users
});

export default rootReducer;
