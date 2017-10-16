import React, { Component } from 'react';
import './Item.css'

class Item extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.data.name}({this.props.data.code})</h3>
        <div>{this.props.data.quantity}</div>
        <div>{this.props.data.price}</div>
      </div>

    );
  }
}
export default Item;
