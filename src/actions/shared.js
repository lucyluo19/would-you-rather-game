import { loadQuestions, addQuestion, answerQuestion } from "./questions";
import { loadUsers, addQuestionUser, answerQuestionUser } from "./users";
import { getData, saveQuestion, saveQuestionAnswer } from "../utils/api";
import { beginApiCall, apiCallError } from "./apiStatus";
import { toast } from "react-toastify";

export function loadData() {
  return dispatch => {
    dispatch(beginApiCall());

    return getData()
      .then(({ users, questions }) => {
        dispatch(loadQuestions(questions));
        dispatch(loadUsers(users));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        toast.error(error);
      });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    dispatch(beginApiCall());
    const { authedUser } = getState();

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then(question => {
        dispatch(addQuestion(question));
        dispatch(addQuestionUser(authedUser, question.id));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        toast.error(error);
      });
  };
}

export function handleAnswerQuestion(qid, answer) {
  return (dispatch, getState) => {
    dispatch(beginApiCall());
    const { authedUser } = getState();

    return saveQuestionAnswer(authedUser, qid, answer)
      .then(() => {
        dispatch(answerQuestion(authedUser, qid, answer));
        dispatch(answerQuestionUser(authedUser, qid, answer));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        toast.error(error);
      });
  };
}
