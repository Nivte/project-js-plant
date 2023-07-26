let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
let CANVAS_WIDTH = (canvas.width = 600);
let CANVAS_HEIGHT = (canvas.height = 600);
let stageTitle = document.getElementById("stageTitle");
let waterHeight = 300;
let waterTop = 290;

let frame = 0;

let plantImage = new Image();
plantImage.src = "plant.jpeg";

let $waterBtn = document.getElementById("waterBtn");

$waterBtn.addEventListener("click", function () {
  if (frame < 3) {
    stageTitle.innerHTML = "Stage " + (frame + 1);
    waterLine();
  }
});

// $waterBtn.addEventListener("click", waterLine);

function waterLine() {
  frame++;
}

let $cutBtn = document.getElementById("cutBtn");
$cutBtn.addEventListener("click", function () {
  frame = 0;
  stageTitle.innerHTML = "Stage " + frame;

  waterHeight = 300;
  waterTop = 290;
});

let frameW = 227;
let frameH = 466;
let dx = (CANVAS_WIDTH - frameW) / 2;
let dy = CANVAS_HEIGHT - frameH;

function animatePic() {
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

  requestAnimationFrame(animatePic);
}

animatePic();

function animateWater() {
  // water structure

  ctx.strokeRect(dx / 3, CANVAS_HEIGHT - 310, 100, 300);
  ctx.lineWidth = 5;

  // water fill
  ctx.fillRect(65, waterTop, 94, waterHeight);
  ctx.fillStyle = "#7cb9e8";

  if (frame === 1 && waterHeight > 200) {
    // waterHeight = 200;
    // waterTop = 390;
    waterHeight -= 1.5;
    waterTop += 1.5;
  }

  if (frame === 2 && waterHeight > 100) {
    waterHeight -= 1.5;
    waterTop += 1.5;
  }

  if (frame === 3 && waterHeight > 0) {
    waterHeight -= 1.5;
    waterTop += 1.5;
  }

  requestAnimationFrame(animateWater);
}
animateWater();

// function roll() {
//   secondWorkZone.clearRect(0, 0, 300, 300);
//   secondWorkZone.fillRect(x2, 0, 300, 150);

//   x2 += 0.4;

//   if (x2 > 300) {
//     // $secondCanvas.style.backgroundColor="black";

//     setTimeout(() => {
//       $secondCanvas.classList.add("black1");

//       setTimeout(() => {
//         $secondCanvas.classList.remove("black1");

//         x2 = 0;
//       }, 3000);
//     }, 1500);
//   }

//   requestAnimationFrame(roll);
// }
// roll();
