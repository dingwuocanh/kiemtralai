const canvas = document.getElementById("gamecv");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


/* ================= IMAGES ================= */

const birdFrames = [];

for(let i=1;i<=4;i++){
  const img = new Image();
  img.src = `ImageGames/frame-${i}.png`;
  birdFrames.push(img);
}

let birdFrameIndex = 0;
let birdFrameTimer = 0;

const planeimg = new Image();
planeimg.src = "ImageGames/maybay.png";

const fuelimg = new Image();
fuelimg.src = "ImageGames/nhienlieu.png";

const starimg = new Image();
starimg.src = "ImageGames/star.png";

const backgroundimg = new Image();
backgroundimg.src = "ImageGames/background.png";


/* ================= GAME OBJECT ================= */

const plane = {
x:100,
y:canvas.height/2,
width:60,
height:60,
speed:8
};

const obstacles = [];
const fuels = [];
const stars = [];
const bullets = [];

let score = 0;
let time = 60;
let isGameOver = false;


/* ================= SPAWN ================= */

function spawnObstacle(){
obstacles.push({
x:canvas.width,
y:Math.random()*(canvas.height-60),
speed:Math.random()*2+2
});
}

function spawnFuel(){
fuels.push({
x:canvas.width,
y:Math.random()*(canvas.height-60)
});
}

function spawnStar(){
stars.push({
x:canvas.width,
y:Math.random()*(canvas.height-60)
});
}


/* ================= KEYBOARD ================= */

const keys = {};

document.addEventListener("keydown",e=>{

keys[e.key]=true;

if(e.code==="Space"){
shoot();
}

});

document.addEventListener("keyup",e=>{
keys[e.key]=false;
});


function updatePlane(){

if(keys["ArrowUp"] && plane.y>0){
plane.y-=plane.speed;
}

if(keys["ArrowDown"] && plane.y<canvas.height-plane.height){
plane.y+=plane.speed;
}

if(keys["ArrowLeft"] && plane.x>0){
plane.x-=plane.speed;
}

if(keys["ArrowRight"] && plane.x<canvas.width-plane.width){
plane.x+=plane.speed;
}

}


/* ================= SHOOT ================= */

function shoot(){

bullets.push({
x:plane.x+plane.width,
y:plane.y+plane.height/2-3,
speed:12
});

}


/* ================= COLLISION ================= */

function checkCollisions(){

for(let o of obstacles){

if(
plane.x<o.x+50 &&
plane.x+plane.width>o.x &&
plane.y<o.y+50 &&
plane.y+plane.height>o.y
){

alert("Thua cuộc! Điểm: "+score);
location.reload();

}

}


/* bullet hit obstacle */

for(let i=bullets.length-1;i>=0;i--){

let b = bullets[i];

for(let j=obstacles.length-1;j>=0;j--){

let o = obstacles[j];

if(
b.x<o.x+50 &&
b.x+20>o.x &&
b.y<o.y+50 &&
b.y+5>o.y
){

bullets.splice(i,1);
obstacles.splice(j,1);
score+=5;
break;

}

}

}


/* star */

for(let i=stars.length-1;i>=0;i--){

let s = stars[i];

if(
plane.x<s.x+50 &&
plane.x+plane.width>s.x &&
plane.y<s.y+50 &&
plane.y+plane.height>s.y
){

score+=10;
stars.splice(i,1);

}

}


/* fuel */

for(let i=fuels.length-1;i>=0;i--){

let f = fuels[i];

if(
plane.x<f.x+50 &&
plane.x+plane.width>f.x &&
plane.y<f.y+50 &&
plane.y+plane.height>f.y
){

time+=10;
fuels.splice(i,1);

}

}

}


/* ================= GAME LOOP ================= */

function gameLoop(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.drawImage(backgroundimg,0,0,canvas.width,canvas.height);

updatePlane();

checkCollisions();


/* bird animation */

birdFrameTimer++;

if(birdFrameTimer>6){
birdFrameIndex=(birdFrameIndex+1)%birdFrames.length;
birdFrameTimer=0;
}


/* obstacles */

for(let i=obstacles.length-1;i>=0;i--){

let o = obstacles[i];

o.x-=o.speed;

ctx.drawImage(
birdFrames[birdFrameIndex],
o.x,
o.y,
50,
50
);

if(o.x<-60){
obstacles.splice(i,1);
}

}


/* bullets */

for(let i=bullets.length-1;i>=0;i--){

let b = bullets[i];

b.x+=b.speed;

ctx.fillStyle="red";
ctx.fillRect(b.x,b.y,20,5);

if(b.x>canvas.width){
bullets.splice(i,1);
}

}


/* fuels */

for(let i=fuels.length-1;i>=0;i--){

let f = fuels[i];

f.x-=2;

ctx.drawImage(fuelimg,f.x,f.y,50,50);

if(f.x<-60){
fuels.splice(i,1);
}

}


/* stars */

for(let i=stars.length-1;i>=0;i--){

let s = stars[i];

s.x-=2;

ctx.drawImage(starimg,s.x,s.y,50,50);

if(s.x<-60){
stars.splice(i,1);
}

}


/* plane */

ctx.drawImage(
planeimg,
plane.x,
plane.y,
plane.width,
plane.height
);


/* time */

if(time>0){
time-=1/60;
}


/* UI */

ctx.fillStyle="black";
ctx.font="20px Arial";

ctx.fillText("Diem: "+score,20,40);
ctx.fillText("Nang luong: "+Math.floor(time),150,40);


if(time<=0){

alert("Hết giờ! Điểm: "+score);
location.reload();

}

requestAnimationFrame(gameLoop);

}


/* ================= START ================= */

gameLoop();

setInterval(spawnObstacle,1000);
setInterval(spawnFuel,8000);
setInterval(spawnStar,5000);
