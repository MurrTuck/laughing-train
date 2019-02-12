import React, { Component } from 'react';
import Todos from './components/Todos'

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Keep working on the app',
        completed: false,
        timeEstimate: "+1 Hour"
      },
      {
        id: 2,
        title: 'Finish Emails',
        completed: false,
        timeEstimate: "1 Hour"
      },
      {
        id: 3,
        title: 'Take out Trash',
        completed: false,
        timeEstimate: "30 Min or less"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Laughing Train</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
