
// const canvas = document.getElementById("gamecv");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const planeimg = new Image();
// planeimg.src =
//   "https://cdn.creazilla.com/cliparts/3171759/airplane-clipart-lg.png";
// const obstacleimg = new Image();
// obstacleimg.src =
//   "https://i.pinimg.com/736x/f1/9f/dd/f19fdd5d8905afc77659ffb6279ca3be.jpg";
// const obstaclewidth = 50;
// const obstacleheight = 50;
// const fuelimg = new Image();
// fuelimg.src =
//   "https://png.pngtree.com/png-vector/20190224/ourmid/pngtree-vector-fuel-station-icon-png-image_701271.jpg";
// const fuelwidth = 50;
// const fuelheight = 50;
// const starimg = new Image();
// starimg.src =
//   "https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNDY3YmF0Y2gyLXN0YXItMDAxXzEucG5n.png";
// const starwidth = 50;
// const starheight = 50;
// const backgroundimg = new Image();
// backgroundimg.src =
//   "https://static.vecteezy.com/system/resources/thumbnails/004/796/598/small/holographic-fantasy-rainbow-unicorn-background-with-clouds-pastel-color-sky-magical-landscape-abstract-fabulous-pattern-cute-candy-wallpaper-vector.jpg";

// // function drawbackground() {
// //   ctx.drawimg(backgroundimg, 0, 0, canvas.width, canvas.height);
// // }
// // const plane = {
// //   x: 50,
// //   y: canvas.height / 2,
// //   width: 50,
// //   height: 50,
// //   speed: 12,
// // };

// // const obstacles = [];
// // const fuels = [];
// // const stars = [];

// // let score = 0;
// // let time = 60;

// // function spawnobstacle() {
// //   const obstacle = {
// //     x: canvas.width,
// //     y: Math.random() * (canvas.height - obstacleimg.height),
// //     speed: Math.random() * 2 + 2,
// //   };
// //   obstacles.push(obstacle);
// // }

// // function spawnfuel() {
// //   const fuel = {
// //     x: canvas.width,
// //     y: Math.random() * (canvas.height - fuelimg.height),
// //   };
// //   fuels.push(fuel);
// // }
// // function spawnstar() {
// //   const star = {
// //     x: canvas.width,
// //     y: Math.random() * (canvas.height - starimg.height),
// //   };
// //   stars.push(star);
// // }
// // function gameloop() {
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);
// //   drawbackground();

// //   for (let obstacle of obstacles) {
// //     obstacle.x -= obstacle.speed;
// //     ctx.drawimg(
// //       obstacleimg,
// //       obstacle.x,
// //       obstacle.y,
// //       obstaclewidth,
// //       obstacleheight,
// //     );
// //   }
// //   for (let fuel of fuels) {
// //     fuel.x -= 1;
// //     ctx.drawimg(fuelimg, fuel.x, fuel.y, fuelwidth, fuelheight);
// //   }
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);
// //   drawbackground();

// //   for (let obstacle of obstacles) {
// //     obstacle.x -= obstacle.speed;
// //     ctx.drawimg(
// //       obstacleimg,
// //       obstacle.x,
// //       obstacle.y,
// //       obstaclewidth,
// //       obstacleheight,
// //     );
// //   }

// //   for (let fuel of fuels) {
// //     fuel.x -= 1;
// //     ctx.drawimg(fuelimg, fuel.x, fuel.y, fuelwidth, fuelheight);
// //   }

