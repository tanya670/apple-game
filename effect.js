



    const ctx = canvas.getContext('2d');
    let basketX = 400;
    function moveLeft() {
  if (basketX > -20) basketX -= 30;
}

function moveRight() {
  if (basketX < 1300) basketX += 30;
}
    let X = Math.random() * 1010;
    let Y = 0;
    let score = 0;
    let highScore = localStorage.getItem("highScore") || 0;
    let level =1;
    let gameOver = false;
    let fruits = ['apple'];
    let currentFruit = fruits[Math.floor(Math.random() * fruits.length)];
    
    const bgImage = new Image();
bgImage.src = localStorage.getItem("bg") || "default.jpg";
    const fsImage = new Image();
    fsImage.src = 'fs.png';

    const appleImage = new Image();
    appleImage.src = 'apple.png';

    function drawImage() {
          ctx.drawImage(appleImage, X, Y, 60, 60);     
 }
    function draw() {
      if (!gameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(fsImage,basketX,400,280,290);
        ctx.fillStyle = 'rgba(255, 0, 0, 0)'; 
        ctx.fillRect( basketX, 500, 120, 100);
        drawImage();
        Y += 4;

       if (Y > 350 && X> basketX && X < basketX + 300) {
          score++
if (score > highScore) {
  highScore = score;
  localStorage.setItem("highScore", highScore);
}
console.log("Score:", score);
if (level === 1 && score >= 10) {
  level = 2;
  alert("𝕮𝖔𝖓𝖌𝖗𝖆𝖙𝖚𝖑𝖆𝖙𝖎𝖔𝖓𝖘! 𝖄𝖔𝖚 𝖆𝖗𝖊 𝖎𝖓 𝕷𝖊𝖛𝖊𝖑 2 🏆✨");
}

if (level === 2 && score >= 30) {
  level = 3;
  alert("𝕮𝖔𝖓𝖌𝖗𝖆𝖙𝖚𝖑𝖆𝖙𝖎𝖔𝖓𝖘! 𝖄𝖔𝖚 𝖆𝖗𝖊 𝖎𝖓 𝕷𝖊𝖛𝖊𝖑 3 🚀");
}
if (level === 3 && score >= 45) {
  level = 4;
  alert("𝕮𝖔𝖓𝖌𝖗𝖆𝖙𝖚𝖑𝖆𝖙𝖎𝖔𝖓𝖘! 𝖄𝖔𝖚 𝖆𝖗𝖊 𝖎𝖓 𝕷𝖊𝖛𝖊𝖑 4 🚀");
  
}
if (level === 4 && score >=65) {
  level = 5;
  alert(" 𝕮𝖔𝖓𝖌𝖗𝖆𝖙𝖚𝖑𝖆𝖙𝖎𝖔𝖓𝖘 🎊🎮✨");
  
}
if (level === 5 && score >=100) {
  level = 5;
  alert("𝕮𝖔𝖓𝖌𝖗𝖆𝖙𝖚𝖑𝖆𝖙𝖎𝖔𝖓𝖘 🎊 𝕿𝖍𝖊 𝖌𝖆𝖒𝖊 𝖎𝖘 𝖋𝖎𝖓𝖎𝖘𝖍𝖊𝖉! 𝖄𝖔𝖚 𝖆𝖗𝖊 𝖙𝖍𝖊 𝖈𝖍𝖆𝖒𝖕𝖎𝖔𝖓 🎮✨");
  
}

          Y = 0;
          X = Math.random() * 1010;
          currentFruit = fruits[Math.floor(Math.random() * fruits.length)];
        }
if (Y > 850) {
          gameOver = true;
        }
        ctx.font = '30px Arial';
        ctx.fillStyle='black';
        ctx.fillText(`Score: ${score}`, 70, 40);
        ctx.fillText(`High Score: ${highScore}`, 70, 80);
        requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '50px Arial';
        ctx.fillStyle='black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2);
        ctx.font = '24px Arial';
        ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2+50);
        ctx.fillText(`High Score: ${highScore}`, canvas.width / 2, canvas.height / 2+90);
      }
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' && basketX > -20) basketX -= 20
      else if (e.key === 'ArrowRight' && basketX < 1300) 
      basketX += 40;
      else if (e.key === 'r' && gameOver) {
        gameOver = false;
        score = 0;
        Y = 0;
        X = Math.random() * 1010;
        currentFruit = fruits[Math.floor(Math.random() * fruits.length)];
        draw();
      }
    });
    appleImage.onload = function() {
            draw();
            // tumhara purana code (falling apples etc.)
// TOP


    
}
;

