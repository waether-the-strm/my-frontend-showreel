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

  // ctx.font = '20px serif';
  // ctx.fillText(JSON.stringify(canvas.getBoundingClientRect()), 50,50)

  const moveLeft = () => isMovingRight = false;

  isMovingRight ? updateXPos(move(squareXPos, 2, 1)) : updateXPos(move(squareXPos, -2, -1));

  squareXPos > boundingRect && moveLeft();


  ctx.translate(squareXPos, verticalCentering(minSize));

  ctx.fillStyle = 'green';
  drawSquare(minSize)

  window.requestAnimationFrame(draw);

}

init();

// 1.	Napisz w Vanilla JS kod, który będzie wyświetlał w przeglądarce kwadrat o wymiarach 50px x 50px.
// - kwadrat ma poruszać się od lewej do prawej krawędzi przeglądarki z dowolną prędkością,
// - gdy kwadrat jest przy prawej krawędzi przeglądarki ma mieć wymiary 100px na 100px przy lewej ma zachować początkowe wymiary (50px x 50px)
// - kwadrat ma zmieniać swój kolor co 20px na losowy
