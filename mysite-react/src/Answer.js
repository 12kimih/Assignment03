import React, { Component } from 'react'

const ANSWER_CLASS = {
  'like': 'badge badge-success',
  'dislike': 'badge badge-danger'
}

class Answer extends Component {
  render() {
    return (
      <div className="d-inline-flex">
        <span className={ANSWER_CLASS[this.props.choice]}>
          {this.props.subject}
        </span>
        &nbsp;
      </div>
    );
  }
}

export default Answer;
