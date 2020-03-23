import React, { Fragment } from "react";
import { Header, Progress, Segment } from "semantic-ui-react";
import { YourVoteLabel } from "../leaderboard/YourVoteLabel";

export const PollResult = ({ question, user }) => {
  const numberVoteOptionOne = question.optionOne.votes.length;
  const numberVoteOptionTwo = question.optionTwo.votes.length;

  const totalVotes = numberVoteOptionOne + numberVoteOptionTwo;
  const optionOnePercent = Math.floor((numberVoteOptionOne / totalVotes) * 100);
  const optionTwoPercent = 100 - optionOnePercent;

  const yourVote = user.answers[question.id];

  const optionOneBgColor = yourVote === "optionOne" ? "#cce0ff" : "#fff";
  const optionTwoBgColor = yourVote === "optionTwo" ? "#cce0ff" : "#fff";

  return (
    <Fragment>
      <Header>Result:</Header>

      <Segment style={{ backgroundColor: optionOneBgColor }}>
        {yourVote === "optionOne" && <YourVoteLabel />}
        <strong>
          <p>{`Would you rather ${question.optionOne.text}?`}</p>
        </strong>
        <Progress percent={optionOnePercent} progress color="blue">
          {`${numberVoteOptionOne} out of ${totalVotes}`}
        </Progress>
      </Segment>

      <Segment style={{ backgroundColor: optionTwoBgColor }}>
        {yourVote === "optionTwo" && <YourVoteLabel />}
        <strong>
          <p>{`Would you rather ${question.optionTwo.text}?`}</p>
        </strong>
        <Progress percent={optionTwoPercent} progress color="blue">
          {`${numberVoteOptionTwo} out of ${totalVotes}`}
        </Progress>
      </Segment>
    </Fragment>
  );
};
