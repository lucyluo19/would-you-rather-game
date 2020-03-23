import React, { Component } from "react";
import { Segment, Label, Grid, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import PollContent from "./PollContent";
import * as pollTypes from "./pollTypes";
import PropTypes from "prop-types";
import NotFound from "../common/NotFound";

class Poll extends Component {
  render() {
    const { question, author, unanswer, user, pollType, noPoll } = this.props;

    if (noPoll) return <NotFound />;

    return (
      <Segment color={unanswer ? "blue" : "violet"}>
        <Label attached="top">{`${author.name} asks: `}</Label>
        <Grid divided>
          <Grid.Column width={5} verticalAlign="middle">
            <Image
              circular
              src={author.avatarURL || "/images/placeholder.png"}
            />
          </Grid.Column>

          <Grid.Column width={11}>
            <PollContent
              pollType={pollType}
              question={question}
              unanswer={unanswer}
              user={user}
            />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

Poll.propTypes = {
  pollType: PropTypes.string,
  question: PropTypes.object,
  unanswer: PropTypes.bool,
  user: PropTypes.object.isRequired,
  author: PropTypes.object
};

function mapStateToProps({ users, questions, authedUser }, { match, qid }) {
  let question, pollType, author;
  let noPoll = false;
  const user = users[authedUser];

  if (qid !== undefined) {
    question = questions[qid];
    pollType = pollTypes.POLL_OVERVIEW;
    author = users[question.author];
  } else {
    const qid = match.params.id;
    question = questions[qid];

    if (question === undefined) {
      noPoll = true;
    } else {
      author = users[question.author];
      pollType = pollTypes.POLL_DETAIL;

      if (Object.keys(user.answers).includes(question.id)) {
        pollType = pollTypes.POLL_RESULT;
      }
    }
  }

  return {
    noPoll,
    question,
    author,
    user,
    pollType
  };
}

export default connect(mapStateToProps)(Poll);
