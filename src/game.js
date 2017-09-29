// game.js

import Snake from './snake';

/** @class Game
  * Represents a snake game
  */
export default class Game {
  constructor() {
    this.snake = new Snake();
    this.food = [];
    // Create the canvas
    this.backBufferCanvas = document.createElement('canvas');
    this.backBufferCanvas.width = 100;
    this.backBufferCanvas.height = 100;
    this.backBufferContext = this.backBufferCanvas.getContext('2d');

    this.screenBufferCanvas = document.createElement('canvas');
    this.screenBufferCanvas.width = 100;
    this.screenBufferCanvas.height = 100;
    document.body.appendChild(this.screenBufferCanvas);
    this.screenBufferContext = this.screenBufferCanvas.getContext('2d');

    this.interval = setInterval(()=>this.render(), 100);

    let message = document.createElement('div');
    message.id = "message";
    message.innerText = "";
    document.appendChild(message);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    window.addEventListener('keydown', handleKeyDown);
  }

  gameOver() {
    var message = document.getElementById('message');
    message.innerText = 'Game Over';
  }

  handleKeyDown = function(event) {
    switch(event.key){
      case 'w':
      case 'ArrowUp':
        this.direction = 'up';
        break;
      case 'a':
      case 'ArrowLeft':
        this.direction = 'left';
        break;
      case 's':
      case 'ArrowDown':
        this.direction = 'down';
        break;
      case 'd':
      case 'ArrowRight':
        this.direction = 'right';
        break;
    }
  };

  update() {
    if (!this.over) {

    } else {

    }

    this.food.forEach((food) => {
      food.update();
    });
    this.snake.update();
  }
  render() {
    this.backBufferContext.clearRect(0, 0, this.backBufferContext.canvas.width, this.backBufferContext.canvas.height);
    this.food.forEach((food)=>{
      food.render(this.backBufferContext);
    });
    this.snake.render(this.backBufferContext);

    this.screenBufferContext.clearRect(0, 0, this.screenBufferContext.canvas.width, this.screenBufferContext.canvas.height);
    this.screenBufferContext.drawImage(this.backBufferCanvas, 0, 0);
  }
}
