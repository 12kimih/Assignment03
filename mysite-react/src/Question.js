import React, { Component } from 'react'

class Question extends Component {
  answer(what) {
    this.props.handleAnswer({
      subject: this.props.subject,
      choice: what
    });
  }

  render() {

    return (
      <div>
        <div className="text-small">
        <span className="float-left">{this.props.author}</span>
        <span className="float-right">{this.props.qindex+1} / {this.props.qcount}</span>
        </div>
        <br />
        <h3 className="margin-top-zero">{this.props.subject}</h3>
        <input className="btn-like" type="button" value="호"
          onClick={this.answer.bind(this,"like")} />
        <input className="btn-dislike" type="button" value="불호"
          onClick={this.answer.bind(this,"dislike")} />
      </div>
    );
  }
}

export default Question;
