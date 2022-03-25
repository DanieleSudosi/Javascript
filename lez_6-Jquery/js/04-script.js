$(function () {

    $('#btn').click(function () {
        var $item = $('#item').val();
        $('#demo').append('<li>' + $item + '<span> X </span> </li>');
        $('#item').val('') //reset del campo
    });
    $("#item").keyup(function (event) {
        if (event.keyCode == 13) {
        $('#btn').click()

        }
    })
              // evento --- target----funzione
    $(document).on('click', "span", function () {
        $(this).parent().remove();
    });


    $(document).on('click', "li", function () {
        $(this).toggleClass("barrato");
    });

})




// $('li').attr('class','barrato')