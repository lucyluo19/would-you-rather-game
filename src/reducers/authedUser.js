import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function authedUser(state = initialState.authedUser, action) {
  switch (action.type) {
    case actionTypes.SIGN_IN_SUCCESS:
      return action.id;
    case actionTypes.LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
}
