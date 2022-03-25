
//creo elemento
var nuovoEl = document.createElement('li');
// nuovoEl.innerHTML = "ciao"

//creo nodo di testo
var nuovoTxt = document.createTextNode('Compilare CV');
//aggancio il testo al genitore
nuovoEl.appendChild(nuovoTxt)
console.log(nuovoEl);
//selezione il genitore del nuovo li
var genitoreUL = document.getElementsByTagName('ul')[0];

genitoreUL.appendChild(nuovoEl);


//elimino elemento

var elDaRimuovere = document.getElementsByTagName('li')[1];
var contenitoreElem = document.getElementsByTagName('ul')[0]
contenitoreElem.removeChild(elDaRimuovere);
