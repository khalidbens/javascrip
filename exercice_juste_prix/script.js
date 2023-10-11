"use strict";

// Juste Prix
// 1. Faire un jeu du plus ou moins, javascript va choisir un nombre aléatoire entre 1 et 100 et l'utilisateur va
// devoir le deviner, à chaque essai le jeu indique si le nombre cible est plus grand ou plus petit.
// Cette version peut être faite en console.log et prompt.
// 2. Ajouter un nombre limité de coup (7) à l'utilisateur.
// 3. Proposer à l'utilisateur de recommencer (par exemple avec un confirm).
// 4. Vérifier que l'utilisateur entre bien un nombre et qu'il soit entre 1 et 100.
// 5. Créer une interface pour le jeu. Il devra contenir :
// une zone affichant les messages du jeu.
// un input pour rentrer la proposition.
// un bouton pour valider la proposition.
// On doit pouvoir valider avec la touche "entrée" ou le bouton.
// Lorsque c'est terminé, le résultat ainsi qu'un bouton recommencer doit apparaître.
// Lorsque le jeu commence ou que l'on appui sur un bouton, le focus doit revenir sur l'input.
// Lorsque le jeu est terminé, les boutons et input doivent être désactivé.
// 6. (bonus) Le jeu serait plus vivant si il est animé avec par exemple une carte qui se retourne pour afficher
// le résultat et le bouton recommencer.

document.addEventListener('DOMContentLoaded', function () {
    const inputGuess = document.getElementById('inputGuess');
    const guessBtn = document.getElementById('guessBtn');
    const message = document.getElementById('message');
    const resultMessage = document.getElementById('result');
    const restartBtn = document.getElementById('restartBtn');
    const gameContainer = document.getElementById('game-container');

    let secretNumber;
    let attemptsLeft;

    function startGame() {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        attemptsLeft = 7;

        resultMessage.textContent = '';
        inputGuess.value = '';
        inputGuess.disabled = false;
        guessBtn.disabled = false;
        restartBtn.style.display = 'none';

        gameContainer.classList.remove('hidden'); 

        inputGuess.focus();
    }

    function endGame(result) {
        inputGuess.disabled = true;
        guessBtn.disabled = true;
        restartBtn.style.display = 'block';
        resultMessage.textContent = result;

        
        setTimeout(() => {
            gameContainer.classList.add('hidden');
            resultMessage.classList.add('hidden');
        }, 100);
    }

    function checkGuess() {
        const userGuess = parseInt(inputGuess.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            resultMessage.textContent = 'Veuillez entrer un nombre entre 1 et 100.';
            return;
        }

        attemptsLeft--;

        if (userGuess === secretNumber) {
            endGame(`Bravo ! Vous avez deviné le juste prix (${secretNumber}) en ${7 - attemptsLeft} essais.`);
        } else if (attemptsLeft === 0) {
            endGame(`Désolé, vous avez épuisé vos essais. Le juste prix était ${secretNumber}.`);
        } else {
            resultMessage.textContent = userGuess < secretNumber ? 'Plus grand !' : 'Plus petit !';
        }
    }

    guessBtn.addEventListener('click', checkGuess);

    inputGuess.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            checkGuess();
        }
    });

    restartBtn.addEventListener('click', startGame);

    startGame();
});

