" use strict"

// Exercice Boucles

// exercie 5.1

// let nombre;
// do {
//     // Demander un nombre à l'utilisateur
//     nombre = prompt(`Entrez un nombre entre 1 et 3 :`);
// } while (nombre < 1 || nombre > 3);

// console.log(`Le nombre choisi est :`, nombre);
    

// exercice 5.2

// let nombre;

// do {
//     // Demander un nombre à l'utilisateur
//     nombre = prompt("Entrez un nombre entre 10 et 20 :");

//     if (nombre > 20) {
//         console.log("Plus petit!.");
//     } else if (nombre < 10) {
//         console.log("Plus grand!.");
//     }
// } while (nombre < 10 || nombre > 20);

// console.log("Le nombre choisi est :", nombre);

// exercice 5.3

// // Demander un nombre de départ à l'utilisateur
// let nombre = parseInt(prompt("Entrez un nombre de départ :"));

// // Afficher les dix nombres suivants
// console.log("Les dix nombres suivants sont :");
// for (let i = 1; i <= 10; i++) {
//     console.log(nombre + i);
// }

// exercice 5.4

// Demander un nombre de départ à l'utilisateur
// let nombre = parseInt(prompt("Entrez un nombre de départ :"));

// // Écrire la table de multiplication de 7
// console.log("La table de multiplication de", nombre, "est :");
// for (let i = 1; i <= 10; i++) {
//     console.log(nombre, "x", i, "=", nombre * i);
// }

// exercice 5.5

// Demander un nombre de départ à l'utilisateur
// let nombre = parseInt(prompt("Entrez un nombre de départ :"));

// // Calculer la somme des entiers jusqu'à ce nombre
// let somme = 0;
// for (let i = 1; i <= nombre; i++) {
//     somme += i;
// }

// console.log("La somme des entiers jusqu'à", nombre, "est :", somme);

// exercice 5.6


// // Demander un nombre à l'utilisateur
// let nombre = parseInt(prompt("Entrez un nombre :"));

// // Calculer la factorielle de ce nombre
// let factorielle = 1;
// for (let i = 1; i <= nombre; i++) {
//     factorielle *= i;
// }

// console.log("La factorielle de", nombre, "est :", factorielle);

// exercice 5.7

// Demander un nombre à l'utilisateur
// let nombre = parseInt(prompt("Entrez un nombre :"));

// Demander successivement 5 nombres à l'utilisateur
// let nombre = [];
// let position = 0;
// for (let i = 0; i < 5; i++) {
//     let nombreSaisi = parseInt(prompt("Entrez un nombre :"));
//     nombre.push(nombreSaisi);
//     if (nombre[position] < nombreSaisi) {
//         position = nombre.length-1;
//     }
// }
// console.log("Le nombre", nombre[position], "a été saisi à la position", position);

// exercice 5.8

// Demander un nombre à l'utilisateur

// let nombre = [];
// let position = 0;
// let nombreSaisi;

// do {
//     // Demander un nombre à l'utilisateur
//     nombreSaisi = parseInt(prompt("Entrez un nombre (saisissez 0 pour arrêter) :"));

//     // Vérifier si le nombre est différent de 0
//     if (nombreSaisi !== 0) {
//         nombre.push(nombreSaisi);
//         if (nombre[position] < nombreSaisi) {
//             position = nombre.length - 1;
//         }
//     }
// } while (nombreSaisi !== 0);

// if (nombre.length > 0) {
//     console.log("Le nombre le plus grand est", nombre[position]);
// } else {
//     console.log("Aucun nombre saisi.");
// }

// Exercice 5.9
// let prix;
// let sommeTotale = 0;

// // Lire les prix d'achats jusqu'à ce que 0 soit saisi
// do {
//     prix = parseInt(prompt("Entrez le prix d'un achat (saisissez 0 pour terminer) :"));
//     sommeTotale += prix;
// } while (prix !== 0);

// console.log("La somme totale à payer est de", sommeTotale, "euros.");

// // Lire la somme payée par le client
// let sommePayee = parseInt(prompt("Entrez la somme payée par le client :"));

// // Calculer la remise de la monnaie
// let montantARendre = sommePayee - sommeTotale;

// if (montantARendre < 0) {
//     console.log("Le client n'a pas payé suffisamment.");
// } else {
//     let coupures10 = 0;
//     let coupures5 = 0;
//     let coupures1 = 0;

//     while (montantARendre >= 10) {
//         montantARendre -= 10;
//         coupures10++;
//     }

//     while (montantARendre >= 5) {
//         montantARendre -= 5;
//         coupures5++;
//     }

