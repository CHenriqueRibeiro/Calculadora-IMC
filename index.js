$(document).ready(() => {
    $('#pesodousuario').mask('999 Kg')
    $('#alturadousuario').mask("0,00");
    $('#btncalculo').on('click', calcular)
})



function calcular() {
    let name = $('#nomedousuario').val()
    let idade = $('#idadedousuario').val()
    let peso = $('#pesodousuario').val()
    let altura = $('#alturadousuario').val().replace(',', '.')
    let display = $('#parteinferior')
    let genero = document.querySelector('input[name="genero"]:checked').value
    let resAltura = altura * altura
    let imc = peso / resAltura
    display.addClass('parteinferior-on')

    if (imc < 18.5) {

        console.log($('li.nomepessoa').text(`Nome: ${name} `))
        console.log($('li.idadepessoa').text(`Idade: ${idade} anos `))
        console.log($('li.generopessoa').text(`Genero: ${genero} `))
        console.log($('li.pesopessoa').text(`Peso: ${peso} kg `))
        console.log($('li.alturapessoa').text(`Altura: ${altura} cm `))
        console.log($('p.valorimc').text(`Seu IMC é: ${imc.toFixed(2)} `))
        console.log($('p.classificacaoimc').text(`Sua classificação é de : Magreza`))
    } else if (imc >= 18.5 && imc < 25) {
        console.log($('li.nomepessoa').text(`Nome: ${name} `))
        console.log($('li.idadepessoa').text(`Idade: ${idade} anos `))
        console.log($('li.generopessoa').text(`Genero: ${genero} `))
        console.log($('li.pesopessoa').text(`Peso: ${peso} kg `))
        console.log($('li.alturapessoa').text(`Altura: ${altura} cm `))
        console.log($('p.valorimc').text(`Seu IMC é: ${imc.toFixed(2)} `))
        console.log($('p.classificacaoimc').text(`Sua classificação é de : Peso Normal`))
    } else if (imc >= 25 && imc < 30) {
        console.log($('li.nomepessoa').text(`Nome: ${name} `))
        console.log($('li.idadepessoa').text(`Idade: ${idade} anos `))
        console.log($('li.generopessoa').text(`Genero: ${genero} `))
        console.log($('li.pesopessoa').text(`Peso: ${peso} kg `))
        console.log($('li.alturapessoa').text(`Altura: ${altura} cm `))
        console.log($('p.valorimc').text(`Seu IMC é: ${imc.toFixed(2)} `))
        console.log($('p.classificacaoimc').text(`Sua classificação é de : Sobrepeso`))
    } else if (imc >= 30 && imc < 40) {
        console.log($('li.nomepessoa').text(`Nome: ${name} `))
        console.log($('li.idadepessoa').text(`Idade: ${idade} anos `))
        console.log($('li.generopessoa').text(`Genero: ${genero} `))
        console.log($('li.pesopessoa').text(`Peso: ${peso} kg `))
        console.log($('li.alturapessoa').text(`Altura: ${altura} cm `))
        console.log($('p.valorimc').text(`Seu IMC é: ${imc.toFixed(2)} `))
        console.log($('p.classificacaoimc').text(`Sua classificação é de : Obesidade`))
    } else if (imc > 40) {
        console.log($('li.nomepessoa').text(`Nome: ${name} `))
        console.log($('li.idadepessoa').text(`Idade: ${idade} anos `))
        console.log($('li.generopessoa').text(`Genero: ${genero} `))
        console.log($('li.pesopessoa').text(`Peso: ${peso} kg `))
        console.log($('li.alturapessoa').text(`Altura: ${altura} cm `))
        console.log($('p.valorimc').text(`Seu IMC é: ${imc.toFixed(2)} `))
        console.log($('p.classificacaoimc').text(`Sua classificação é de : Obsesidade Grave`))
    }

    $('input[type="text"],input[type="number"]').val('')

}


