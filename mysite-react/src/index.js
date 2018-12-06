import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchUser from './SearchUser'
import AppContainer from './AppContainer';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SearchUser} />
            <Route path="/:name" component={AppContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
