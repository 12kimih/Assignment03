import React, { Component } from 'react'
import Answer from './Answer'

class Result extends Component {
  render() {
    let correct = this.props.authorAnswer.reduce(
      (a, x, i) => {
        return x.choice === this.props.userAnswer[i].choice ? a + 1 : a;
      },
      0
    );
    let qcount = this.props.authorAnswer.length;
    let score = Math.round(100 * correct / qcount);

    return (
      <div>
        <h1>{this.props.author}님과의 호불호 일치도입니다!</h1>
        <div className="text-center">
          <span className="display-1">{score}</span>점<br />
          <span className="display-6">총 {qcount}개 중 {correct}개 일치</span>
        </div>

        <hr />

        <h3>
          {this.props.user}님:&nbsp;
          {this.props.userAnswer.map(
            (x, i) => <Answer key={i} {...x} />
          )}
        </h3>

        <div>
          <input className="btn btn-primary" type="button" value="다시하기!"
            onClick={this.props.reset} />
        </div>
      </div>
    );
  }
}

export default Result;
