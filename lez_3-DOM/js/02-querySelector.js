//query selector

var elSingolo = document.querySelector('#one');
elSingolo.innerHTML= "Mele";

var elSingolo2 = document.querySelector('li.blue');
console.log(elSingolo2);

var elSingolo3 = document.querySelector('li');
console.log(elSingolo3);


//query selector all

var els = document.querySelectorAll('li.red');
console.log(els);

if(els.length>0){
    for (let i = 0; i < els.length; i++) {
       // els[i].className = 'fontUp' ;
       els[i].classList.add('fontUp') ;//aggiungo alla classe red la classe fontUp

    }
}