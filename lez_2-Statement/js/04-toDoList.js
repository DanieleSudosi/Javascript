// var items = [];
// var output = document.getElementById('output');
// var lista = document.getElementById('lista');

// btn1.onclick = prova;

//  function prova() {
//      var todo = document.getElementById('listItem').value;
//     if((todo == 0) || (items.indexOf(todo) != -1)){

// }else{ 
//     // output.innerHTML = "";
//     items.push(todo);
//     lista.innerHTML += "<li>"+ todo + "</li>" + "<br>";
//                     + "<button>  </button>    
//                     + "<button> Elimina </button>    
// }
//     document.getElementById('listItem').value= ' ';

// // "<ul>"+ btn1.onclick +"</ul>"
// }

var items = [];
var btn1 = document.getElementById("btn1");
var voce = "";


function stampa(listaArr) {
    var output = "";
    output += '<ul>'

    for (i = 0; i < listaArr.length; i++) {
        output += "<li>"+ listaArr[i] + "<span onclick= 'completa()'></span></li>";

    }
    output += '</ul>'
    document.getElementById("output").innerHTML = output;
}

btn1.onclick = function () {
    voce = document.getElementById('listItem').value;

    if ((voce.length > 0) && (items.indexOf(voce) == -1))
        items.push(voce);

    document.getElementById("listItem").value = "";

    stampa(items)
    console.log(items);
}