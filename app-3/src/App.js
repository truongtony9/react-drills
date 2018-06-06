import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterStr: "",
      food: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }

  handleChange(filter) {
    this.setState({ filterStr: filter });
  }

  render() {
    let foodDisplay = this.state.food
      .filter((element, index) => {
        return element.includes(this.state.filterStr);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {foodDisplay}
      </div>
    );
  }
}

export default App;
