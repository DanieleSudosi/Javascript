//aggiungo un elemento all'inizio e uno alla fine

var list = document.getElementsByTagName('ul')[0];

//primo e ultimo El
var primo = document.createElement('li');
primo.innerHTML = "Compare Frutta";
//list.insertBefore(primo,list.firstElementChild)

//per inserirlo al secondo posto
list.insertBefore(primo,list.children[1]);

var ultimo = document.createElement('li')
ultimo.innerHTML = "Andare al cinema"

list.appendChild(ultimo);


//aggiungo una classe a tutti
//posso utilizzare un forEach ma ricorda che la mia lis è una collettor
var lis = document.querySelectorAll('li');

[...lis].forEach(element =>{
    element.setAttribute('class', 'red')

});
//posso utilizzare un for classico
for (var i =0; i < lis.length ; i++) {
    if(lis[i].hasAttribute('class'))
    lis[i].classList.add('fontUp'); 
}


//scrivo il conto di quante cose devo fare
var titolo= document.querySelector('h3'); //prendo la prima occorenza di h3 ma avendo solo questa
// titolo.innerHTML = "Devi fare " + lis.length + 'cose';
var txtH3 = titolo.firstChild.nodeValue;
titolo.innerHTML = txtH3.replace('tot',lis.length);



