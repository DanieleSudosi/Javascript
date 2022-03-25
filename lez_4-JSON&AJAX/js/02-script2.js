const url = 'https://reqres.in/api/users?page=1';

var dati = []

fetch(url)
    .then(data => {
        return data.json()
    })
    .then(response => {
        this.dati.push(response);
        console.log(response);
        prendiDati(response.data);

    })

function prendiDati(dati) {
    console.log(dati);
    dati.forEach(element => {

        var li = document.createElement('li');
        var txtNode = document.createTextNode(element.first_name + ' ' + element.last_name);
        li.appendChild(txtNode);
        lista.appendChild(li);


        // li.onclick = function () {
        li.addEventListener('click', function (event) {

            if (event.target.tagName == 'LI') {
                var carta = document.querySelector('#carta');
                carta.classList.add('block')
                var img = document.querySelector('#img');
                img.setAttribute('src', element.avatar);
                var titolo = document.querySelector('#titolo');
                titolo.innerHTML = element.first_name + ' ' + element.last_name;
                var descrizione = document.querySelector('#descrizione');
                descrizione.innerHTML = "Hello, i'm " + element.first_name + ' ' + element.last_name + "<br> you can contact me: " + element.email;
            }
        }, false);
        // }
     });
}

var lista = document.querySelector('#lista');
// var card = document.querySelector(".card")