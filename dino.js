document.addEventListener("DOMContentLoaded", function () {
    const dino = document.getElementById("dino");
    const suelo = document.getElementById("suelo");
    const juego = document.getElementById("juego");

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
                descender();
            } else {
                altura += 5;
                dino.style.bottom = altura + "px";
            }
        }, 20);
    }

    function descender() {
        let altura = 150;
        const intervalo = setInterval(function () {
            if (altura <= 20) {
                clearInterval(intervalo);
                saltando = false;
            } else {
                altura -= 5;
                dino.style.bottom = altura + "px";
            }
        }, 20);
    }

    function colision() {
        const dinoRect = dino.getBoundingClientRect();
        const obstaculo = document.querySelector(".obstaculo");
        const obstaculoRect = obstaculo.getBoundingClientRect();

        return !(
            dinoRect.bottom < obstaculoRect.top ||
            dinoRect.top > obstaculoRect.bottom ||
            dinoRect.right < obstaculoRect.left ||
            dinoRect.left > obstaculoRect.right
        );
    }

    function gameOver() {
        alert("Perdeu Calabreso!");
        location.reload(); // Recargar la página para reiniciar el juego
    }

    function actualizarJuego() {
        if (colision()) {
            gameOver();
        } else {
            requestAnimationFrame(actualizarJuego);
        }
    }

    actualizarJuego();
});
