document.addEventListener("DOMContentLoaded", function () {
    const dino = document.getElementById("dino");
    const suelo = document.getElementById("suelo");

    let saltando = false;

    document.addEventListener("keydown", function (event) {
        if (event.code === "Space" && !saltando) {
            saltar();
        }
    });

    function saltar() {
        saltando = true;

        let altura = 0;
        const intervalo = setInterval(function () {
            if (altura >= 150) {
                clearInterval(intervalo);
                saltando = false;
            } else {
                altura += 5;
                dino.style.bottom = altura + "px";
            }
        }, 20);
    }
});
