// Test Redux
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// import Router from './router';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <h1>App</h1>
        </Provider>
      </div>
    );
  }
}

export default App;
