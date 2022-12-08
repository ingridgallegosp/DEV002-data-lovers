import data from './data/harrypotter/harry.js';
import { ordenarAsc, ordenarDesc, filtrarGryffindor, filtrarSlytherin, filtrarHufflepuff, filtrarRavenclaw, porcentajePersonajesGryffindor, porcentajePersonajesHufflepuff, porcentajePersonajesRavenclaw, porcentajePersonajesSlytherin } from './data.js';

const contenidoHome = document.getElementById('contenidoHome'); //capturando contenidoHome
const contenidoPersonajes = document.getElementById('contenidoPersonajes'); //capturando contenidoPersonajes
const contenidoTarjetas = document.getElementById("contenidoTarjetas");
const contenidoCasas = document.getElementById('contenidoCasas'); //capturando contenido casas
const contenidoTarjetasCasas = document.getElementById('tarjetas-casas'); //capturando contenido casas

const homeBtn = document.getElementById('homeBtn'); //capturando homeBtn
const salidaBtn = document.getElementById('salidaBtn'); //capturando salidaBtn
const personajesBtn = document.getElementById('personajesBtn'); //capturando personajesBtn
const casasBtn = document.getElementById('casasBtn'); //capturando casasBtn
const porcInput = document.getElementById("porcentaje"); //capturando input porcentaje
const subMenuCasas = document.getElementById("submenuCasas");
const menuCasas = document.getElementById("menuCasas");
const escudoGryffindor = document.getElementById("escudoGryffindor");
const escudoSlytherin = document.getElementById("escudoSlytherin");
const escudoHufflepuff = document.getElementById("escudoHufflepuff");
const escudoRavenclaw = document.getElementById("escudoRavenclaw");


//DEFINIR PERSONAJES
let charactersHP = [];
charactersHP = data.characters;
//console.log(charactersHP);//

//Seleccion para ordenar alfabeticamente
const select = document.querySelector("#orden") //capturando opcion ascendente

//MUESTRA SALUDO BIENVENIDA EN HOME
window.addEventListener("load", function () {
  let nombreObtenido = localStorage.getItem("nombreM");//Obtener valor almacenado local Storage 
  //console.log(nombreObtenido)
  let nombreBienv = document.getElementById("mensaje-bienvenida");//Mostrar valor almacenado  
  nombreBienv.innerHTML = "Bienvenida " + nombreObtenido;
});
//REGRESA A PAG INICIO
salidaBtn.addEventListener('click', function () {
  window.location.href = "index.html";
});

//Evento click de homeBtn despliega contenidoHome
homeBtn.addEventListener('click', function () {
  contenidoHome.style.display = "flex";
  contenidoPersonajes.style.display = "none";
  contenidoCasas.style.display = "none";
  subMenuCasas.style.display = "none";
});

//Evento click de personajesBtn despliega contendioPersonajes 
personajesBtn.addEventListener('click', function () {
  contenidoPersonajes.style.display = "block";
  contenidoHome.style.display = "none";
  contenidoCasas.style.display = "none";
  contenidoTarjetas.innerHTML = crearTarjetas(ordenarAsc(charactersHP));
  //select.selectedIndex == 0;
  subMenuCasas.style.display = "none";
});

//Evento click de casasBtn despliega contendioCasas 
casasBtn.addEventListener('click', function () {
  contenidoCasas.style.display = "block";
  contenidoHome.style.display = "none";
  contenidoPersonajes.style.display = "none";
  subMenuCasas.style.display = "none"

  //mostrar botones flex////////////////////
});

// PINTAR TARJETAS
function crearTarjetas(element) {
  //console.log(element);
  let tarjetas = []; //vamos a ir inyectando los valores de abajo
  element.forEach(characters => { //template literaios
    tarjetas += ` 
    <div class="flip-container">
      <div class="card" id= ${characters.id}>
        <div class="front">
          <h4 class="nombre" id="nombreFront">${characters.name}</h4>
        </div>
        <div class="back">
          <div class= "texto-tarjeta">
            <h3 class="nombre" id="nombreBack">${characters.name}</h3>
            <li class="casa"> Casa: ${formatear(characters.house)}</li>
            <li class="especie">Especie: ${characters.species}</li>
            <li class="ascendencia">Ascendencia: ${formatear(characters.ancestry)}</li>
            <li class="genero">Género: ${characters.gender}</li>
            <li class="fecha-nacimiento">Nacimiento: ${formatear(characters.birth)}</li>
            <li class="fecha-muerte">Muerte: ${formatear(characters.death)}</li>
            <li class="libros">Libros en los que aparece: ${characters.books_featured_in}</li>
          </div>
        </div>
      </div>
    </div>
              
              `
    /*<div class="tarjeta" id= ${characters.id}>
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
    </div>*/
  });
  return tarjetas
}

function formatear(element) {
  if (!element) {
    return "No disponible"
  }
  return element

}

//ORDENAR PERSONAJES



//escoger opcion a-z y z-a 
//console.log(select);

