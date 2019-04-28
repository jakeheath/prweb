let u;
let l;
let a;
let mods = [];
let x;
let y;
let count;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //u = int(width/15);
  u = 100;
  l = 40;
  let highCount = height/80;
  let wideCount = width/80;
  count = int(highCount * wideCount);
  
  let index = 0;
  for (let xc = 0; xc < wideCount; xc++) {
    for (let yc = 0; yc < highCount; yc++) {
      mods[index++] = new Module(int(xc)*u,int(yc)*u);
    }
   }
}

function draw() {
  
  background(255);
  
  if (mouseIsPressed) {
    fill(255);
    stroke(255);
  } else {
    fill(255);
    stroke(255);
  }
  
  //strokeWeight(15);
  noStroke();
  translate(20, 20);
  
  for (let i = 0; i <= count; i++) {
    mods[i].update();
    mods[i].draw1();
    mods[i].draw2();
  }

}

function Module(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.a = 0;
  

}

Module.prototype.update = function() {
    this.a = atan2(mouseY-this.y, mouseX-this.x);
}

Module.prototype.draw1 = function() {
  push();
  translate(this.x, this.y);
  fill(255);
  arc(0, -10, l, l, 0.5, PI-0.5);
  arc(0, 10, l, l, PI+0.5, -0.5);
  pop();
}


Module.prototype.draw2 = function() {
  push();
  translate(this.x, this.y);
  rotate(this.a);

  //ellipse(0, 0, l, l);
  fill(0);
  ellipse(8, 0, l/2, l/2);
  
  
  //line(-l,0,l,0);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

