import React  from 'react';
import PropTypes from 'prop-types';


class EditFishForm extends React.Component {
  static propTypes = {
    deleteFish: PropTypes.func,
    fish: PropTypes.shape({
      desc: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func,
  }

  handleChange = (e) => {
    const updatedFish = { 
      ...this.props.fish, 
      [e.currentTarget.name]: e.currentTarget.value
    };
    console.log(updatedFish);
    this.props.updateFish(this.props.index, updatedFish);
  }
  
  render() {
    return (
      <div className="fish-edit">
        <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name}/>
        <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price}/>
        <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}></textarea>
        <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image}/>
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    );  
  }
}

export default EditFishForm;