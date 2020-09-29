function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  noStroke();

}

function draw() {

  background('yellow');


  translate(width / 2, height / 2);
  scale(frameCount * 2);
  noFill();
  stroke(lerpColor(color('black'), color('white'), frameCount/600))
  ellipse(0, 0, 1, 1);

}
