let canvas = document.getElementById("canvas");

// - Escreva um programa que desenha em um 
// canva 300x300, um círculo de raio 100 usando 
// 8 segmentos de reta. Depois disso, altere 
// esse número para 16, 32, 64 segmentos para 
// ver o que acontece com a qualidade visual 
// desse círculo.

canvas.width = 300;

canvas.height = 300;

let ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";

function DesenharPoligono(cx, cy, raio, segmentos) {
    ctx.beginPath();

    for (let i = 0; i < segmentos; i++) {
        const angulo = (i / segmentos) *Math.PI * 2;
        
        const x = cx + raio *Math.cos(angulo);
        const y = cy + raio *Math.sin(angulo);

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.stroke();
}

DesenharPoligono(150, 150, 110, 64)
