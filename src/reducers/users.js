import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function users(state = initialState.users, action) {
  switch (action.type) {
    case actionTypes.LOAD_USERS_SUCCESS:
      return { ...state, ...action.users };
    case actionTypes.ADD_QUESTION_USER_SUCCESS:
      const { authedUser, qid } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat([qid])
        }
      };
    case actionTypes.ANSWER_QUESTION_USER_SUCCESS:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      };
    default:
      return state;
  }
}
