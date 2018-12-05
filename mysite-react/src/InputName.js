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
          <div className="form-group">
            <label for="username">{this.props.label}</label>
            <input id="username" className="form-control" type="text" required
              value={this.state.name}
              onChange={(evt) => this.setState({name: evt.target.value})} />
          </div>
          <input className="btn btn-primary" type="submit"
            value={this.props.actionName || "제출"} />
        </form>
      </div>
    );
  }
}

export default InputName;