//Evento change llama a la funcion segun indice de seleccion
document.getElementById("orden").addEventListener('change', function () {
  let indice = select.selectedIndex;
  //console.log(indice)
  if (indice == 0) {
    contenidoTarjetas.innerHTML = ""
    contenidoTarjetas.innerHTML = crearTarjetas(ordenarAsc(charactersHP));
    //console.log(crearTarjetas(ordenarAsc(charactersHP)))
  }
  else if (indice == 1) {
    contenidoTarjetas.innerHTML = ""
    contenidoTarjetas.innerHTML = crearTarjetas(ordenarDesc(charactersHP))
    //console.log(crearTarjetas(ordenarDesc(charactersHP)))
  }
});

//FILTRAR PERSONAJES por casas 

document.getElementById("logoGryffindor").addEventListener('click', function () {
  contenidoTarjetasCasas.innerHTML = ""
  contenidoTarjetasCasas.innerHTML = crearTarjetas(filtrarGryffindor(charactersHP));
  porcInput.innerHTML = porcentajePersonajesGryffindor(charactersHP);
  subMenuCasas.style.display = "flex";
  menuCasas.style.display = "none";
  escudoGryffindor.style.display = "flex";
  escudoSlytherin.style.display = "none";
  escudoHufflepuff.style.display = "none";
  escudoRavenclaw.style.display = "none";

});
document.getElementById("logoSlytherin").addEventListener('click', function () {
  contenidoTarjetasCasas.innerHTML = ""
  contenidoTarjetasCasas.innerHTML = crearTarjetas(filtrarSlytherin(charactersHP))
  porcInput.innerHTML = porcentajePersonajesSlytherin(charactersHP);
  subMenuCasas.style.display = "flex";
  menuCasas.style.display = "none";
  escudoSlytherin.style.display = "flex";
  escudoHufflepuff.style.display = "none";
  escudoRavenclaw.style.display = "none";
  escudoGryffindor.style.display = "none";
});
document.getElementById("logoHufflepuff").addEventListener('click', function () {
  contenidoTarjetasCasas.innerHTML = ""
  contenidoTarjetasCasas.innerHTML = crearTarjetas(filtrarHufflepuff(charactersHP))
  porcInput.innerHTML = porcentajePersonajesHufflepuff(charactersHP);
  subMenuCasas.style.display = "flex";
  menuCasas.style.display = "none";
  escudoHufflepuff.style.display = "flex";
  escudoRavenclaw.style.display = "none";
  escudoGryffindor.style.display = "none";
  escudoSlytherin.style.display = "none";
});
document.getElementById("logoRavenclaw").addEventListener('click', function () {
  contenidoTarjetasCasas.innerHTML = ""
  contenidoTarjetasCasas.innerHTML = crearTarjetas(filtrarRavenclaw(charactersHP))
  porcInput.innerHTML = porcentajePersonajesHufflepuff(charactersHP);
  subMenuCasas.style.display = "flex";
  menuCasas.style.display = "none";
  escudoRavenclaw.style.display = "flex"
  escudoGryffindor.style.display = "none";
  escudoSlytherin.style.display = "none";
  escudoHufflepuff.style.display = "none";
});


// menus
document.getElementById("menuGryffindor").addEventListener('click', function () {
  contenidoTarjetasCasas.innerHTML = ""
  contenidoTarjetasCasas.innerHTML = crearTarjetas(filtrarGryffindor(charactersHP));
  porcInput.innerHTML = porcentajePersonajesGryffindor(charactersHP);
  escudoGryffindor.style.display = "flex";
  escudoSlytherin.style.display = "none";
  escudoHufflepuff.style.display = "none";
  escudoRavenclaw.style.display = "none";
});
document.getElementById("menuSlytherin").addEventListener('click', function () {
  contenidoTarjetasCasas.innerHTML = ""
  contenidoTarjetasCasas.innerHTML = crearTarjetas(filtrarSlytherin(charactersHP))
  porcInput.innerHTML = porcentajePersonajesSlytherin(charactersHP);
  escudoSlytherin.style.display = "flex";
  escudoHufflepuff.style.display = "none";
  escudoRavenclaw.style.display = "none";
  escudoGryffindor.style.display = "none";
});
document.getElementById("menuHufflepuff").addEventListener('click', function () {
  contenidoTarjetasCasas.innerHTML = ""
  contenidoTarjetasCasas.innerHTML = crearTarjetas(filtrarHufflepuff(charactersHP))
  porcInput.innerHTML = porcentajePersonajesHufflepuff(charactersHP);
  escudoHufflepuff.style.display = "flex";
  escudoRavenclaw.style.display = "none";
  escudoGryffindor.style.display = "none";
  escudoSlytherin.style.display = "none";
});
document.getElementById("menuRavenclaw").addEventListener('click', function () {
  contenidoTarjetasCasas.innerHTML = ""
  contenidoTarjetasCasas.innerHTML = crearTarjetas(filtrarRavenclaw(charactersHP))
  porcInput.innerHTML = porcentajePersonajesRavenclaw(charactersHP);
  escudoRavenclaw.style.display = "flex"
  escudoGryffindor.style.display = "none";
  escudoSlytherin.style.display = "none";
  escudoHufflepuff.style.display = "none";
});

//MOSTRAR PORCENTAJE DE PERSONAJES POR CASA
//porcentajePersonajesGryffindor(charactersHP);