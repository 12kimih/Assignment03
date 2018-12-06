import React, { Component } from 'react'

class Answer extends Component {
  render() {
    return (
      <div className="inline-block">
        <span className={this.props.choice}>
          {this.props.subject}
        </span>
        &nbsp;
      </div>
    );
  }
}

export default Answer;
