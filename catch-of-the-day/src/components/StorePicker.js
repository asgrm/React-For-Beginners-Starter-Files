import React from 'react';

class StorePicker extends React.Component {
  render() {
    return ( 
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="enter store name"/>
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;