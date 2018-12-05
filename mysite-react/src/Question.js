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
        <div className="row">
          <div className="col">
            {this.props.author}
          </div>
          <div className="col text-right">
            {this.props.qindex+1} / {this.props.qcount}
          </div>
        </div>
        <h1>{this.props.subject}?</h1>
        <input className="btn btn-lg btn-success btn-block" type="button" value="호"
          onClick={this.answer.bind(this,"like")} />
        <input className="btn btn-lg btn-danger btn-block" type="button" value="불호"
          onClick={this.answer.bind(this,"dislike")} />
      </div>
    );
  }
}

export default Question;
