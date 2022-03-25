
var elform= document.getElementById('mioForm');
var elMail = document.getElementById('mail');
var elUser = document.getElementById('username');
const feedMail = document.getElementById('feedMail');
const feedUser = document.getElementById('feedUser');


const exRadio1 = document.getElementById('exampleRadios1');
const exRadio2 = document.getElementById('exampleRadios2');
const exRadio3 = document.getElementById('exampleRadios3');


if(exRadio1.checked){
    console.log();
}


function validate(event) {

    feedUser.innerHTML="";
    feedMail.innerHTML="";

    if(elUser.value == ''){
        feedUser.innerHTML = "Hai dimenticato il nome"
        event.preventDefault();
    
    }

    if(elMail.value == ''){
        feedMail.innerHTML = "Hai dimenticato l'email"
        event.preventDefault();
       
    }
    
}

elform.addEventListener('submit',validate,false)