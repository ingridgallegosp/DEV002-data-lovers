//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);


// IR A PAGINA DE BIENVENIDA
document.getElementById('empezar').onclick = 
  function (){
      let nombrex = document.getElementById('nombreInvitado').value;
    console.log (nombrex)

      if(!nombrex) {
      alert( "No olvides ingresar tu nombre") ;
        } else {
         window.location.href='indexInicio.html' ; 
        } ;
};