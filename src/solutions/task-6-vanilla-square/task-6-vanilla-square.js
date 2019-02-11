/**
 *                  DANGER
 *          !!! CONSTRUCTION SITE !!!
 *       This task is under construction
 *       please, come back later (maybe…)
 *
 *                    :)
 */

const init = () => {
  window.requestAnimationFrame(draw);
}

let squareXPos = 0;
let isMovingRight = true;
let lastPosX = 0;

const draw = () => {
  const canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const height = canvas.height;
  const width = canvas.width;

  const time = new Date();

  const ctx = canvas.getContext('2d');

  const minSize = 50;
  const maxSize = 100;

  const boundingRect = {
    left: 0,
    right: width - minSize
  }


  const drawSquare = (size) => ctx.fillRect(0, 0, size, size)
  const verticalCentering = (size) => ((height - size) / 2)

  const move = (val, speed, direction) => (val + speed) * direction;
  const updateXPos = (xPos) => squareXPos = xPos;

  ctx.clearRect(0, 0, width, height);

  const moveLeft = () => isMovingRight = false;

  isMovingRight ? updateXPos(move(squareXPos, 2, 1)) : updateXPos(move(squareXPos, -2, -1));

  squareXPos > boundingRect && moveLeft();


  ctx.translate(squareXPos, verticalCentering(minSize));

  ctx.fillStyle = 'green';
  drawSquare(minSize)

  window.requestAnimationFrame(draw);

}

init();
