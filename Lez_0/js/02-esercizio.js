
var nomeUtente = prompt("Come ti chiami?");
var annoCorrente = 2022;
var annoNascita = 1995;
var annoMorte = Math.floor(Math.random()*100);
var saluto = "<h2>Ciao " + nomeUtente + "</h2>";
var eta = "<p>La tua età è:" + (annoCorrente-annoNascita) +"</p>";
var morte = "Morirai tra :" + annoMorte + "anni"

document.write(saluto);
document.write(eta);
document.write(morte);

console.log(typeof saluto);
console.log(typeof eta);
console.log(typeof morte);
console.log(typeof document);


