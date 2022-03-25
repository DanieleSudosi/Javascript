var demo = document.querySelector("#demo");


//Recupero il file txt

var xmlhttp = new XMLHttpRequest(); //oggetto che elabora la risposta del server

const url = "./assets/studente.txt";

xmlhttp.open("GET", url, true); //apri la richesta

xmlhttp.send(); //invii la richiesta

xmlhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response);
        // demo.innerHTML += response[0].nome+ "<br>";
        // demo.innerHTML += response[3].nome+ "<br>";

        for(var i = 0;i < response[0].compagniClasse.length ; i++){
            demo.innerHTML += response[0].compagniClasse[i] + "<br>"
        }
    }

}


//recuperiamo la struttura html

var xmlhttp2 = new XMLHttpRequest();
const url2 = "./assets/struttura.html";

xmlhttp2.open("GET",url2,true);

xmlhttp2.send();

xmlhttp2.onreadystatechange = function () {
    if (this.readyState ==4 && this.status == 200){
        //console.log(this.responseXML);
        demo.innerHTML += this.response


    }
}



