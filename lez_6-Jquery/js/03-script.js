
$(function () {
    $('#form').validate({
        rules:{
            //prendo il nome del campo con cui applicare le regole

            login:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            password:{
                required:true,
                minlength:6,
                maxlength: 12
            }
        },
        
        messages:{
            login: 'Non hai inserito il nome utente',
            password:{
                required: 'inserisci una password',
                minlength: 'Password troppo corta',
                maxlength: 'Password troppo lunga'
            },
            email:{
                required: 'Non hai inserito la mail',
                email: "Email non formattata correttamente"
            }
        },

        // errorPlacement: function (error, element) {
        //     if(element.attr('name') == login || element.attr('name') == email || element.attr('name') == password ){
        //         error.insertAfter('#demo');
        //     }else{
        //         error.insertAfter(element);
        //     }
        // },
        submitHandler: function (form) {
           form.submit(); 
        }
    })
})