import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function questions(state = initialState.questions, action) {
  switch (action.type) {
    case actionTypes.LOAD_QUESTIONS_SUCCESS:
      return { ...state, ...action.questions };
    case actionTypes.ADD_QUESTION_SUCCESS:
      const { question } = action;
      return { ...state, [question.id]: question };
    case actionTypes.ANSWER_QUESTION_SUCCESS:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser
            ])
          }
        }
      };
    default:
      return state;
  }
}
