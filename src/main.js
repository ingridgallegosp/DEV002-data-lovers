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