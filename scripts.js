let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelector(".box");
let buttons = document.querySelector("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// Contador de Jogadas

let player1 = 0;
let player2 = 0;

// Adicionando o Evento de Click aos Boxes

for (let i = 0; i < boxes.length; i++) {
    // Quando Alguem Clica na Caixa
    boxes[i].addEventListener("click", function() {

        let el = checkEl(player1, player2);
        // Verifica se já tem X ou O
        if (this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);

            // Computar Jogada
            if (player1 == player2) {
                player1++;
            } else {
                player2++;
            }
        }
    });
}

// Ver Quem vai Jogar
function checkEl(player1, player2) {
    if (player1 == player2) {
        // X
        el = x;
    } else {
        // O
        el = o;
    }

    return el;

}