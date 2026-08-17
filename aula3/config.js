let canvas = document.getElementById("canvas");

canvas.width = 500;

canvas.height = 400;

let ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";

ctx.beginPath();
ctx.moveTo(125, 25);
ctx.lineTo(50, 150);
ctx.lineTo(200, 150);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "red";
ctx.fillRect(250, 50, 100, 100);
ctx.beginPath();

ctx.fillStyle = "purple";
ctx.lineTo(400, 300);
ctx.fill();
ctx.beginPath();
ctx.moveTo(350, 190);
ctx.lineTo(410, 230);
ctx.lineTo(390, 300);
ctx.lineTo(310, 300);
ctx.lineTo(290, 230);
ctx.closePath();
ctx.fill();
ctx.beginPath();

ctx.fillStyle = "green";
ctx.moveTo(500, 500);
ctx.lineTo(600, 500)
ctx.closePath();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(20, 190);
ctx.fillStyle = "green";
ctx.fillRect(20, 190, 260, 160);

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.moveTo(150, 200);   
ctx.lineTo(260, 270);   
ctx.lineTo(150, 340);  
ctx.lineTo(40, 270);   
ctx.closePath();
ctx.fill();

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(150, 270, 45, 0, Math.PI * 2);
ctx.fill();

document.getElementById("trocarCor").addEventListener("click", function() {
ctx.beginPath();
ctx.moveTo(20, 190);
ctx.fillStyle = "purple";
ctx.fillRect(20, 190, 260, 160);

ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(150, 200);   
ctx.lineTo(260, 270);   
ctx.lineTo(150, 340);  
ctx.lineTo(40, 270);   
ctx.closePath();
ctx.fill();

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(150, 270, 45, 0, Math.PI * 2);
ctx.fill();
    
});
