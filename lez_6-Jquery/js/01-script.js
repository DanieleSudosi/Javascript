'use strict' //crea la strict mode (elimina gli errori silenti)

//selettori
console.log($('#titolo')); // equi document.getById oppure queryselector
$('#titolo').addClass('rosso');

//recupero più elementi dello stesso tipo
$(':header').addClass('rosso'); //header è h di html

//seleziono i primi due elementi li
// $('li:lt(2)').addClass('barrato') 
// $('li:even').addClass('barrato')
// $('li:odd').addClass('barrato')

//effetti
$('li:lt(3)').hide().fadeIn(2500);

$('li').on('click', function () {
    //$(this).remove(); //rimuove
    // $(this).hide();  //nasconde
    $(this).fadeOut(2500) //sparisce dopo un po'
});

// console.log($('li'));


$('ul li').on('click', function () {

    $(this).removeClass('rosso')
});

//ready function
// $(document).ready(function () {
// $('button').click(function () {
// $('ul').hide().dalay(1500).fadeIn(1400);
// })
// });

$(function () {
    //ready function abbreviata
    // var $listaHtml = $('ol').html();
    // console.log($listaHtml);
    // $('#demo').append($listaHtml)
    //var $listaLi = $('li').html(); //.html prende solo il primo
    //console.log($listaLi);

    //$('li').append(' nuovo li: ' + $listaLi)//qui prendo tuti gli li
    $('li:contains("Angular")').text('Angular 12, no-JS');
    $('ul').before('<p class="rosso"> Appena aggiornati </p>');
    $('ul li:last').after('<li> Ruby </li>')
    $('ul li:last').attr('id','sei');
    $('li').css({
        'background-color' : 'red',
        'padding-left': '66px',
        
    })

    $('li').each(function () {
        var $idSelezionati = this.id
        $(this).append('<span class="rosso">' + $idSelezionati + '</span>') ;       
    })
});