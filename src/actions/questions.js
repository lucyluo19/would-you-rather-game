import * as actionTypes from "./actionTypes";

//action creator
export function loadQuestions(questions) {
  return {
    type: actionTypes.LOAD_QUESTIONS_SUCCESS,
    questions
  };
}

export function addQuestion(question) {
  return {
    type: actionTypes.ADD_QUESTION_SUCCESS,
    question
  };
}

export function answerQuestion(authedUser, qid, answer) {
  return {
    type: actionTypes.ANSWER_QUESTION_SUCCESS,
    authedUser,
    qid,
    answer
  };
}
