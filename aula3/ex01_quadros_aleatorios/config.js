let canvas = document.getElementById("canvas");

canvas.width = 500;

canvas.height = 400;

let ctx = canvas.getContext("2d");

function CorAleatoria(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

for (let i = 0; i < 10; i++) {

let x = (Math.random() * (490 - 10) + 10);
let y = (Math.random() * (390 - 10) + 10); 
let largura = (Math.random() * (100 - 20) + 20);
let altura = (Math.random() * (100 - 20) + 20);

ctx.fillStyle = CorAleatoria();

ctx.fillRect(x, y, largura, altura);

}


