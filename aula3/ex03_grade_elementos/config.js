let canvas = document.getElementById("canvas");

canvas.width = 400;

canvas.height = 400;

let ctx = canvas.getContext("2d");

function CorAleatoria(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

let tamanhoDaCelula = 400 / 10;

function CelulaAleatoria(){
    return Math.floor(Math.random() * 10);
};

for (let i = 0;  i < 50; i++){
    let coluna = CelulaAleatoria();
    let linha  = CelulaAleatoria();
    let x = (coluna * tamanhoDaCelula);
    let y = (linha * tamanhoDaCelula);

ctx.fillStyle = CorAleatoria();

ctx.fillRect(x, y, tamanhoDaCelula, tamanhoDaCelula);

}
 
