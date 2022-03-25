const url = 'https://reqres.in/api/users?page=1';
var lista = document.querySelector('#lista');
var carta = document.querySelector('#card');

var oggetti = [];

fetch(url)
    .then(data => {
        return data.json();
    })
    .then(response => {

        this.dati.push();
        console.log(response);
        prendiDati(response.data);

    })

function prendiDati(oggetti) {
    oggetti.forEach(element => {

        var li = document.createElement('li');
        var txtNode = document.createTextNode(element.first_name + ' ' + element.last_name);
        li.appendChild(txtNode);
        lista.appendChild(li);

        li.onclick
        li.addEventListener('click', function (event) {

            if (event.target.tagName == 'LI') {
                carta.innerHTML = '';
                li.setAttribute('class', 'sotto')

                var acca = document.createElement('h4');
                var txtNode2 = document.createTextNode("I'm " + element.first_name + ' ' + element.last_name);

                acca.appendChild(txtNode2);
                this.appendChild(acca);

                var pi = document.createElement('p')
                var txtNode3 = document.createTextNode('Email : ' + element.email)
                pi.appendChild(txtNode3);
                carta.appendChild(pi);

                var img = document.createElement('img')
                img.setAttribute("src", element.avatar);
                carta.appendChild(img)
                acca.setAttribute('class', 'acca');
                pi.setAttribute('class', 'pi');

            }


        }, false)


    });
}