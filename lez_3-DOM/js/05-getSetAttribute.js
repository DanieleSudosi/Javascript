var primoItem = document.getElementsByTagName('li')[0];
if ( primoItem.hasAttribute('class')){
    var attr = primoItem.getAttribute('class');
    var newDiv = document.createElement('div');
    newDiv.innerHTML = "Il nome della classe è " + attr;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(newDiv)
}

// Set Attribute

primoItem.className = "blue";

var terzoItem = document.getElementsById('tre');
terzoItem.setAttribute('class','blue');


//remove Attribute
var quartoItem = document.getElementsById('quattro');
if(quartoItem.hasAttribute('class')){

quartoItem.removeAttribute('class');
}

//aggiungere una classe in più

//primoItem.setAttribute('class','fontUp')
primoItem.classList.add('fontUp')
primoItem.classList.remove('blue')

