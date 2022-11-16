//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);

const librosBtn = document.getElementById('librosBtn');
    const contenidoLibros = document.getElementById('contenidoLibros');

    librosBtn.addEventListener('click', function () {
      contenidoLibros.classList.add('mostrar-contenido');
    })