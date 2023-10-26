"use strict";

const motE1 = document.getElementById("mot");
const mauvaiseLettres = document.getElementById("mauvaises-lettres");
const rejouerBtn = document.getElementById("play-bouton");
const popup = document.getElementById("popup-contenant");
const notification = document.getElementById("notification-contenant");
const messageFinal = document.getElementById("message-final");

const figurePartie = document.querySelectorAll(".figure-partie");

const mots = [
    "javascript",
    "callback",
    "fonction",
    "recurcive",
    "responsive",
    "serveur",
    "navigateur",
    "script",
    "index",
    "style",
    "document",
    "body",
    "boucle",
    "condition",
    "variable"
]

// selectionner un mot pour jouer
let motSelectionne = mots[Math.floor(Math.random() * mots.length)];


const bonnesLettresArr = [''];
const mauvaisesLettresArr = [];

// afficher le mot cacher

function afficherMot() {
    motE1.innerHTML = `
    ${motSelectionne
            // convertir le mot en tableau
            .split('')
            // parcourir le tableau des lettres
            .map(
                lettre => `
            <span class="lettre">${bonnesLettresArr.includes(lettre) ? lettre : ''}
            </span>
            `
            )
            .join('')
        }
    
    `;
    const motIntern = motE1.innerText.replace(/\n/g, '');
    console.log(motE1.innerText, motIntern);

    if
    (motIntern === motSelectionne) {
        messageFinal.innerText = "Bravo tu as gagné!";
        popup.style.display = "flex";
    }

}

// event listener pour rejouer
window.addEventListener('keydown', e=> {

    // facon de savoir le nombre pour les lettres
    // console.log(e.keyCode);
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const lettre = e.key;
        if(motSelectionne.includes(lettre)) {

            if(!bonnesLettresArr.includes(lettre)) {
                bonnesLettresArr.push(lettre);
                afficherMot();
            }
            else {
                // afficherNotification()
            }
            
        }
        else {
            if(!mauvaisesLettresArr.includes(lettre)) {
                mauvaisesLettresArr.push(lettre);
                
                // updateMauvaisesLettres();
            }
            else {
                // afficherNotification()
            }
        }
    }
});












afficherMot();