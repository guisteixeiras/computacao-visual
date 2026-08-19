let canvas = document.getElementById("canvas");

canvas.width = 500;

canvas.height = 500;

let ctx = canvas.getContext("2d");

let cont = 0

canvas.addEventListener("click", function() {
cont++;

ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.fillText("Clique realizado !" + cont + " vezes.", 250, 250);

});
