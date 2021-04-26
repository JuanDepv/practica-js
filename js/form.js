const formulario = document.getElementById('form')
      referenceInputs = document.querySelector('input')
      resetForm = document.querySelector('#reset-form')
      body = document.querySelector('header');

const validlengthnumber = /^.{0,10}$/;
const validNumber = /^[0-9]*$/;

window.document.addEventListener('DOMContentLoaded', function() {
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        validarForm();
    })

    resetForm.addEventListener('click', function(e) {
        e.preventDefault();
        formulario.reset();
    })
})


function validarForm() {

    let estado = true;

    const identificacion = document.getElementById('n_identificacion').value.trim();
	const celular = document.getElementById('celular').value.trim();
	const operacion = document.getElementById('area_ope').value.trim();
	const contacto = document.getElementById('n_contacto').value.trim();
	const nombres_apellidos =document.getElementById('n_p').value.trim();
	const email = document.getElementById('email').value.trim();
	const cargo = document.getElementById('cargo').value.trim();
	const horario = document.getElementById('horario').value.trim();

    let error_i = document.getElementById('error-i')
    if(identificacion == '' || identificacion < 3) {
        mensajes(error_i, false, 'El campo identificación se encuentra vacio');
        estado = false;
    } else if(!validNumber.test(identificacion) || !validlengthnumber.test(identificacion)) {
        mensajes(error_i, false, 'Ingresa solo numeros, o una cantidad igual a 10 digitos');
        estado = false;
    }

    let error_c = document.getElementById('error-c')
    if(celular == '' || celular.length < 3) {
        mensajes(error_c, false, 'el campo celular se encuentra vacio o es menor a 3');
        estado = false;
    } else if(! validNumber.test(celular) || !validlengthnumber.test(celular)) {
        mensajes(error_c, false, 'Ingresa solo numeros, o una cantidad igual a 10 digitos');
        estado = false;
    }

    let error_p = document.getElementById('error-p')
    if(operacion == '') {
        mensajes(error_p, false, 'El campo area/operacion se encuentra vacio');
        estado = false;
    }

    let error_con = document.getElementById('error-con')
    if(contacto == '') {
        mensajes(error_con, false, 'El campo se encuentra vacio');
        estado = false;
    }

    let error_np = document.getElementById('error-np')
    if(nombres_apellidos == '' || nombres_apellidos.length < 4) {
        mensajes(error_np, false, 'El campo se encuentra vacio o es menor a 3 caracteres');
        estado = false;
    }

    let error_e = document.getElementById('error-e')
    if(email == '' || !email.includes('@')) {
        mensajes(error_e, false, 'el campo email se encuentra vacio o el formato es incorrecto');
        estado = false;
    }

    let error_car = document.getElementById('error-car')
    if(cargo == '') {
        mensajes(error_car, false,'El campo cargo se encuentra vacio');
        estado = false;
    }

    let error_h = document.getElementById('error-h')
    if(horario == '') {
        mensajes(error_h, false,'El campo horario se encuentra vacio');
        estado = false;
    }

    if(estado) {
        notificacion('correcto', 'formulario valido');
    }

}

// funcion que indica si el estado 
function mensajes(errortype, estado, mensaje) {
    if(!estado) {
        errortype.classList.add('error-input');
        errortype.innerHTML = mensaje;

        setTimeout(() => {
            errortype.classList.remove('error-input');
            errortype.innerHTML = '';
        }, 3000);


        return false;
    }
}

// funcion que crea una notificacion para indicar que el form es valido
function notificacion(tipo, mensaje) {
    const contenedor = document.createElement('div');
    contenedor.classList.add(tipo, 'notificacion', 'sombra');
    contenedor.textContent = mensaje;

    body.insertBefore(contenedor, document.querySelector('header nav'));

    setTimeout(() => {
        contenedor.classList.add('visible');
        setTimeout(() => {
            contenedor.classList.remove('visible');
            setTimeout(() => {
                contenedor.remove();
           }, 500)
        }, 3000);
    }, 100);
}