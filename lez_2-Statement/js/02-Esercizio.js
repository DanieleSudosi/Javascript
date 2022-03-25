// // ES 0
// var testo = prompt("Inserire il nome")
// var saluto = document.getElementById("saluto").innerHTML = "<h1>Ciao " + testo + "</h1>"

// // ES 1
// var n1 = 5;
// var n2 = 6;
// var n3 = 7;

// var perimetro = n1+n2+n3;
// var sP = perimetro / 2;
// var area = Math.sqrt(sP * (sP - n1) * (sP - n2) * (sP - n3));

// console.log(perimetro);
// console.log(area);

//// ES 2---------------------------------------------------------------------------------------------

// function calcola(){
//     var corrente = document.getElementById("anno").value;
//     var nascita = document.getElementById("nascita").value;
//     var eta = document.getElementById("eta");
//     eta.innerHTML = "<h2>Il Calcolo risulta : " + (corrente-nascita) + " anni </h2>";

// }

//  ES 3------------------------------------------------------------------------------------------------
// function prodotto(){
// var n1 =document.getElementById("num1").value;
// var n2 =document.getElementById("num2").value;
// var res = document.getElementById("calcolo");
// res.innerHTML = "<h2>Il prodotto tra i due numeri è :" + (n1*n2) + " </h2>";
// }

// ES 4------------------------------------------------------------------------------------------------
// function moltiplica() {
//     var n1 = document.getElementById("num1").value;
//     var n2 = document.getElementById("num2").value;
//     var prodotto = document.getElementById("calcolo");
//     prodotto.innerHTML = "<h2>Il prodotto tra i due numeri è :" + (n1 * n2) + " </h2>";
// }

// function dividi() {
//     var n1 = document.getElementById("num1").value;
//     var n2 = document.getElementById("num2").value;
//     var divisione = document.getElementById("calcolo");
//     divisione.innerHTML = "<h2>La divisione tra i due numeri è :" + (n1 / n2) + " </h2>";
// }
//ES 5 ------------------------------------------------------------------------------------------------

// var file = "ciao.pdf"
// var estrazione = file.slice(5);
// console.log(estrazione);

//ES 6 ------------------------------------------------------------------------------------------------

// function aggiungi() {

//     var par1 = document.getElementById("par").value;
//     var risultato = document.getElementById("res");
//     var ini = par1.indexOf("Ja")
//     if (ini == 0) {
//         risultato.innerHTML = par1;
//     }else
//         risultato.innerHTML = "Ja" + par1;
//     }

//Es 7

// function piuVicinoA100() {
//     const PUNTI = 100;
//     var num1 = document.getElementById("num1").value;
//     var num2 = document.getElementById("num2").value;
//     var control = document.getElementById("control");
//     if (num1 == num2) {
//         control.innerHTML = "<h2> I numeri sono uguali, cambiali tra loro </h2>"
//     } else if (Math.abs(num1 - PUNTI) < Math.abs(num2 - PUNTI)) {
//         control.innerHTML = "<h2>il numero più vicino a " + PUNTI + " è " + num1 + "</h2>";
//     }else{
//         control.innerHTML = "<h2>il numero più vicino a " + PUNTI + " è " + num2 +  "</h2>";
//     }
// }


//Es8
// function inverte(){

// var parola = document.getElementById("par").value;
// var risultato = document.getElementById("alorap")

// risultato.innerHTML =  parola.split("").reverse("").join("");

// }

//Es9
// function frase(){
// var fra = document.getElementById("fra").value;
// var up = document.getElementById("upper");
//   fra.split(" ").forEach(element => {
//       console.log(element);
//       up.innerHTML += element.charAt(0).toUpperCase() + element.slice(1) + " ";     
//   });
//  } 



//Es10

// function genera() {
//     var lungo = document.getElementById("lungo").value;
//     var stringa = document.getElementById("stringa");
//     var caratteri = "0123456789QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
//     var array = [];
//     array.length = lungo;
//     stringa.innerHTML= "";

//     for (let i = 0; i < array.length; i++) {

//         var element = Math.random() * caratteri.length;
//         stringa.innerHTML += caratteri.substring(element,element+1);
//     }

// }

//Es11

// function maggiore() {

//     var primo = Number(document.getElementById("first").value);
//     var secondo = Number(document.getElementById("second").value);
//     var risultato = document.getElementById("risultato")
//     if (primo > secondo) {
//         risultato.innerHTML = "il numero più grande è: " + primo;
//     } else if (secondo > primo) {
//         risultato.innerHTML = "il numero più grande è: " + secondo;
//     } else {
//         risultato.innerHTML = "Numeri uguali";
//     }

// }
//Es12

// function inverte() {

//   var parola = document.getElementById("par").value;
//   var risultato = document.getElementById("alorap")
//   var array = parola.split("");
//   risultato.innerHTML="";

//   for (let i = array.length -1; i >= 0; i--) {
//     risultato.innerHTML += array[i];
//   }
// }

function stampa() {
  var lista = document.getElementById("lista");

  for (let i = 1; i < 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
      lista.innerHTML += "<li>" + i + " Ciao Mondo </li>";
    } else if (i % 3 == 0) {
      lista.innerHTML += "<li>" + i + " Ciao </li>";
    } else if (i % 5 == 0) {
      lista.innerHTML += "<li>" + i + " Mondo </li>";
    } else {
      lista.innerHTML += "<li>" + i + "</li>";
    }
  }
}