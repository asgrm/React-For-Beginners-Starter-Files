import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes.js';
import Fish from './Fish'
import fishes from '../sample-fishes.js';

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

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  addFish = fish => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes
    });

  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market" />
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => <Fish 
                key={key} 
                index={key} 
                addToOrder={this.addToOrder} 
                details={this.state.fishes[key]}
              />
              )}
            </ul>
        </div>
        <Order />
        <Inventory addFish ={this.addFish} loadSamplesFishes={this.loadSamplesFishes}/>
      </div>
    )
  }
}

export default App;