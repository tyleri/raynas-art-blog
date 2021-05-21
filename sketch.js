function setup() {
   var canvas = createCanvas(100, 50);
 canvas.parent("sketch");
  let img = createImg(
  'https://p5js.org/assets/img/asterisk-01.png',
  'the p5 magenta asterisk');
  img.position(100, 50);
}

function draw() {
  background(220);
}
