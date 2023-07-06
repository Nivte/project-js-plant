let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
let CANVAS_WIDTH = (canvas.width = 600);
let CANVAS_HEIGHT = (canvas.height = 600);

screen.orientation.lock("landscape");

let plantImage = new Image();
plantImage.src = "plant.jpeg";

let $water = document.getElementById("water");

$water.addEventListener("click", function () {
  if (frame < 3) frame++;
  document.getElementById("stage").innerHTML = "Stage " + (frame + 1);
});

let vase = 0;
let $waterPoll = document.getElementById("waterPoll");

$water.addEventListener("click", waterLine);

function waterLine() {
  vase++;
  if (vase === 1) {
    $waterPoll.classList.add("sizeStage2");
  }
  if (vase === 2) {
    $waterPoll.classList.add("sizeStage3");
  }
  if (vase === 3) {
    $waterPoll.classList.add("sizeStage4");
  }

}

let $cut = document.getElementById("cut");
$cut.addEventListener("click", function () {
  frame = 0;
  document.getElementById("stage").innerHTML = "Stage 1";

  if (vase >= 3) {
    $waterPoll.classList.remove("sizeStage4");
    $waterPoll.classList.remove("sizeStage3");
    $waterPoll.classList.remove("sizeStage2");
    // $waterPoll.style.height = "20vh";
    // $waterPoll.style.top = "59.4vh";
    vase = 0;
  } 
});

let frame = 0;
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

  // let $altWater1 = document.getElementById("altWater1");
  // let $altWater2 = document.getElementById("altWater2");
  // let $altWater3 = document.getElementById("altWater3");

  // function waterLine() {
  //   ctx.fillRect(dx / 3, CANVAS_HEIGHT - 82, 98, 70, 60);
  //   ctx.fillStyle = "blue";
  // }

  requestAnimationFrame(animate);
}

animate();
