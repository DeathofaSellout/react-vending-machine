import React, { Component } from 'react';
import './App.css';
import Item from './components/Item';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      items: [
        {
          name: "Coca Cola",
          price: 50,
          quantity: 10,
          code: "A1"
        }, {
          name: "Sprite",
          price: 50,
          quantity: 10,
          code: "B2"
        }, {
          name: "Mr. Pibb",
          price: 75,
          quantity: 10,
          code: "C3"
        }
      ]
    };
  }
  addBalance(amount){
    this.setState({
      balance: this.state.balance + amount,
    });
  }

  render() {
    let elements = [];
    this.state.items.forEach((e,i) => {
      elements.push(<Item data={e} key={i}/>);
    });
    return (
      <div className="App">
        <p className="display -sm-width">{this.state.balance}</p>
        <button className="button -yellow" onClick={(e) => this.addBalance(5)}>05c</button>
        <button className="button -blue" onClick={(e) => this.addBalance(10)}>10c</button>
        <button className="button -green" onClick={(e) => this.addBalance(25)}>25c</button>
        {elements}
      </div>
    );
  }
}

export default App;
