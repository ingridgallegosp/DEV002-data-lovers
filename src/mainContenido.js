//import { filterAsc, filterDesct } from './data.js'; //organizarPersonaje
import data from './data/harrypotter/harry.js';
import { ordenarAsc, ordenarDesc } from './data.js';

//console.log(example, data);

const contenidoHome = document.getElementById('contenidoHome'); //capturando contenidoHome
const contenidoPersonajes = document.getElementById('contenidoPersonajes'); //capturando contenidoPersonajes
const contenidoTarjetas = document.getElementById("tarjetas");
const homeBtn = document.getElementById('homeBtn'); //capturando homeBtn
const personajesBtn = document.getElementById('personajesBtn'); //capturando personajesBtn
const salidaBtn = document.getElementById('salidaBtn'); //capturando salidaBtn

window.addEventListener("load", function () {
  let nombreObtenido = localStorage.getItem("nombreM");//Obtener valor almacenado local Storage 
  //console.log(nombreObtenido)
  let nombreBienv = document.getElementById("mensaje-bienvenida");//Mostrar valor almacenado  
  nombreBienv.innerHTML = "Bienvenida " + nombreObtenido;
});

salidaBtn.addEventListener('click', function () {
  window.location.href = "index.html";
});
homeBtn.addEventListener('click', function () {
  contenidoHome.style.display = "flex";
  contenidoPersonajes.style.display = "none";
});
personajesBtn.addEventListener('click', function () {
  contenidoPersonajes.style.display = "block";
  contenidoHome.style.display = "none";
  contenidoTarjetas.innerHTML = crearTarjetas(ordenarAsc(charactersHP));
});

let charactersHP = [];
charactersHP = data.characters;
//console.log(charactersHP);


// Plantilla tarjetas
function crearTarjetas(element) {
  //console.log(element);
  let tarjetas = [];
  element.forEach(characters => { //template literaios
    tarjetas += ` 
              <div class="tarjeta" id= ${characters.id}>
                <div class= "texto-tarjeta">
                <h2 class="nombre">${characters.name}</h2>
                <li class="casa"> Casa: ${characters.house}</li>
                <li class="especie">Especie: ${characters.species}</li>
                <li class="ascendencia">Ascendencia: ${characters.ancestry}</li>
                <li class="genero">Género: ${characters.gender}</li>
                <li class="fecha-nacimiento">Nacimiento: ${characters.birth}</li>
                <li class="fecha-muerte">Muerte: ${characters.death}</li>
                <li class="libros">Libros en los que aparece: ${characters.books_featured_in}</li>
                </div>
              </div>
              `
  });
  return tarjetas
};

//Seleccion para ordenar alfabeticamente
const select = document.querySelector("#orden") //capturando opcion ascendente
//escoger opcion a-z y z-a 
console.log(select);
//Evento change llama a la funcion segun indice de seleccion
document.getElementById("orden").addEventListener('change', function () {
  let indice = select.selectedIndex;
  //console.log(indice)
  if (indice == 1) {
    contenidoTarjetas.innerHTML = ""
    contenidoTarjetas.innerHTML = crearTarjetas(ordenarAsc(charactersHP));
    //console.log(crearTarjetas(ordenarAsc(charactersHP)))
  }
  else if (indice == 2) {
    contenidoTarjetas.innerHTML = ""
    contenidoTarjetas.innerHTML = crearTarjetas(ordenarDesc(charactersHP))
    //console.log(crearTarjetas(ordenarDesc(charactersHP)))
  }
});



