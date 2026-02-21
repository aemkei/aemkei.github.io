const canvas = document.getElementById("c");

canvas.width = 64;
canvas.height = 64;

const ctx = canvas.getContext("2d");


  for (i=0; i<900; i++) {
    w = Math.sqrt(Math.random() * 200);
    x = (Math.cos(i) * w) | 0;
    y = (Math.sin(i) * w) | 0
    ctx.rect(
      32 + x,
      32 + y, 
      1, 
      1
    );
    ctx.fill();
  }
