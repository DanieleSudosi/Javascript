var films = [{
        titolo: "El Camino",
        durata: 122,
        anno: 2019,
        locandina: 'https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg',
        genere: "Drammatico",
        attori: ['Aaron Paul', 'Jponatan Banks', 'Matt Jones']
    },
    {
        titolo: "Avatar",
        durata: 162,
        anno: 2009,
        locandina: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
        genere: "Fantascienza",
        attori: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver']
    },

    {
        titolo: "I Am Legend",
        durata: 101,
        anno: 2007,
        locandina: 'https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        genere: "Horror",
        attori: ['Will Smith', 'Alice Braga', 'Charlie Tahan']
    },

    {
        titolo: "Interstellar",
        durata: 169,
        anno: 2014,
        locandina: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        genere: "Horror",
        attori: ['Ellen Burstyn', 'Matthew McConaughey', 'Mackenzie Foy']
    },
    {
        titolo: "Tre Uomini e una gamba",
        durata: 100,
        anno: 1997,
        locandina: 'https://m.media-amazon.com/images/I/71Iq4IF29iL._SL1024_.jpg',
        genere: "Commedia",
        attori: ['Aldo Baglio', 'Giacomo Poretti', 'Giovanni Storti']
    },
]

//prendere un OBj scritto in JS e trasforma in notazione JSon
var mioJSon = JSON.stringify(films[0])
console.log(mioJSon);

//prendo un obj formato JSON, lo trasformo in un oggetto JS
var filmJSON = '{"Title":"The Lord of the Rings: The Fellowship of the Ring","Year":"2001","Rated":"PG-13","Released":"19 Dec 2001","Runtime":"178 min","Genre":"Action, Adventure, Drama","Director":"Peter Jackson","Writer":"J.R.R. Tolkien, Fran Walsh, Philippa Boyens","Actors":"Elijah Wood, Ian McKellen, Orlando Bloom","Plot":"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.","Language":"English, Sindarin","Country":"New Zealand, United States","Awards":"Won 4 Oscars. 121 wins & 126 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"92/100"}],"Metascore":"92","imdbRating":"8.8","imdbVotes":"1,767,565","imdbID":"tt0120737","Type":"movie","DVD":"06 Aug 2002","BoxOffice":"$315,710,750","Production":"N/A","Website":"N/A","Response":"True"}';
var mioObj = JSON.parse(filmJSON);

// ----------------------------------------------------------------------------

var titolo = document.getElementById("titolo")
var durata = document.getElementById("durata")
var anno = document.getElementById("anno")
var locandina = document.getElementById("locandina")
var cast = document.getElementById("cast")

var counter = 0 ;
locandina.setAttribute('src', films[counter].locandina);

function prev() {

    counter--;
    if (films[counter] != null) {


        cast.innerHTML = "";
        titolo.innerHTML = films[counter].titolo; //h1

        locandina.setAttribute('src', films[counter].locandina); //img

        var elLI = document.createElement("li");
        var item = document.createTextNode(films[counter].attori);
        elLI.appendChild(item);
        cast.appendChild(elLI)

        durata.innerHTML = films[counter].durata; //durata
        anno.innerHTML = films[counter].anno; //anno  
        genere.innerHTML = films[counter].genere; //genere
    }else counter++;
}

function next() {
    
    counter++;
    if (films[counter] != null) {

        cast.innerHTML = "";
        titolo.innerHTML = films[counter].titolo; //h1

        locandina.setAttribute('src', films[counter].locandina); //img

        var elLI = document.createElement("li");
        var item = document.createTextNode(films[counter].attori);
        elLI.appendChild(item);
        cast.appendChild(elLI)

        durata.innerHTML = films[counter].durata; //durata
        anno.innerHTML = films[counter].anno; //anno  
        genere.innerHTML = films[counter].genere; //genere
    }else counter--;
}