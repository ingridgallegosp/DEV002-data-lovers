
//import { filterAsc, filterDesct } from './data.js'; //organizarPersonaje
import data from './data/harrypotter/harry.js';

/*import { example } from './data.js';
console.log(example, data);*/

const contenidoPersonajes = document.getElementById('contenidoPersonajes'); //capturando contenidoPersonajes
const contenidoHome = document.getElementById('contenidoHome'); //capturando contenidoHome
const homeBtn = document.getElementById('homeBtn'); //capturando homeBtn
const personajesBtn = document.getElementById('personajesBtn'); //capturando personajesBtn

// IR A PAGINA DE INICIO

const salidaBtn = document.getElementById('salidaBtn'); //capturando salidaBtn
salidaBtn.addEventListener('click', function () {
  window.location.href = "index.html";
})

//Guardar valor - nombre del invitado
//localStorage.setItem("nombreM");
//localStorage.removeItem("nombreM")

//Obtener valor almacenado local Storage 
let nombreObtenido = localStorage.getItem("nombreM");
//console.log(nombreObtenido)

//Mostrar valor almacenado  
let nombreBienv= document.getElementById("mensaje-bienvenida");
nombreBienv.innerHTML = "Bienvenida " + nombreObtenido;


// MANIPULACIÓN PÁGINA INDEX/CONTENIDO


//Evento click de homeBtn despliega contendioHome y oculta contenidoPersonajes
homeBtn.addEventListener('click', function () {
  contenidoHome.style.display = "flex";
  contenidoPersonajes.style.display = "none";
})

//Evento click de personajesBtn despliega contendioPersonajes y oculta contenidoHome
personajesBtn.addEventListener('click', function () {
  contenidoPersonajes.style.display = "flex";
  contenidoHome.style.display = "none";
  crearTarjetas(data.characters);
  //NO APARECE EL FORMULARIO FILTRAR DATOS
})

//})
   

//export funcion que define personajes :( no funciona
/*let charactersHP = []; 
charactersHP = (data) => {
    return(data.characters);
};
console.log(charactersHP);*/

// pintar tarjetas
let tarjetas = []; //vamos a ir inyectando los valores de abajo
function crearTarjetas (element) {
  console.log(element);
  element.forEach(characters => { //template literaios
  tarjetas += ` 
              <div class="tarjetas" id= ${characters.id}>
                <div class= "texto-tarjetas">
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
  contenidoPersonajes.innerHTML= tarjetas;
};

/*
//ORDENAR PERSONAJES

//let charac =["a", "d", "b"] 
//let organizarPersonaje = charac.sort();
//console.log(organizarPersonaje) regresa abd 

//export funcion que ordena asc y desc
const ordenarAsc = (array) => {
  const ascendente = array.sort(function(a, b) {
    return a.nombre.localeCompare(b.nombre); //local compare compara 
    })
    return ascendente;
  };
  ordenarAsc(charactersHP);

const ordenarDesc = (array) => {
  const descendente = array.sort(function(a, b) {
    return b.nombre.localeCompare(a.nombre); 
    })
    return descendente;
  };
  ordenarDesc(charactersHP);

//capturar opciones de combobox
const ordenAscendente = document.getElementById('asc'); //capturando opcion ascendente
const ordenDescendente = document.getElementById('desc'); //capturando opcion descendente

/* escoger opcion z-a 
ordenDescendente.addEventListener('click', function () {
  ordenarDesc(characters.name);

  contenidoPersonajes.innerHTML = tarjetas
}); 
*/