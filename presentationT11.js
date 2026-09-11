const prompt = require("prompt-sync")();

let nom = prompt("Quel est votre nom ?");
let prenom = prompt("Quel est votre prenom ?");
let formation = prompt("Quel est votre formation ?");


console.log("Bonjour", nom);
console.log("Bonjour", prenom)
console.log("votre formation est" , formation)
