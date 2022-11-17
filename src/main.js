//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);


  const homeBtn = document.getElementById('homeBtn');
  const contenidoHome = document.getElementById('contenidoHome');

  homeBtn.addEventListener('click', function () {
    contenidoHome.style.display = "flex";
  })



  const personajesBtn = document.getElementById('personajesBtn');
  const contenidoPersonajes = document.getElementById('contenidoPersonajes');

  personajesBtn.addEventListener('click', function () {
    contenidoPersonajes.style.display = "flex";
    contenidoHome.style.display = "none";
  })