// //   for (let star of stars) {
// //     star.x -= 1;
// //     ctx.drawimg(starimg, star.x, star.y, starwidth, starheight);
// //   }
// //   if (time > 0) {
// //     time -= 1 / 60;
// //   }
// //   requestAnimationFrame(gameloop);
// // }
// // const keys = {};
// // document.addEventListener("keydown", (event) => {
// //   keys[event.key] = true;
// // });
// // document.addEventListener("keyup", (event) => {
// //   keys[event.key] = false;
// // });
// // function updateplaneposition() {
// //   if (isGameOver) return;
// //   if (keys["ArrowUp"] && plane.y > 0) {
// //     plane.y -= plane.speed;
// //   }
// //   if (keys["ArrowDown"] && plane.y < canvas.height - plane.height) {
// //     plane.y += plane.speed;
// //   }
// //   if (keys["ArrowLeft"] && plane.x > 0) {
// //     plane.x -= plane.speed;
// //   }
// //   if (keys["ArrowRight"] && plane.x < canvas.width - plane.width) {
// //     plane.x += plane.speed;
// //   }
// // }
// // let isGameOver = false;
// // function checkcollisions() {
// //   for (let obstacle of obstacles) {
// //     if (
// //       plane.x < obstacle.x + obstaclewidth &&
// //       plane.x + plane.width > obstacle.x &&
// //       plane.y < obstacle.y + obstacleheight &&
// //       plane.y + plane.height > obstacle.y
// //     ) {
// //       if (!isGameOver) {
// //         isGameOver = true;
// //         if (!alert("thua cuoc,diem cua may la:" + score)) location.reload();
// //       }
// //     }
// //   }
// //   for (let star of stars) {
// //     if (
// //       plane.x < star.x + starwidth &&
// //       plane.x + plane.width > star.x &&
// //       plane.y < star.y + starheight &&
// //       plane.y + plane.height > star.y
// //     ) {
// //       score += 10;
// //       stars.splice(stars.indexOf(star), 1);
// //     }
// //   }
// //   for (let fuel of fuels) {
// //     if (
// //       plane.x < fuel.x + fuelwidth &&
// //       plane.x + plane.width > fuel.x &&
// //       plane.y < fuel.y + fuelheight &&
// //       plane.y + plane.height > fuel.y
// //     ) {
// //       time += 10;
// //       fuels.splice(fuels.indexOf(fuel), 1);
// //     }
// //   }
// // }
// // function gameloop() {
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);
// //   drawbackground();
// //   updateplaneposition();
// //   checkcollisions();
// //   for (let obstacle of obstacles) {
// //     obstacle.x -= obstacle.speed;
// //     ctx.drawimg(
// //       obstacleimg,
// //       obstacle.x,
// //       obstacle.y,
// //       obstaclewidth,
// //       obstacleheight,
// //     );
// //   }
// //   for (let fuel of fuels) {
// //     fuel.x -= 2;
// //     ctx.drawimg(fuelimg, fuel.x, fuel.y, fuelwidth, fuelheight);
// //   }
// //   for (let star of stars) {
// //     star.x -= 1;
// //     ctx.drawimg(starimg, star.x, star.y, starwidth, starheight);
// //   }
// //   ctx.drawimg(planeimg, plane.x, plane.y, plane.width, plane.height);

// //   if (time > 0) {
// //     time -= 1 / 60;
// //   }
// //   ctx.fillStyle = "black";
// //   ctx.font = "20px Arial";
// //   ctx.fillText("diem:" + score, 10, 30);
// //   ctx.fillText(" - ", 120, 30);
// //   ctx / fillText("nang luong:" + Math.round(time), 150, 30);

// //   if (time <= 0) {
// //     if (!isGameOver) {
// //       isGameOver = true;
// //       if (!alert("het gio,diem cua may la:" + score)) location.reload();
// //     }
// //   } else {
// //     requestAnimationFrame(gameloop);
// //   }
// // }
// // gameloop();
// // setInterval(spawnobstacle, 1000);
// // setInterval(spawnfuel, 9000);
// // setInterval(spawnstar, 6000);

const birdFrames = [];

for (let i = 1; i <= 4; i++) {
  const img = new Image();
  img.src = `ImageGames/frame-${i}.png`;
  birdFrames.push(img);
}
let birdFrameIndex = 0;
let birdFrameTimer = 0;

const canvas = document.getElementById("gamecv");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const planeimg = new Image();
planeimg.src = "ImageGames/maybay.png";

const obstacleimg = new Image();
obstacleimg.src = "ImageGames/frame-1.png";
const obstaclewidth = 50;
const obstacleheight = 50;

const fuelimg = new Image();
fuelimg.src = "ImageGames/nhienlieu.png";
const fuelwidth = 50;
const fuelheight = 50;

const starimg = new Image();
starimg.src = "ImageGames/star.png";
const starwidth = 50;
const starheight = 50;

const backgroundimg = new Image();
backgroundimg.src = "ImageGames/background.png";

function drawbackground() {
  ctx.drawImage(backgroundimg, 0, 0, canvas.width, canvas.height);
}
const plane = {
  x: 50,
  y: canvas.height / 2,
  width: 50,
  height: 50,
  speed: 12,
};

const obstacles = [];
const fuels = [];
const stars = [];

let score = 0;
let time = 60;

function spawnobstacle() {
  const obstacle = {
    x: canvas.width,
    y: Math.random() * (canvas.height - obstacleimg.height),
    speed: Math.random() * 2 + 2,
  };
  obstacles.push(obstacle);
}

function spawnfuel() {
  const fuel = {
    x: canvas.width,
    y: Math.random() * (canvas.height - fuelimg.height),
  };
  fuels.push(fuel);
}

function spawnstar() {
  const star = {
    x: canvas.width,
    y: Math.random() * (canvas.height - starimg.height),
  };
  stars.push(star);
}

