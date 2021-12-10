jQuery('document').ready(function($){

var menuBtn = $('.menu-icon'),
    menu = $('.navigation ul');

    menuBtn.click(function() {

        if( menu.hasClass ('show') ) {

            menu.removeClass('show');
        } else {
           
            menu.addClass('show');
        }

    });
});

function sendMail() {
    const url = "https://sendmailer-smtp.herokuapp.com/api/v1/private";
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json' //Important, Only JSON content type!
        },
        body: JSON.stringify({

            //Email config
            name: 'Co2Sense', //from email Name
            to: 'j.martinez4002@gmail.com', //to email address
            subject: 'Formulario Pagina', //email subject
            typeMSG: 'html', //text or html
            message: `
            -nombre: ${document.getElementById('nombre').value}<br>
            -correo: ${document.getElementById('correo').value}<br>
            -telefono: ${document.getElementById('telefono').value}<br>
            -textarea: ${document.getElementById('textarea').value}<br>
            `,
        })
    }).then(res => res.text())
    .then(res => console.log(res))
}