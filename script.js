const display = document.getElementById('display')
const numeros = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=operador]')

let novoNumero = true
let operador
let numeroAnterior

const atualizarDisplay = (texto) => {
    if(novoNumero){
        display.textContent = texto
        novoNumero = false
    }else{
        display.textContent += texto
    }
}

// const inserirNumero = (evento) => display.textContent = evento.target.textContent

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)

numeros.forEach (numero => numero.addEventListener('click', inserirNumero ))



const selecionarOperador = (evento) => {
    if(!novoNumero){
        novoNumero = true
        operador = evento.target.textContent
        numeroAnterior = display.textContent
        console.log(operador)
        console.log(numeroAnterior)
    }
}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador))
