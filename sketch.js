let x = false;
let wheelSize = 80;
let wheelSpace = 120;
let moveX =0;
let moveY =0;
let wheelRot = 0;
var drop = []



function setup() {
  createCanvas(800, 800);
  
  angleMode(DEGREES);
  
   for(var i = 0; i < 200; i++) {
    drop[i] = new Drop();
}
}

function draw() {
  background(105, 174, 105);
  fill(255, 128, 0);
  circle(140, 85, 30);
  circle(160, 85, 30);
  circle(140, 100, 30);
  circle(160, 100, 30);

  fill(255, 0, 0);
  circle(150, 95, 20);
  
  fill(255, 300, 0);
  circle(460, 380, 30);
  circle(460, 390,30);
  circle(480,380, 30);
  circle(480, 390, 30);

  fill(255, 0, 0);
  circle(470, 385, 20);
  
  fill(255, 128, 0);
  circle(450, 590, 30);
  circle(450, 600, 30);
  circle(470,590, 30);
  circle(470, 600, 30);

  fill(255, 0, 0);
  circle(460, 595, 20);
  roadCar();
  stroke(0);
  Redcar();
  
  for(var i = 0; i < 200; i++) {
  drop[i].show();
  drop[i].update();
}
    
}
function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);
  
  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, random(1, 5), random(1, 5));   
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
}
}
}

function keyPressed() {
  if(keyCode === RIGHT_ARROW) {
    moveX += 10;
    wheelRot += 5;
  } else if(keyCode === LEFT_ARROW){
    moveX -= 10;
    wheelRot -= 5;
  }
    else if(keyCode === UP_ARROW) {
    moveY -= 250;
      wheelRot += 5;
  } else if(keyCode === DOWN_ARROW){
    moveY += 250;
    wheelRot -= 5;
  }
  console.log(moveY);
  if (moveY>300){
    moveY=250;
  }
  if (moveY<-300){
    moveY=-250;
  }
}

function Redcar(){
  
  fill(0,0,0);
  ellipse(width/2 - wheelSpace+moveX ,height/2+(80)+moveY, wheelSize);
  ellipse(width/2 + wheelSpace+moveX ,height/2+(80)+moveY, wheelSize);
  fill(150, 0, 0);
  ellipse(width/2 - wheelSpace+moveX ,height/2+(80)+moveY, wheelSize-20);
  ellipse(width/2 + wheelSpace+moveX ,height/2+(80)+moveY, wheelSize-20);
  
   push();
    translate((width/2 - wheelSpace) + moveX, height/2+(75) +moveY);
    rotate(wheelRot);
    ellipse(0,0, wheelSize);
    strokeWeight(3);
    stroke(175);
  for (let i = 0; i < 50; i ++) {
    line(0, 0 - wheelSize/2,0, 0 + wheelSize/2);
    line(0-wheelSize/2,0,0 + wheelSize/2, 0);
    rotate(PI/5);
  }
  pop();
  
  push();
    translate((width/2 + wheelSpace) + moveX, height/2+(75) +moveY);
    rotate(wheelRot);
    ellipse(0,0, wheelSize);
    strokeWeight(3);
    stroke(175);
  for (let i = 0; i < 50; i ++) {
    line(0, 0 - wheelSize/2,0, 0 + wheelSize/2);
    line(0-wheelSize/2,0,0 + wheelSize/2, 0);
    rotate(PI/5);
  }
  pop();
  
  push();
  
  fill(255,0,0);
  beginShape();
  vertex(200+moveX, 380+moveY);
  vertex(180+moveX, 480+moveY);
  vertex(620+moveX, 480+moveY);
  vertex(600+moveX, 380+moveY);
  endShape(CLOSE);
  noStroke();
  fill(255,255,0);
  beginShape();
  vertex(275+moveX, 280+moveY);
  vertex(250+moveX, 380+moveY);
  vertex(550+moveX, 380+moveY);
  vertex(525+moveX, 280+moveY);
  endShape(CLOSE);
  fill(105, 252, 255);
  beginShape();
  vertex(285+moveX, 290+moveY);
  vertex(265+moveX, 370+moveY);
  vertex(530+moveX, 370+moveY);
  vertex(515+moveX, 290+moveY);
  endShape(CLOSE);
  fill(255, 252, 0);
  beginShape();
  vertex(210+moveX, 390+moveY);
  vertex(200+moveX, 430+moveY);
  vertex(240+moveX, 430+moveY);
  vertex(240+moveX, 390+moveY);
  endShape(CLOSE);
  fill(60,60,60);
  beginShape();
  vertex(390+moveX, 290+moveY);
  vertex(390+moveX, 370+moveY);
  vertex(410+moveX, 370+moveY);
  vertex(410+moveX, 290+moveY);
  endShape(CLOSE);
  fill(60,60,60);
  beginShape();
  vertex(350+moveX, 400+moveY);
  vertex(350+moveX, 410+moveY);
  vertex(365+moveX, 410+moveY);
  vertex(370+moveX, 400+moveY);
  endShape(CLOSE);
      textSize(60);
      textStyle(BOLD);
      textAlign(CENTER);
      fill(255,174,2);
      text("M",width/1.25 - wheelSpace+moveX ,height/1.85+moveY);
      pop();
}




function roadCar(){
  //เส้นแรก
  noStroke()
  fill(114);
  rect(0,180,800,100);
  fill(255,255, 77);
  rect(0,220,80,10);
  fill(255,455, 77);
  rect(140,220,80,10);
  fill(255,255, 77);
  rect(300,220,80,10);
  fill(255,255, 77);
  rect(460,220,80,10);
  fill(255,255, 77);
  rect(620,220,80,10);
  fill(255,255, 77);
  rect(760,220,80,10);
  
  //เส้นสอง
  noStroke()
  fill(114);
  rect(0,440,800,100); 
  fill(255,255, 77);
  rect(0,480,80,10);
  fill(255,255, 77);
  rect(140,480,80,10);
  fill(255,255, 77);
  rect(300,480,80,10);
  fill(255,255, 77);
  rect(460,480,80,10);
  fill(255,255, 77);
  rect(620,480,80,10);
  fill(255,255, 77);
  rect(760,480,80,10);
  
  //เส้นสาม
  noStroke()
  fill(114);
  rect(0,690,800,100);
  fill(255,255, 77);
  rect(0,730,80,10);
  fill(255,455, 77);
  rect(140,730,80,10);
  fill(255,255, 77);
  rect(300,730,80,10);
  fill(255,255, 77);
  rect(460,730,80,10);
  fill(255,255, 77);
  rect(620,730,80,10);
  fill(255,255, 77);
  rect(760,730,80,10);
}

