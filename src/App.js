import React, { Component } from 'react';
import Snake from './components/Snake';
import Food from './components/Food';

// Place snake food in random coordinates
const randomPosition = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y]
}

class App extends Component {
  state = {
    food: randomPosition(),
    snake: [
      [0,0],
      [2,0]
    ]
  }
  render() {
    return (
      <div className='game-area'>
        <Snake snake={this.state.snake} />
        <Food dot={this.state.food} />
      </div>
      
    );
  }
}

export default App;
