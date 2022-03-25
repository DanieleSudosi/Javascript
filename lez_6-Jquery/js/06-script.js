$(function () {

    $("form").submit("click", function (event) {
        var $user = $("#user").val();
        var $pass = $("#password").val();
        if ($user != "Dani") {
            event.preventDefault();
            $("#mex").html("User errato")
        } else if ($pass != "1234") {
            event.preventDefault();
            $("#mex").html("Password errata")
        }
    })
})

$.ajax({
    url: "http://localhost:7000/utenti",
    type: "get",
    dataType: "json",
    success: function (data) {
        for (var i = 0; i < data.length; i++) {
            $("#sezione").append(
                "<div class='card' style='width: 18rem;'>" +
                "<img src='" + data[i].img + "' class='card-img-top'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" + "<span>Nome: </span>" + data[i].name + "</h5>" +
                "<p class='card-text'>" + "<span>Cognome: </span>" + data[i].surname + "</p>" +
                "<p class='card-mail'>" + "<span>Email: </span>" + data[i].email + "</p>" +
                "</div>" +
                "<button id='elim'> X  </button>" +
                "</div>"
            )
        }
    }
});

$("#btn").on("click", function () {

    console.log($("#imgUrl").val());
    $.ajax({
        url: 'http://localhost:7000/utenti',
        type: 'post',
        dataType: 'json',
        data: {
            name: $("#name").val(),
            surname: $("#surname").val(),
            email: $("#mail").val(),
            img: $("#imgUrl").val()
        },
        success: function (response) {
            $("#sezione").append(
                "<div class='card' style='width: 18rem;'>" +
                "<img src='" + response.img + "' class='card-img-top'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" + "<span>Nome: </span>" + response.name + "</h5>" +
                "<p class='card-text'>" + "<span>Cognome: </span>" + response.surname + "</p>" +
                "<p class='card-mail'>" + "<span>Email: </span>" + response.email + "</p>" +
                "</div>" +
                "</div>"
            )
        },
    })
    $("#name").val("");
    $("#surname").val("");
    $("#mail").val("");
    $("#imgUrl").val("")
})

$('#elim').on('click', function (e) {
    e.preventDefault();
 
    $.ajax({
        url: 'http://localhost:7000/utenti',
        type: 'delete',
        dataType: 'json',
        data:{
            id: 110
            
        },
        
        success: function (response) {
            alert("rimosso");
        }
    })
});

// $(document).on('click', '#elim', function () {
//     
//     function elim(params) {
        
//     }

// })

// $("#btnFile").on("change", function(){
//     var reader = new FileReader();
//     var dataURL = reader.result;
//     reader.readAsDataURL(dataURL);
//     console.log(dataURL);

// })
// function apriFile(event){
//     var input = event.target;
//     var reader = new FileReader();
//     reader.onload = function(){
//         console.log(reader.result);
//     }
//     reader.readAsDataURL(input.files[0]);
// }
// btnFile.addEventListener("change", apriFile, false);