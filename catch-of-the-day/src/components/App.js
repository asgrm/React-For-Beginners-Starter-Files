import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish'
import base from '../base';



class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const {params} = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    
    if(localStorageRef) {
      this.setState({order: JSON.parse(localStorageRef)});
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentDidUpdate(){
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
  }


  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory addFish ={this.addFish} loadSamplesFishes={this.loadSamplesFishes}/>
      </div>
    )
  }
}

export default App;