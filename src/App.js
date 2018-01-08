import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.update = this.update.bind(this)
    this.state = {
      value : ''
    }
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" value={this.state.value} onChange={this.update}/>
        <p className="repeater">{this.state.value}</p>
      </div>
    );
  }
  update(e) {
    this.setState({
      value : e.target.value
    })
  }
}

export default App;
