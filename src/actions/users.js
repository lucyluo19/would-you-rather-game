import * as actionTypes from "./actionTypes";

//action creator
export function loadUsers(users) {
  return {
    type: actionTypes.LOAD_USERS_SUCCESS,
    users
  };
}

export function addQuestionUser(authedUser, qid) {
  return {
    type: actionTypes.ADD_QUESTION_USER_SUCCESS,
    authedUser,
    qid
  };
}

export function answerQuestionUser(authedUser, qid, answer) {
  return {
    type: actionTypes.ANSWER_QUESTION_USER_SUCCESS,
    authedUser,
    qid,
    answer
  };
}
