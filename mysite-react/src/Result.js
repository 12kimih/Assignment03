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
        <h3 className="margin-bottom-zero">{this.props.author}님과의 호불호 일치도입니다!</h3>
        <div>
          <span className="text-large">{score}</span>점
          <br />
          총 {qcount}개 중 {correct}개 일치
        </div>
        <hr />
        <div>
          {this.props.user}님:&nbsp;
          {this.props.userAnswer.map(
            (x, i) => <Answer key={i} {...x} />
          )}
        </div>
        <div>
          <input className="btn-primary" type="button" value="다시하기"
            onClick={this.props.reset} />
        </div>
      </div>
    );
  }
}

export default Result;
