import { validate } from "./validaciones.js";



const dropdown = document.querySelector('.dropdown-lista');
const listaNavbar = document.querySelector('.lista-navbar');
const ul = document.querySelector('.contenedor-lista-navbar');
const li = document.querySelectorAll('.lista');
const form = document.querySelector('.formulario-tickets');
const totalTickets = document.querySelector('.total-pagar-tickets')
const btnRefresh = document.querySelector('.btn-reset');
const inputs = document.querySelectorAll('input');


//Eventos

dropdown.onclick = showList;
form.onsubmit = showPrice;
btnRefresh.onclick = contentReset;

//funciones 
//FUNCIÓN MENU DESPLEGABLE
function showList() {
    if(!listaNavbar.classList.contains('mostrar')){
        listaNavbar.classList.add('mostrar');
        ul.classList.add('dropdown');
        li.forEach(item => {
            item.classList.add('li-dropdown');
        });
    } else {
        listaNavbar.classList.remove('mostrar');
        ul.classList.remove('dropdown');
        li.forEach(item => {
            item.classList.remove('li-dropdown');
        });
    }
}

inputs.forEach( input => {
    input.addEventListener('blur', (input) => {
        validate(input.target);
    })
})

function showPrice(e) {
    e.preventDefault();
    totalTickets.innerHTML = ''

    const quantity = document.querySelector('.input-cantidad');
    const category = document.querySelector('#categoria-tickets');


    if(quantity.value !== '') {
        if(category.value === 'Estudiante') {
            createTotal(0.8);
        } else if(category.value === 'Trainee') {
            createTotal(0.5);
        } else if(category.value === 'Junior') {
            createTotal(0.15);
        }
    }
}

function contentReset() {
    totalTickets.innerHTML = '';
}

const createTotal = number => {
    const quantity = document.querySelector('.input-cantidad');
    const totalDiv = document.createElement('p');
    totalDiv.classList.add('total-pagar-parrafo')
    totalDiv.innerHTML = `<p>Total a pagar: $${quantity.value * 200 - 200 * number}</p>`;
    totalTickets.appendChild(totalDiv);
}