// function gameloop() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawbackground();

//   for (let obstacle of obstacles) {
//     obstacle.x -= obstacle.speed;
//     ctx.drawImage(
//       obstacleimg,
//       obstacle.x,
//       obstacle.y,
//       obstaclewidth,
//       obstacleheight,
//     );
//   }
//   for (let fuel of fuels) {
//     fuel.x -= 1;
//     ctx.drawImage(fuelimg, fuel.x, fuel.y, fuelwidth, fuelheight);
//   }
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawbackground();

//   for (let obstacle of obstacles) {
//     obstacle.x -= obstacle.speed;
//     ctx.drawImage(
//       obstacleimg,
//       obstacle.x,
//       obstacle.y,
//       obstaclewidth,
//       obstacleheight,
//     );
//   }

//   for (let fuel of fuels) {
//     fuel.x -= 1;
//     ctx.drawImage(fuelimg, fuel.x, fuel.y, fuelwidth, fuelheight);
//   }

//   for (let star of stars) {
//     star.x -= 1;
//     ctx.drawImage(starimg, star.x, star.y, starwidth, starheight);
//   }
//   if (time > 0) {
//     time -= 1 / 60;
//   }
//   requestAnimationFrame(gameloop);
// }
const keys = {};
document.addEventListener("keydown", (event) => {
  keys[event.key] = true;
});
document.addEventListener("keyup", (event) => {
  keys[event.key] = false;
});
function updateplaneposition() {
  if (isGameOver) return;
  if (keys["ArrowUp"] && plane.y > 0) {
    plane.y -= plane.speed;
  }
  if (keys["ArrowDown"] && plane.y < canvas.height - plane.height) {
    plane.y += plane.speed;
  }
  if (keys["ArrowLeft"] && plane.x > 0) {
    plane.x -= plane.speed;
  }
  if (keys["ArrowRight"] && plane.x < canvas.width - plane.width) {
    plane.x += plane.speed;
  }
}
let isGameOver = false;
function checkcollisions() {
  for (let obstacle of obstacles) {
    if (
      plane.x < obstacle.x + obstaclewidth &&
      plane.x + plane.width > obstacle.x &&
      plane.y < obstacle.y + obstacleheight &&
      plane.y + plane.height > obstacle.y
    ) {
      if (!isGameOver) {
        isGameOver = true;
        if (!alert("thua cuoc,diem cua may la:" + score)) location.reload();
      }
    }
  }
  for (let star of stars) {
    if (
      plane.x < star.x + starwidth &&
      plane.x + plane.width > star.x &&
      plane.y < star.y + starheight &&
      plane.y + plane.height > star.y
    ) {
      score += 10;
      stars.splice(stars.indexOf(star), 1);
    }
  }
  for (let fuel of fuels) {
    if (
      plane.x < fuel.x + fuelwidth &&
      plane.x + plane.width > fuel.x &&
      plane.y < fuel.y + fuelheight &&
      plane.y + plane.height > fuel.y
    ) {
      time += 10;
      fuels.splice(fuels.indexOf(fuel), 1);
    }
  }
}
function gameloop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawbackground();
  updateplaneposition();
  checkcollisions();
  birdFrameTimer++;

  if (birdFrameTimer > 5) {
    // số càng nhỏ đập càng nhanh
    birdFrameIndex = (birdFrameIndex + 1) % birdFrames.length;
    birdFrameTimer = 0;
  }

  for (let obstacle of obstacles) {
    obstacle.x -= obstacle.speed;
    ctx.drawImage(
      birdFrames[birdFrameIndex],
      obstacle.x,
      obstacle.y,
      obstaclewidth,
      obstacleheight,
    );
  }
  for (let fuel of fuels) {
    fuel.x -= 2;
    ctx.drawImage(fuelimg, fuel.x, fuel.y, fuelwidth, fuelheight);
  }
  for (let star of stars) {
    star.x -= 1;
    ctx.drawImage(starimg, star.x, star.y, starwidth, starheight);
  }
  ctx.drawImage(planeimg, plane.x, plane.y, plane.width, plane.height);

  if (time > 0) {
    time -= 1 / 60;
  }
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("diem:" + score, 10, 30);
  ctx.fillText(" - ", 120, 30);
  ctx.fillText("nang luong:" + Math.round(time), 150, 30);

  if (time <= 0) {
    if (!isGameOver) {
      isGameOver = true;
      if (!alert("het gio,diem cua may la:" + score)) location.reload();
    }
  } else {
    requestAnimationFrame(gameloop);
  }
}
gameloop();
setInterval(spawnobstacle, 300);
setInterval(spawnfuel, 7000);
setInterval(spawnstar, 6000);
