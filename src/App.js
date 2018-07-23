import React, { Component } from 'react';
import './App.css';
import Name from "./component/name/Name"

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: " "
    }
    this.handleName = this.handleName.bind(this)
    this.changeName = this.changeName.bind(this)
  }

  handleName(val) {
    this.setState({ name: val })
  }
  changeName(name) {
    this.setState({ name: name })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <input type="text" onChange={(e) => this.handleName(e.target.value)} />
        <button onClick={() => this.changeName(this.state.name)}>Change Name</button>
        <p>
          {this.state.name}
        </p>
        <div>
        </div>
        <div>
          <Name hat={this.state.name} />
        </div>
      </div>
    );
  }
}

export default App;
