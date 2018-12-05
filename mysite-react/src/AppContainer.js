import React, { Component } from 'react';
import HobulhoApp from './App'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: props.match.params.name,
      questions: [],
    };
  }

  componentDidMount() {
    let username = this.state.author;
    if (username) {
      fetch(`http://127.0.0.1:8000/hobulho/${username}/`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          questions: data,
        });
      })
      .catch(err => {
        console.log(err);
      });
    }
  }

  render() {
    return (
      <div className="container">
        <HobulhoApp {...this.state} />
      </div>
    );
  }
}

export default App;
