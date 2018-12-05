import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './App.css';
import InputName from './InputName';
import Question from './Question';
import Result from './Result';

const makeInitialState = () => {
  return {
    qindex: 0,
    user: '',
    userAnswer: []
  };
};

class HobulhoApp extends Component {

  constructor(props) {
    super(props);
    this.state = makeInitialState();
  }

  reset() {
    this.setState(makeInitialState());
  }

  handleUserName(name) {
    this.setState({
      user: name
    });
  }

  handleAnswer(ans) {
    this.setState({
      qindex: this.state.qindex + 1,
      userAnswer: this.state.userAnswer.concat(ans)
    });
  }

  render() {
    let qcount = this.props.questions && this.props.questions.length;
    if (this.state.redirect) {
      return this.state.redirect;
    } if (!this.props.author) {
      return <Redirect to="/" />;
    } else if (!qcount) {
      return (
        <div>
          <h1>{this.props.author}님은 호불호를 등록하지 않았습니다.</h1>
          <hr />
          <button className="btn btn-primary"
            onClick={() => {
              this.setState({ redirect: <Redirect to="/" /> });
            }}>
            다른 사람 찾아보기
          </button>
        </div>
      );
    } else if (!this.state.user) {
      return (
        <div>
          <h1>{this.props.author}님의 호불호를 알아보아요!</h1>
          <hr />
          <InputName
            label="당신의 이름을 입력해주세요."
            actionName="시작하기!"
            handleUserName={this.handleUserName.bind(this)} />
        </div>
      );
    } else if (this.state.qindex < qcount) {
      return <Question {...this.props.questions[this.state.qindex]}
        author={this.props.author}
        qindex={this.state.qindex}
        qcount={qcount}
        handleAnswer={this.handleAnswer.bind(this)} />
    } else {
      return <Result
        author={this.props.author}
        authorAnswer={this.props.questions}
        user={this.state.user}
        userAnswer={this.state.userAnswer}
        reset={this.reset.bind(this)} />
    }
  }
}

export default HobulhoApp;
