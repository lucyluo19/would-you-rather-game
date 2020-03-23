import React, { Component } from "react";
import { LeaderBoardItem } from "./LeaderBoardItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class LeaderBoard extends Component {
  render() {
    const { leaders } = this.props;
    return (
      <div>
        {leaders.map((leader, index) => (
          <LeaderBoardItem key={leader.id} leader={leader} index={index} />
        ))}
      </div>
    );
  }
}

LeaderBoard.propTypes = {
  leader: PropTypes.object,
  index: PropTypes.number,
  leaders: PropTypes.array.isRequired
};

function mapStateToProps({ users }) {
  const leaders = Object.values(users)
    .map(user => ({
      id: user.id,
      username: user.name,
      avatar: user.avatarURL,
      answered: Object.values(user.answers).length,
      created: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 3);

  return { leaders };
}

export default connect(mapStateToProps)(LeaderBoard);
