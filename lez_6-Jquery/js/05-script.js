
//  $('#btn').click(function () {
//         url: 'https://randomuser.me/api/?results=5000',
//         type: 'get',
//         dataType: 'json',
//         success: function(data) {
//           miaFunzione(data);
//         },
//         error: function () {
//           console.log("Qualcosa è andata storto");  
//         }
//     });
// })

//  function miaFunzione(dati){
// this.dati = data;
// console.log(this.dati);
// }


$(function () {
    
    // $.ajax({
    //     url: 'http://dummy.restapiexample.com/api/v1/employees',
    //     type: 'get',
    //     dataType: 'json',
    //     success: function (data) {
    //         var dipendenti =[];
    //         $.each(data.data, function (key, value) {
             
    //             dipendenti.push('<li id="' + key + '">' + value.employee_name + '</li>');

    //         });

    //         console.log(dipendenti);
    //         var demo = $('#demo');

    //         dipendenti.forEach(element => {
    //             $('#demo').append(element)
    //         });
    //     },
    //     error: function () {
    //         console.log('Qualcosa non va');
    //     }
    // })


    //SHORTHAND

    // $.getJSON('http://dummy.restapiexample.com/api/v1/employees',function (data) {
    //     console.log(data);
    // })

    // $.get('http://dummy.restapiexample.com/api/v1/employees', function (data) { 

    // console.log(data);
    //  })

    //  $.put();
    //  $.post();
    //  $.delete();

    $.ajax({
        url: "http://dummy.restapiexample.com/api/v1/create",
        type: "post",
        data: {
            name: "Daniele",
            surname: "Sudosi",
            salary: " mi dai una monetina?",
            città: 'Torino',

        },
        success: function (response) {
            console.log(response);
        }
    });

    $.ajax({
        url: "http://dummy.restapiexample.com/api/v1/create/2",
        type: "delete",
        dataType: 'json',
        success: function (response) {
            console.log(response);
        }
    })




})


