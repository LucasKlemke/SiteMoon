

$(document).ready(function(){

    mostrarImagemSecundaria1();

    $('#imagemSecundaria1').click(function(){
        mostrarImagemSecundaria1();
    });
    $('#imagemSecundaria2').click(function(){
        mostrarImagemSecundaria2();
    });
    $('#imagemSecundaria3').click(function(){
        mostrarImagemSecundaria3();
    })
    $('#imagemSecundaria4').click(function(){
        mostrarImagemSecundaria4();
    })
});

function mostrarImagemSecundaria1(){

    let html = ' ';

    html +='<div class="imagemPrincipal imagemDestaque1">';
    html +='</div>';

    $('#imagemPrincipal').html(html);

    $('#imagemSecundaria4').removeClass('brilho')
    $('#imagemSecundaria2').removeClass('brilho')
    $('#imagemSecundaria3').removeClass('brilho')
    $('#imagemSecundaria1').addClass('brilho')

}

function mostrarImagemSecundaria2(){
    let html = ' ';

    html +='<div class="imagemPrincipal imagemDestaque2">';
    html +='</div>';

    $('#imagemPrincipal').html(html);

    $('#imagemSecundaria1').removeClass('brilho')
    $('#imagemSecundaria3').removeClass('brilho')
    $('#imagemSecundaria4').removeClass('brilho')
    $('#imagemSecundaria2').addClass('brilho')

}

function mostrarImagemSecundaria3(){
    let html = ' ';

    html +='<div class="imagemPrincipal imagemDestaque3">';
    html +='</div>';

    $('#imagemPrincipal').html(html);

    $('#imagemSecundaria1').removeClass('brilho')
    $('#imagemSecundaria2').removeClass('brilho')
    $('#imagemSecundaria4').removeClass('brilho')
    $('#imagemSecundaria3').addClass('brilho')
}

function mostrarImagemSecundaria4(){
    let html = ' ';

    html +='<div class="imagemPrincipal imagemDestaque4">';
    html +='</div>';

    $('#imagemPrincipal').html(html);

    $('#imagemSecundaria1').removeClass('brilho')
    $('#imagemSecundaria2').removeClass('brilho')
    $('#imagemSecundaria3').removeClass('brilho')
    $('#imagemSecundaria4').addClass('brilho')

}

const btnComprar = document.getElementById('btnComprar');
btnComprar.addEventListener('click',direcionar);

function direcionar(){
    window.location.href = "carrinho.html";
}