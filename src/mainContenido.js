
//import { filterAsc, filterDesct } from './data.js'; //organizarPersonaje
import data from './data/harrypotter/harry.js';

/*import { example } from './data.js';
console.log(example, data);*/

const contenidoPersonajes = document.getElementById('contenidoPersonajes'); //capturando contenidoPersonajes
const contenidoHome = document.getElementById('contenidoHome'); //capturando contenidoHome
const homeBtn = document.getElementById('homeBtn'); //capturando homeBtn
const personajesBtn = document.getElementById('personajesBtn'); //capturando personajesBtn
const salidaBtn = document.getElementById('salidaBtn'); //capturando salidaBtn
salidaBtn.addEventListener('click', function () {
  window.location.href = "index.html";
});
const nombreObtenido = localStorage.getItem("nombreM"); //Obtener valor almacenado local Storage 
//console.log(nombreObtenido)
const nombreBienv= document.getElementById("mensaje-bienvenida"); //Mostrar valor almacenado  
nombreBienv.innerHTML = "Bienvenida " + nombreObtenido;

//capturar opciones de combobox
const ordenAscendente = document.getElementById('asc'); //capturando opcion ascendente
const ordenDescendente = document.getElementById('desc'); //capturando opcion descendente
// escoger opcion z-a 
ordenDescendente.addEventListener('click', function () {
  ordenarDesc(data);
});
ordenAscendente.addEventListener('click', function () {
    ordenarAsc(data.characters.name);
});

//Evento click de homeBtn despliega contendioHome y oculta contenidoPersonajes
homeBtn.addEventListener('click', function () {
  contenidoHome.style.display = "flex";
  contenidoPersonajes.style.display = "none";
});

//Evento click de personajesBtn despliega contendioPersonajes y oculta contenidoHome
personajesBtn.addEventListener('click', function () {
  contenidoPersonajes.style.display = "flex";
  contenidoHome.style.display = "none";
  crearTarjetas(data.characters);
});

//Función para crear las tarjetas con los personajes e imprimirlas en html

 //vamos a ir inyectando los valores de abajo
function crearTarjetas (element) {
  //console.log(element);
  let tarjetas = [];
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
  return console.log(tarjetas)
};
//console.log(tarjetas)
//imprimir tarjetas


      /*let tarjetas = [];
      
      crearTarjetas (data.characters);
      function crearTarjetas (element) {
        console.log(element);

        const container = document.querySelector(".tarjeta");
        element.forEach(characters => {
        tarjetas += `
                  <article class="card" id= "card">
                    <div class="cardImage" id="card-1"> </div>
                    <h2> ${characters.name}</h2>
                    <p> ${characters.house}</p>
                  </article>
                  `
        });
       
        contenidoPersonajes.innerHTML= tarjetas;
        
      };
      
crearTarjetas(data.characters);//llamar a la función
*/

//ORDENAR PERSONAJES
/*
//let charac =["a", "d", "b"] 
//let organizarPersonaje = charac.sort();
//console.log(organizarPersonaje) regresa abd 
  
//export funcion que define personajes
const characters = (data) => {
    return(data.characters);
  };
console.log(characters);

//export funcion que ordena
const ordenarDesc = (characters) => {
  const descendente = characters.sort(function(a, b) {
    //return (a-b)
    return (b.name - a.name)
    //return parseFloat(b.name) - parseFloat(a.name);
    //return a.nombre.localeCompare(b.nombre); 
    //return((a.name < b.name)? -1: ((a.name > b.name)? 1: 0));
    })
    return descendente;
  };

//capturar opciones

const ordenAscendente = document.getElementById('asc'); //capturando opcion ascendente
const ordenDescendente = document.getElementById('desc'); //capturando opcion descendente

// escoger opcion z-a 
ordenDescendente.addEventListener('selected', ordenarDesc () {
  
})

/*document.getElementById("enviarOrdenar").onclick = 
function (){
  //if(document.getElementById(("desc").selected)) { 
    if(document.querySelector('option[value="descendente"]:selected')){ 
    return ordenDesc(characters.name);
  }
};
console.log(ordenDesc(characters.name));*/



  /*orderAsc.addEventListener("click", () => {
    list.innerHTML = '';
    listElements(filterAsc(characters.name));
});*/

/*orderDesc.addEventListener("click", () => {
  contenidoPersonajes.innerHTML = '';
  listElements(filterDesc(characters.name));
});*/



