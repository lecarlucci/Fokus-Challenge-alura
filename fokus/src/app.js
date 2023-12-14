//variables
const botonInicioPausa = document.querySelector('#btn-inicio');
const botonReiniciar = document.querySelector('#btn-pausa');

let buttons = document.querySelectorAll("btn");
let enfocarModo = document.getElementById('enfocar');
let cortoModo = document.getElementById('corto');
let largoModo = document.getElementById('largo');

let intervaloDeTiempo;
let estadoCronometro = 'pausado';

let enfocarTiempo = 25;
let cortoTiempo = 5;
let largoTiempo = 15;

let segundos = "00";

//display

window.onload = () => {
    document.getElementById('minutos').innerHTML = enfocarTiempo;
    document.getElementById('segundos').innerHTML = segundos;

}

//Timer
function start() {
    
    segundos = 59;

    let minutosTrabajo = enfocarTiempo - 1;
        let tiempo = () => {
            document.getElementById('minutos').innerHTML = minutosTrabajo;
            document.getElementById('segundos').innerHTML = segundos;
            segundos -= 1;
            
            if ( segundos === 0) {
                segundos = 59
                minutosTrabajo -= 1 
            }
        }
    setInterval(tiempo, 1000)
}

const removeFocus = () => {
    buttons.forEach((btn) => {
        btn.classList.remove('contorno');
    });
}
enfocarModo.addEventListener('click', () => {
    removeFocus();
    enfocarModo.classList.add('contorno');
});

botonInicioPausa.addEventListener('click', function() {
    if (estadoCronometro === 'pausado') {
        intervaloDeTiempo = window.setInterval(start, 1000);
        document.getElementById('btn-inicio').innerHTML = 'Pausar';
        estadoCronometro = 'andando';
    } else {
        window.clearInterval(intervaloDeTiempo);
        document.getElementById('btn-inicio').innerHTML = 'Iniciar';

    }
});