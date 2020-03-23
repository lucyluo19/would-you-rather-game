import React from "react";
import * as pollTypes from "./pollTypes";
import PollOverview from "./PollOverview";
import { PollResult } from "./PollResult";
import PollDetail from "./PollDetail";

const PollContent = ({ pollType, question, unanswer, user }) => {
  switch (pollType) {
    case pollTypes.POLL_OVERVIEW:
      return <PollOverview question={question} unanswer={unanswer} />;
    case pollTypes.POLL_DETAIL:
      return <PollDetail question={question} />;
    case pollTypes.POLL_RESULT:
      return <PollResult question={question} user={user} />;
    default:
      return;
  }
};

export default PollContent;
