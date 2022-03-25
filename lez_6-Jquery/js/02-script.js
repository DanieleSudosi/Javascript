$(function () {
    $('#btn1').on('click', function () {
        $(':header').empty(); //clicco sul bottone e spariscono i testi
    })
    $('#btn2').click(function () {
        
        $('span.c2').css({'color':'blue'});
    });
    $('#btn3').on('mouseenter', function () {
        $('div:first').text('Jquery ONLINE')
    })

    $('#btn3').on('mouseleave', function () {
        $('div:first').text('Lorem Ipsum')
    })
    var pixel=0;
    var click=0;
    $('#demo').on('mousemove',function () {
        $('#demo').text('stai percorrendo' + pixel++ + 'pixel');
        
    }).on('click',function () {
        $('#demo').text(' stai cliccando ' + click++ + ' volte');
    })


});