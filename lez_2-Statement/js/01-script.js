// //OP di confronto < > >=  <= == ===
// var punti1 = 8; //lv1
// var punti2 = 9; //lv2

// var exit1 = 6; //soglia1
// var exit2 = 7; //soglia2

// // per finire il gioco basta che vinci un livello
// var condizione = (punti1 >= exit1) || (punti2 >= exit2);
// if (condizione) {
//     console.log("bravo hai terminato il gioco");
// } else {
//     console.log("Non hai terminato il gioco");
// }

// console.log(condizione);

// //per finire il gioco devo superare la soglia di tutti i livelli
// //var condizione = (punti1>=exit1) && (punti2>=exit2);
// if (condizione) {
//     console.log("bravo hai terminato il gioco");
// } else {
//     console.log("Non hai terminato il gioco");
// }

// console.log(condizione);

// //OP logici && and  || or  ! not

// // var parola = prompt("ciao");
// // if (parola==1234){ //verifica il contenuto senza il TIPO
// //     console.log("Hai effettuato l'accesso");
// // }else{
// //     console.log("Credenziali non valide");
// // }

// // if (parola===1234){// sapendo che parola è una stringa, al confronto con un numero perde
// //     console.log("hai effettualo l'accesso");
// // }else{
// //     console.log("Credenziali non valide");
// // }

// var punteggio = 30;
// var skill = 30;

// var msg = "";

// if (punteggio >= 50 && skill >= 40) {
//     msg = "Hai superato il livello";
// } else if (punteggio >= 50 && skill < 40) {
//     msg = "devi migliorare le skill";
// } else if (punteggio < 50 && skill > 40) {
//     msg = "devi migliorare il punteggio";
// } else {
//     msg = "Mi dispiace, fai schifo alla merda"
// }
// console.log(msg);

// //Statement switch
// var msg;
// var livello = 1;
// switch (livello) {
//     case 1:
//         msg = "Buona fortuna per il 1st lv";
//         break;
//     case 2:
//         msg = "Ci sei riuscito, adesso ti tocca il 2nd lv";
//         break;
//     case 3:
//         msg = "Bravo ti manca il boss";
//         break;

//     default:
//         msg = " benvenuto nel gioco!";
// }
// console.log(msg);

//Operatore Ternario
var pioggia = true;
var grandine = true;

var decisione= pioggia == true ? "Prendi l'ombrello" : " Puoi uscire senza ombrello";
var decisione= grandine == true ? "Dio can la macchina" : " esci col cazzo di fuori";

var decisione= pioggia== true && grandine== true ? "Prendi l'ombrello e il giubbotto antiproiettili" : "esci fuori tranquillo";