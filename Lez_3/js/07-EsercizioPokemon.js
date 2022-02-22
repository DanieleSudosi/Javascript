
// var list = document.getElementsByTagName('li')[0];
// var titolo1 = document.createElement("a href")
// list.insertBefore(titolo1,list.firstChild)
// titolo1.innerHTML = "Eveee";

// var list = document.getElementsByTagName('li')[1];
// var titolo2 = document.createElement("h3")
// list.insertBefore(titolo2,list.firstChild)
// titolo2.innerHTML = "Vaporeon";

// var list = document.getElementsByTagName('li')[2];
// var titolo3 = document.createElement("h3")
// list.insertBefore(titolo3,list.firstChild)
// titolo3.innerHTML = "Flareon";

// var list = document.getElementsByTagName('li')[3];
// var titolo4 = document.createElement("h3")
// list.insertBefore(titolo4,list.firstChild)
// titolo4.innerHTML = "Jolteon";

// var list = document.getElementsByTagName('li')[4];
// var titolo5 = document.createElement("h3")
// list.insertBefore(titolo5,list.firstChild)
// titolo5.innerHTML = "Umbreon";


// titolo.setAttribute("href", "https://wiki.pokemoncentral.it/Eevee"); 

// var primaImg = document.getElementById("img1")
// img1.setAttribute("src","img/Eveee.jpeg")

// var secondaImg = document.getElementById("img2")
// img2.setAttribute("src","img/Vaporeon.jpeg")

// var terzaImg = document.getElementById("img3")
// img3.setAttribute("src","img/Flareon.jpeg")

// var quartaImg = document.getElementById("img4")
// img4.setAttribute("src","img/Jolteon.jpeg")

// var quintaImg = document.getElementById("img5")
// img5.setAttribute("src","img/Umbreon.jpeg")

var pokemons = ["Eevee", "Flareon", "Jolteon", "Umbreon", "Vaporeon"]
// var list = document.querySelector('li');
var lista = document.querySelectorAll('img');
// .lista.firstChild.nodeValue

for (let i =0; i < [...lista].length ; i++) {
        var element = [...lista][i];
        element.setAttribute("src", "img/" + pokemons[i] + ".jpeg")
    }
// for (let i =0; i < [...list].length ; i++) {
//         var element = [...list][i];
//         var titolo = document.createElement("a")
//     }


// [...pokemon].forEach(element =>{
//     element.setAttribute(
// pokemon.innerHTML = ahef.replace(pokemons[element],pokemon.length),
    
//     )})