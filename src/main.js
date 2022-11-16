//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);

const librosBtn = document.getElementById('librosBtn');
const contenidoLibros = document.getElementById('contenidoLibros');

librosBtn.addEventListener('click', function () {
  contenidoLibros.style.display = "block";
})

document.querySelectorAll(".click").forEach(el => {
  el.addEventListener("click", e => {
    const id = e.target.getAttribute("id");
    console.log("Se ha clickeado el id " + id);
  });
});
//const idContenido =