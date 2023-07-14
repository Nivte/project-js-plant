let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
let CANVAS_WIDTH = (canvas.width = 600);
let CANVAS_HEIGHT = (canvas.height = 600);
let stage = document.getElementById("stage");
let waterHeight = 300;
let waterTop = 290;

let frame = 0;

let plantImage = new Image();
plantImage.src = "plant.jpeg";

let $waterBtn = document.getElementById("waterBtn");

$waterBtn.addEventListener("click", function () {
  if (frame < 3) frame++;
  stage.innerHTML = "Stage " + (frame + 1);
});

$waterBtn.addEventListener("click", waterLine);

let p = 1;

function waterLine() {
  if (p === 1) {
    waterHeight = 200;
    waterTop = 390;
  }

  if (p === 2) {
    waterHeight = 100;
    waterTop = 490;
  }

  if (p === 3) {
    waterHeight = 0;
    waterTop = 0;
  }
  p++;
}

let $cutBtn = document.getElementById("cutBtn");
$cutBtn.addEventListener("click", function () {
  stage.innerHTML = "Stage 1";

  frame = 0;

  if (p > 1) {
    waterHeight = 300;
    waterTop = 290;
    p = 1;
  }
});

let frameW = 227;
let frameH = 466;
let dx = (CANVAS_WIDTH - frameW) / 2;
let dy = CANVAS_HEIGHT - frameH;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  ctx.drawImage(
    plantImage,
    frameW * frame,
    0,
    frameW,
    frameH,
    dx,
    dy,
    frameW,
    frameH
  );
  ctx.strokeRect(dx / 3, CANVAS_HEIGHT - 310, 100, 300);
  ctx.lineWidth = 5;

  ctx.fillRect(65, waterTop, 94, waterHeight);
  ctx.fillStyle = "#7cb9e8";

  requestAnimationFrame(animate);
}

animate();



