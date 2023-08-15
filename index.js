document.getElementById('btncalculo').addEventListener('click', calcular)


function calcular() {
    let name = document.getElementById('nomedousuario').value
    let idade = document.getElementById('idadedousuario').value
    let peso = document.getElementById('pesodousuario').value
    let altura = document.getElementById('alturadousuario').value
    let display = document.getElementById('parteinferior').setAttribute('id', 'parteinferior-on')
    let resAltura = altura * altura
    let imc = peso / resAltura


    if (imc < 18.5) {
        console.log(display)
        console.log(document.querySelector('li.nomepessoa').innerText = `Nome: ${name} `)
        console.log(document.querySelector('li.idadepessoa').innerText = `Idade: ${idade} anos `)
        console.log(document.querySelector('li.generopessoa').innerText = `Genero: ${genero} `)
        console.log(document.querySelector('li.pesopessoa').innerText = `Peso: ${peso} kg `)
        console.log(document.querySelector('li.alturapessoa').innerText = `Altura: ${altura} cm `)
        console.log(document.querySelector('p.valorimc').innerText = `Seu IMC é: ${imc.toFixed(2)} `)
        console.log(document.querySelector('p.classificacaoimc').innerText = `Sua classificação é de : Magreza `)
    } else if (imc >= 18.5 && imc < 25) {
        console.log(document.querySelector('li.nomepessoa').innerText = `Nome: ${name} `)
        console.log(document.querySelector('li.idadepessoa').innerText = `Idade: ${idade} anos `)
        console.log(document.querySelector('li.generopessoa').innerText = `Genero: ${genero} `)
        console.log(document.querySelector('li.pesopessoa').innerText = `Peso: ${peso} kg `)
        console.log(document.querySelector('li.alturapessoa').innerText = `Altura: ${altura} cm `)
        console.log(document.querySelector('p.valorimc').innerText = `Seu IMC é: ${imc.toFixed(2)} `)
        console.log(document.querySelector('p.classificacaoimc').innerText = `Sua classificação é de : Peso Normal`)
    } else if (imc >= 25 && imc < 30) {
        console.log(document.querySelector('li.nomepessoa').innerText = `Nome: ${name} `)
        console.log(document.querySelector('li.idadepessoa').innerText = `Idade: ${idade} anos `)
        console.log(document.querySelector('li.generopessoa').innerText = `Genero: ${genero} `)
        console.log(document.querySelector('li.pesopessoa').innerText = `Peso: ${peso} kg `)
        console.log(document.querySelector('li.alturapessoa').innerText = `Altura: ${altura} cm `)
        console.log(document.querySelector('p.valorimc').innerText = `Seu IMC é: ${imc.toFixed(2)} `)
        console.log(document.querySelector('p.classificacaoimc').innerText = `Sua classificação é de : Sobrepeso`)
    } else if (imc >= 30 && imc < 40) {
        console.log(document.querySelector('li.nomepessoa').innerText = `Nome: ${name} `)
        console.log(document.querySelector('li.idadepessoa').innerText = `Idade: ${idade} anos `)
        console.log(document.querySelector('li.generopessoa').innerText = `Genero: ${genero} `)
        console.log(document.querySelector('li.pesopessoa').innerText = `Peso: ${peso} kg `)
        console.log(document.querySelector('li.alturapessoa').innerText = `Altura: ${altura} cm `)
        console.log(document.querySelector('p.valorimc').innerText = `Seu IMC é: ${imc.toFixed(2)} `)
        console.log(document.querySelector('p.classificacaoimc').innerText = `Sua classificação é de : Obesidade `)
    } else if (imc > 40) {
        console.log(document.querySelector('li.nomepessoa').innerText = `Nome: ${name} `)
        console.log(document.querySelector('li.idadepessoa').innerText = `Idade: ${idade} anos `)
        console.log(document.querySelector('li.generopessoa').innerText = `Genero: ${genero} `)
        console.log(document.querySelector('li.pesopessoa').innerText = `Peso: ${peso} kg `)
        console.log(document.querySelector('li.alturapessoa').innerText = `Altura: ${altura} cm `)
        console.log(document.querySelector('p.valorimc').innerText = `Seu IMC é: ${imc.toFixed(2)} `)
        console.log(document.querySelector('p.classificacaoimc').innerText = `Sua classificação é de : Obsesidade Grave `)
    }



}


