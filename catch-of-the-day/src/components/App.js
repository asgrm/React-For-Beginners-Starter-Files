import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes.js';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  loadSamplesFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  }

  addFish = fish => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes
    });

    console.log('adding a fish');
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market" />
        </div>
        <Order />
        <Inventory addFish ={this.addFish} loadSamples={this.loadSamplesFishes}/>
      </div>
    )
  }
}

export default App;