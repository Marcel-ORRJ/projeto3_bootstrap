$(document).ready(function() {
    $('#telefone').click(function() {
        $('#telefone').mask('(00) 000000000')
    })
    
    $('#telefone').blur(function() {
        let valTel = ($('#telefone').val().length < 14) ? '(00) 0000-0000' : '(00) 00000-0000'
        if (valTel != '') $('#telefone').mask(valTel)
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                minlength: 13
            },
            mensagem: {
                required: true,
            }
        },
        messages: {
            nome: 'Insira um nome válido',
            email:'Insira um E-mail válido',
            telefone:'Insira um número de telefone válido',
            mensagem:'Por favor, insira uma mensagem'
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existe(m) ${camposIncorretos} campo(s) incorreto(s)`)
            }
        },
        submitHandler: function() {
            alert('Formulário enviado com sucesso')
        }
    })
})