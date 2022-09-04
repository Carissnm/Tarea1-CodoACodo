const dropdown = document.querySelector('.dropdown-lista')
const listaNavbar = document.querySelector('.lista-navbar')
const ul = document.querySelector('.contenedor-lista-navbar')
const li = document.querySelectorAll('.lista')

//Eventos

dropdown.onclick = mostrarLista;

//funciones 

function mostrarLista() {
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