export function validate(input) {
    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid) {
        input.classList.remove('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = '';
    } else {
        input.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
];

const mensajesDeError = {
    nombre: {
        valueMissing: 'El campo nombre no puede estar vacío'
    },
    email: {
        valueMissing: 'El campo de correo electrónico no puede estar vacío',
        typeMismatch: 'El correo es inválido'
    },
    apellido: {
        valueMissing: 'El campo apellido no puede estar vacío'
    },
    cantidad: {
        valueMissing: 'El campo de cantidad no puede estar vacío'
    },
    categoria: {
        valueMissing: 'El campo de categoría no puede estar vacío'
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = '';
    tipoDeErrores.forEach( error => {
        if(input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}