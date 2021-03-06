import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.objectOf(PropTypes.number),
    removeFromOrder: PropTypes.func,
  }
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    const transitionOption = {
      classNames: "order", 
      key, 
      timeout: {enter: 500, exit: 500}
    }
    if(!fish) return null; // make sure data is loaded from firebase
    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOption} >
          <li key={key}>
            Sorry {fish ? fish.name : 'fish'} is no longer available
          </li>
        </CSSTransition>
      );      
    } 
    return (
      <CSSTransition {...transitionOption} >
        <li key={key}>
          <span>
          <TransitionGroup component='span' className="count">
            <CSSTransition 
              classNames="count" 
              key={count} 
              timeout={{enter: 500, exit: 500}}
            >
              <span>{count}</span>
            </CSSTransition>
          </TransitionGroup>            
            lbs {fish.name}
            {formatPrice(fish.price * count)}
            <button onClick={()=>this.props.removeFromOrder(key)}>&times;</button>
          </span>
        </li>
      </CSSTransition>
      );
  } 

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if(isAvailable){
        return prevTotal + (fish.price * count);
      } else {
        return prevTotal;
      }
      
    }, 0);
    
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>          
        <div className="total">
          Total:
          <strong>
            {formatPrice(total)}
          </strong>          
        </div>
      </div>
    );
  }
}

export default Order;