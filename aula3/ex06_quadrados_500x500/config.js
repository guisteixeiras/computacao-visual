let canvas = document.getElementById("canvas");

canvas.width = 500;
canvas.height = 500;

let ctx = canvas.getContext("2d");

function CorAleatoria() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let tamanhoDaCelula = 20;

for (let linha = 0; linha < 25; linha++) {
    for (let coluna = 0; coluna < 25; coluna++) {
        let x = coluna * tamanhoDaCelula;
        let y = linha * tamanhoDaCelula;
        ctx.fillStyle = CorAleatoria();
        ctx.fillRect(x, y, tamanhoDaCelula, tamanhoDaCelula);
    }
}