import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import Poll from "./Poll";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Loading } from "../common/Loading";

class Dashboard extends Component {
  render() {
    const {
      answeredQuestionsIds,
      unansweredQuestionsIds,
      loading
    } = this.props;

    if (loading) return <Loading />;

    return (
      <Tab panes={panes({ answeredQuestionsIds, unansweredQuestionsIds })} />
    );
  }
}

const panes = ({ answeredQuestionsIds, unansweredQuestionsIds }) => {
  return [
    {
      menuItem: "Unanswered Questions",
      render: () => (
        <Tab.Pane>
          {unansweredQuestionsIds.map(qid => (
            <Poll key={qid} qid={qid} unanswer={true} />
          ))}
        </Tab.Pane>
      )
    },
    {
      menuItem: "Answered Questions",
      render: () => (
        <Tab.Pane>
          {answeredQuestionsIds.map(qid => (
            <Poll key={qid} qid={qid} unanswer={false} />
          ))}
        </Tab.Pane>
      )
    }
  ];
};

Dashboard.propTypes = {
  questions: PropTypes.object,
  qid: PropTypes.string,
  answeredQuestionsIds: PropTypes.array.isRequired,
  unansweredQuestionsIds: PropTypes.array.isRequired
};

function mapStateToProps({ authedUser, users, questions, apiCallsInProgress }) {
  const currentUser = users[authedUser];
  const answeredQuestionsIds = Object.keys(currentUser.answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const unansweredQuestionsIds = Object.keys(questions)
    .filter(qid => !answeredQuestionsIds.includes(qid))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  return {
    answeredQuestionsIds,
    unansweredQuestionsIds,
    loading: apiCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(Dashboard);
