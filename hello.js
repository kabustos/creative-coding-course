const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [800, 800],
  animate: true,
  fps: 60,
};

const sketch = ({ context, width, height }) => {
  const ctx = context;
  let x = 0;
  let y = 0;

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);

  return ({frame}) => {
    
    if(frame > 138) return;
    
    x += 10;
    if(x > 460){
      y += 240;
      x = 0;
    }

    ctx.fillStyle = (frame % 2) ? 'black' : 'white';
    ctx.strokeStyle = context.fillStyle;
    // Set line width
    ctx.lineWidth = 10;

    // Wall
    ctx.strokeRect(x + 75, y + 140, 150, 110);

    // Door
    ctx.fillRect(x + 130, y + 190, 40, 60);

    // Roof
    ctx.beginPath();
    ctx.moveTo(x + 50, y + 140);
    ctx.lineTo(x + 150, y + 60);
    ctx.lineTo(x + 250, y + 140);
    ctx.closePath();
    ctx.stroke();
  };
};

canvasSketch(sketch, settings);
