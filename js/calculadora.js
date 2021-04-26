const calculando = document.querySelector('#calculando')
const mostrarResultado = document.querySelector('#result');
const numero = document.querySelector('#numero');

mostrarResultado.innerText = '0';

let status = 0,
    numero1,
    numero2,
    tipoOperacion;

window.document.addEventListener('DOMContentLoaded', function () {
  calculadora();
});

function calculadora() {
  if (!numero) return;

  numero.addEventListener('click', function (e) {
    /**
     * el getAttribute obtiene el valor de el atributo
     *
     * const type = e.target.getAttribute('data-numero');
     */

    /**
     * https://developer.mozilla.org/es/docs/Learn/HTML/Howto/Use_data_attributes
     * uso del atributo en html5 de 'data-valor="value"'
     */
    const target_ = e.target;
    tipo = target_.dataset;

        if (Object.keys(tipo)) {
            if (tipo.numero) {
                mostrarNumero(tipo.numero);
            }

            if (tipo.operacion) {
                obtenerOperacion(target_, tipo.operacion);
            }
            
            if (tipo.result === 'resultado') {
                operacion(numero1, tipo.operacion);
            }
            
            if (tipo.result === "limpiar") {
                limpiar();
            }
            
            if (tipo.result === "borrar") {
                limpiar();
            }

        }
  });
}

function mostrarNumero(numero) {
  if (mostrarResultado.innerText === "0" || status === 1) {
    mostrarResultado.innerText = numero;
  } else if (numero === "." && !mostrarResultado.innerText.includes(".")) {
    mostrarResultado.innerText += numero;
  } else if (numero !== ".") {
    mostrarResultado.innerText += numero;
  } else {
    return;
  }

  status = 0;
}

function obtenerOperacion(element, tipo) {
    status = 1;
    
    // asignamos a una variable el numero uno mostrado en pantalla
    numero1 = parseInt(mostrarResultado.innerText);
    
    // muestra el tipo de la operación
    tipoOperacion = tipo;

    // mostramos el simbolo de la operación
    mostrarResultado.innerText = element.innerText;
    
}

function operacion() {

    numero2 = parseInt(mostrarResultado.innerText);
    let result = 0;

    switch (tipoOperacion) {
        case "division":
            calculando.innerText = numero1 +' '+ '/' +' '+ numero2 +' = ';
            result = (numero1 / numero2);
            break;

        case "multiplicacion":
            calculando.innerText = numero1 +' '+ 'x' +' '+ numero2 +' = ';
            result = (numero1 * numero2);
            break;

        case "resta":
            calculando.innerText = numero1 +' '+ '-' +' '+ numero2 +' = ';
            result = (numero1 - numero2);
            break;

        case "suma":
            calculando.innerText = numero1 +' '+ '+' +' '+ numero2 +' = ';
            result = (numero1 + numero2);
            break;

        default:
            break;
    }

    if (result === Infinity) {
      mostrarResultado.innerText = 'no puedes dividir por 0'
    } else {
      mostrarResultado.innerText = result
    }

    status = 1;
}

function limpiar() {
  mostrarResultado.innerText = "0";
  calculando.innerText = '';
  status = 0;
}