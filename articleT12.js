const prompt = require("prompt-sync")();

let nom = prompt("Nom de l'article :");
console.log ("Nom de l'article :",nom);
let prix = prompt("prix de l'article :");
console.log ("prix de l'article :",prix);
let Quantité= prompt("Quantité de l'article :");
console.log ("Quantité_de_l'article :",Quantité);
let total= prix*Quantité;
console.log ("total",total);
