import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import InputName from './InputName'

class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: null };
  }

  render() {
    return this.state.redirect || <InputName
      label="호불호를 알아볼 사용자의 이름을 적어주세요."
      actionName="시작하기!"
      handleUserName={(name) => {
        this.setState({ redirect: <Redirect to={`/${name}`} /> });
      }} />
  }
}

export default SearchUser;
