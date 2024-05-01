let teclas;
let pantalla = document.getElementById("pantalla");
let clear;
let igual;
let operador;
let valorUno;
let valorDos;
let multiplicar
let dividir;
let restar;
let sumar;


window.onload = function () {
    teclas = document.getElementsByClassName('teclas');
    agregarEventos(teclas);
    operador = document.getElementsByClassName('operador');
    valorUno = this.innerHTML;
    valorDos = this.innerHTML;
    clear = document.getElementById("clear");
    clear.addEventListener(`click`, function () {
        pantalla.value = ""
        valorUno = "";
        valorDos = "";
    })

    //resolver()

}



/*TECLADO*/

function agregarEventos(teclas) {
    for (let i = 0; i < teclas.length; i++) {
        teclas[i].addEventListener('click', function () {
            let valor = this.innerHTML;

            if (pantalla.value.length < 15) {

                pantalla.value += valor;

            }



        });

    }


}

//INTENTO CON ARRAYS
/*function operaciones(operador) {

    for (let i = 0; i < operador.length; i++) {
        operador[i].addEventListener('click', function () {

           console.log("oprimiste un operador") 
          
        });
        
    }
    
}*/

/*function resolver() {


    let respuesta = 0;
    switch (operador) {
        case operador[0]:
            valorUno = this.innerHTML;
            respuesta = parseFloat(valorUno) * parseFloat(valorDos);
            console.log("multiplicacion")
            
            break;

            case operador[1]:
            valorUno = this.innerHTML;
            respuesta = parseFloat(valorUno) / parseFloat(valorDos);
            console.log("division")

            break;

            case operador[2]:
            valorUno = this.innerHTML;
            respuesta = parseFloat(valorUno) - parseFloat(valorDos);
            console.log("resta")

            break;

            case operador[3]:
            valorUno = this.innerHTML;
            respuesta = parseFloat(valorUno) + parseFloat(valorDos);
            console.log("suma")

            break;
       }

    
    
}

igual = document.getElementById('igual');

igual.addEventListener('click', function(){
     valorDos = this.innerHTML;
    pantalla.value = resolver()
})*/



//INTENTO CON FUNCIONES Y EVENTOS
/*multiplicar = document.getElementById("multiplicar");
multiplicar.addEventListener('click', function () {
    valorUno = pantalla.value;
    operador = "*";
    limpiar()
});

dividir = document.getElementById("dividir");
dividir.addEventListener('click', function () {
    valorUno = pantalla.value;
    operador = "/";
    limpiar()
});

restar = document.getElementById("resta");
restar.addEventListener('click', function () {
    valorUno = pantalla.value;
    operador = "-";
    limpiar()
});


sumar = document.getElementById("suma");
sumar.addEventListener('click', function () {
    valorUno = pantalla.value;
    operador = "+";
    limpiar()
});


igual = document.getElementById('igual');
igual.addEventListener('click', function () {
    valorDos = pantalla.value;
    resolver()

})

function limpiar() {

    pantalla.value = "";
}

function resetear() {
    pantalla.value ="";
    valorUno = "";
    valorDos = "";
    operacion = "";
}

function resolver() {

    let respuesta = "";
    switch (operador) {
        case "*":
            valorUno = pantalla.value;
            respuesta = parseFloat(valorUno) * parseFloat(valorDos);


            break;

        case "/":
            valorUno = pantalla.value;
            respuesta = parseFloat(valorUno) / parseFloat(valorDos);


            break;

        case "-":
            valorUno = pantalla.value;
            respuesta = parseFloat(valorUno) - parseFloat(valorDos);


            break;

        case "+":
            valorUno = pantalla.value;
            respuesta = parseFloat(valorUno) + parseFloat(valorDos);


            break;
    }
    resetear();
    pantalla.value = respuesta;


}*/



 igual = document.getElementById("igual");
 igual.addEventListener('click', function(){

    pantalla.value = eval(pantalla.value);

 })