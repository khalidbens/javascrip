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


const bonnesLettresArr = [];
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
// mauvaise lettres 
function updateMauvaisesLettresE1() {
    // afficher les mauvaises lettres
    mauvaiseLettres.innerHTML = `
        ${mauvaisesLettresArr.map(lettre => `<span>${lettre}</span>`)}
    `



    // afficher le bonhomme

    figurePartie.forEach((partie, index) => {
        const erreurs = mauvaisesLettresArr.length;
        if (index < erreurs) {
            partie.style.display = "block";
        }
        else {
            partie.style.display = "none";
        }
    })

    // verifier si on a perdu
    if(mauvaisesLettresArr.length === figurePartie.length) {
        messageFinal.innerText = "Malheureusement tu as perdu ! =(";
        popup.style.display = "flex";
    }
    
}




// afficher notification
function afficherNotification(){
    notification.classList.add('afficher');
    setTimeout(() => {
        notification.classList.remove('afficher');
    }, 2000);
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
                afficherNotification()
            }
            
        }
        else {
            if(!mauvaisesLettresArr.includes(lettre)) {
                mauvaisesLettresArr.push(lettre);
                
                updateMauvaisesLettresE1();
            }
            else {
                afficherNotification()
            }
        }
    }
});


// rejouer et redémarrer le jeux

rejouerBtn.addEventListener('click', () => {
    // vider les arrays
    bonnesLettresArr.splice(0);
    mauvaisesLettresArr.splice(0);

    motSelectionne = mots[Math.floor(Math.random() * mots.length)];
    afficherMot();
    updateMauvaisesLettresE1();
    popup.style.display = "none";
})









afficherMot();