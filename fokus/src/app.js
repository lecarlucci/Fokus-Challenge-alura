//variables
let enfocarMode = document.getElementById('enfocar');
let cortoMode = document.getElementById('corto');
let largoMode = document.getElementById('largo');

let enfocarTime = 25;
let cortoTime = 5;
let largoTime = 15;

let esDescanso = false;

let segundos = "00";

//display

window.onload = () => {
    document.getElementById('minutos').innerHTML = enfocarTime;
    document.getElementById('segundos').innerHTML = segundos;

    focusMode.classList.add('active');
}

//Timer

function start() {
    
    segundos = 59;

    let minutosTrabajo = enfocarTime - 1;
    let cortoDescanso = cortoTime - 1;
    let largoDescanso = largoTime - 1;

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

