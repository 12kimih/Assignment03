import React, { Component } from 'react'

class InputName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={() => this.props.handleUserName(this.state.name)}>
          <div>
            <label for="username">{this.props.label}</label><br />
            <input id="username" type="text" required
              value={this.state.name}
              onChange={(evt) => this.setState({name: evt.target.value})} />
          </div>
          <input className="btn-primary" type="submit"
            value={this.props.actionName || "제출하기"} />
        </form>
      </div>
    );
  }
}

export default InputName;
