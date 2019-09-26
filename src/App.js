import React, { Component } from 'react';
import { CardList } from './Components/card-list/card-list-component.jsx';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters:[],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users =>  this.setState({monsters: users}));
  }
  render(){
    return (
      <div className="App">
        <h1> Nikhila </h1>
        <h1> Hi Nik you are Awesome </h1>
        <input 
          type="search" 
          placeholder='search monsters'
          onChange={ e => this.setState({ searchField: e.target.value})}
          />
        <CardList monsters= {this.state.monsters} />
              
      </div>
    );
  }
}

export default App;
