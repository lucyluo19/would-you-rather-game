import * as actionTypes from "./actionTypes";

//action creator
export function signIn(id) {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    id
  };
}

export function logOut() {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
}
