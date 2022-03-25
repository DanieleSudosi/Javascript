//get element by id

var uno = document.getElementById('uno');
uno.textContent = "Inserisci la tua spesa";
console.log(typeof uno);
console.log(uno.innerHTML);
console.log(uno.innerText);
console.log(uno.textContent);
uno.className = 'red';

//get elements by tag name
// var elsLI = document.getElementsByTagName('li');
// console.log(typeof elsLI);

// for ( var i = 0; i < elsLI.length; i++) {
//     elsLI[i].className = 'red';
    
// }

//get elements by class name

var elsLI = document.getElementsByClassName('blue')

for (var i = 0; i < elsLI.length; i++) {
    elsLI.classList = "red"
    
}