//     while (montantARendre >= 1) {
//         montantARendre -= 1;
//         coupures1++;
//     }

//     console.log("À rendre :");
//     console.log(coupures10, "coupure(s) de 10 euros");
//     console.log(coupures5, "coupure(s) de 5 euros");
//     console.log(coupures1, " piece(s) de 1 euro");
// }

// Fin de l'exercice

// exercice 5.10


// Fonction pour calculer la factorielle d'un nombre
// function factorielle(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorielle(n - 1);
//   }
// }

// // Demander le nombre de chevaux partants à l'utilisateur
// let chevauxPartants = parseInt(prompt("Entrez le nombre de chevaux partants :"));

// // Demander le nombre de chevaux joués à l'utilisateur
// let chevauxJoues = parseInt(prompt("Entrez le nombre de chevaux joués :"));

// // Calculer X et Y selon les formules données
// let X = factorielle(chevauxPartants) / factorielle(chevauxPartants - chevauxJoues);
// let Y = factorielle(chevauxPartants) / (factorielle(chevauxJoues) * factorielle(chevauxPartants - chevauxJoues));

// // Afficher les chances de gagner
// console.log("Une chance sur", X, "de gagner (dans l'ordre)");
// console.log("Une chance sur", Y, "de gagner (dans le désordre)");

// Fin de l'exercice

// exercice 6.1

// Déclaration du tableau
// let tableau = [];

// // Remplissage du tableau avec des zéros
// for (let i = 0; i < 7; i++) {
//   tableau.push(0);
// }

// // Affichage du tableau
// console.log(tableau);

// Fin de l'exercice

// exercice 6.2

// Déclaration du tableau
// let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];

// // Affichage du tableau
// console.log(voyelles);

// Fin de l'exercice

// exercice 6.3


// Déclaration du tableau
// let notes = new Array(9);

// Saisie des valeurs par l'utilisateur
// for (let i = 0; i < notes.length; i++) {
//   notes[i] = parseFloat(prompt(`Entrez la note ${i + 1}:`));
// }

// // Affichage du tableau
// console.log(notes);

// Fin de l'exercice

// exercice 6.4

// let Nb = [];

// for (let i = 0; i <= 5; i++) {
//   Nb[i] = i * i;
// }

// for (let i = 0; i <= 5; i++) {
//   console.log(Nb[i]);
// }

// Fin de l'exercice

// exercice 6.5

// let N = [];
// N[0] = 1;

// for (let k = 1; k <= 6; k++) {
//   N[k] = N[k - 1] + 2;
// }

// for (let i = 0; i <= 6; i++) {
//   console.log(N[i]);
// }

// Fin de l'exercice

// exercice 6.6

// let suite = [];
// suite[0] = 1;
// suite[1] = 1;

// for (let i = 2; i <= 7; i++) {
//   suite[i] = suite[i - 1] + suite[i - 2];
// }

// for (let i = 0; i <= 7; i++) {
//   console.log(suite[i]);
// }

// Fin de l'exercice

// exercice 6.7

// let total = 0;

// for (let i = 0; i < notes.length; i++) {
//   total += notes[i];
// }

// let moyenne = total / notes.length;
// console.log("La moyenne des notes est : " + moyenne);

// Fin de l'exercice


// Demande à l'utilisateur de saisir une couleur en utilisant la fenêtre de saisie
var userColor = prompt("Entrez une couleur (en anglais ou en code hexadécimal) :");

// Demande à l'utilisateur de saisir une valeur d'opacité entre 0 et 1
var userOpacity = parseFloat(prompt("Entrez une valeur d'opacité entre 0 et 1 :"));

// Vérifie si la valeur d'opacité est valide
if (isNaN(userOpacity) || userOpacity < 0 || userOpacity > 1) {
  console.log("Valeur d'opacité invalide. Veuillez entrer une valeur entre 0 et 1.");
} else {
  // Affiche la couleur choisie avec l'opacité spécifiée
  var rgbaColor = `rgba(${hexToRgb(userColor)}, ${userOpacity})`;
  console.log("La couleur choisie avec l'opacité est : " + rgbaColor);
}

// Fonction pour convertir une couleur hexadécimale en RGB
function hexToRgb(hex) {
  // Supprime le # du début de la chaîne si présent
  hex = hex.replace("#", "");
  
  // Sépare les composantes de couleur (rouge, vert, bleu)
  var red = parseInt(hex.substring(0, 2), 16);
  var green = parseInt(hex.substring(2, 4), 16);
  var blue = parseInt(hex.substring(4, 6), 16);
  
  return `${red}, ${green}, ${blue}`;
}










































    








