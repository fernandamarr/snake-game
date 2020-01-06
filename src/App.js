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

const initialState = {
  food: randomPosition(),
  speed: 500,
  direction: 'right',
  snake: [
    [0,0],
    [2,0]
  ]
}

class App extends Component {
  state = initialState

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed)
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkBorders();
  }

  onKeyDown = (e) => {
    e = e || window.event;
    switch(e.keyCode) {
      case 38:
        this.setState({direction: 'up'});
      break;
      case 40:
        this.setState({direction: 'down'});
      break;
      case 37:
        this.setState({direction: 'left'});
      break;
      case 39:
        this.setState({direction: 'right'});
      break;
      default:
    }
  }

  moveSnake = () => {
    let dots = [...this.state.snake];
    let head = dots[dots.length - 1];
    switch(this.state.direction) {
      case 'right':
        head = [head[0] + 2, head[1]];
        break;
      case 'left':
        head = [head[0] - 2, head[1]];
        break;
      case 'down':
        head = [head[0], head[1] + 2];
        break;
      case 'up':
        head = [head[0], head[1] - 2];
        break;
      default:
    }
    // add head
    dots.push(head);
    // remove tail, first item in arr
    dots.shift()
    this.setState({
      snake: dots
    })
  }

  checkBorders() {
    let head = this.state.snake[this.state.snake.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.gameOver();
    }
  }

  gameOver() {
    alert('GAME OVER');
    this.setState(initialState)
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
