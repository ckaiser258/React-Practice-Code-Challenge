import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

let fetchSushi = () => {
  fetch(API)
  .then(resp => resp.json())
  .then(sushis => {
    console.log(sushis)
  })
}

class App extends Component {

  state = {
    sushis: fetchSushi()
  }

  fourSushis = () => {
    let fourSushi = this.state.sushis.slice(0, 4)
    this.setState({
      sushis: fourSushi
    })
    console.log(fourSushi)
  }


  render() {
    return (
      <div className="app">
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

export default App;