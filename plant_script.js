let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
let CANVAS_WIDTH = (canvas.width = 600);
let CANVAS_HEIGHT = (canvas.height = 600);

let plantImage = new Image();
plantImage.src = "plant.jpeg";

let $water = document.getElementById("water");
$water.addEventListener("click", function () {
  if (frame < 3) frame++;
  document.getElementById("stage").innerHTML = "Stage " + (frame + 1);
});

let $cut = document.getElementById("cut");
$cut.addEventListener("click", function () {
  frame = 0;
  document.getElementById("stage").innerHTML = "Stage 1";
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
  
  

  
  let $altWater1 = document.getElementById("altWater1");
  let $altWater2 = document.getElementById("altWater2");
  let $altWater3 = document.getElementById("altWater3");

  function waterLine() {
    ctx.fillRect(dx / 3, CANVAS_HEIGHT - 82, 98, 70, 60);
    ctx.fillStyle = "blue";
  }

  $water.addEventListener("click", waterLine);
  let vase = 0;
  function waterLine() {
    vase++;
    if (vase === 1) {
      $altWater3.classList.add("opacity0");
    }
    if (vase === 2) {
      $altWater2.classList.add("opacity0");
    }
    if (vase === 3) {
      $altWater1.classList.add("opacity0");
    }
  }
  requestAnimationFrame(animate);
}

animate();





/*
תכנית- כל לחיצה מורידה מגובה המים:

הולך לכפתור הקיים של לחיצה על וואטר. בכל לחיצה- תוריד 25% מהייט של המים. , כל עוד גובה מים שווה או גדול מ-25% מגובה המים. 




*/

// let $myCanvas = document.getElementById("myCanvas");
// let $myButton = document.getElementById("myButton");
// let $water1 = document.getElementById("water1");
// let $water2 = document.getElementById("water2");
// let $water3 = document.getElementById("water3");

// let stage = 0;

// $myButton.addEventListener("click", edit);

// function edit() {
//   stage++;
//   if (stage > 0 && stage < 3) {
//     $water1.style.backgroundColor = "blue";
//   }
//   if (stage > 1 && stage < 3) {
//     $water2.style.backgroundColor = "blue";
//   }
//   if (stage > 2 && stage < 4) {
//     $water3.style.backgroundColor = "blue";
//   }
//   if (stage > 3) {
//     $water1.style.backgroundColor = "white";
//     $water2.style.backgroundColor = "white";
//     $water3.style.backgroundColor = "white";
//     stage = 0;
//   }
// }
