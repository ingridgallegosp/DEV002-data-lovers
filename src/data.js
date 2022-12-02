
//FUNCION ORDENAR
//let charac =["a", "d", "b"] 
//let organizarPersonaje = charac.sort();
//console.log(organizarPersonaje) regresa abd 

export const ordenarAsc = (array) => {
  const ascendente = array.sort(function (a, b) {
    return a.name.localeCompare(b.name); //local compare compara str
  })
  return ascendente;
};
//console.log(ordenarAsc(charactersHP));

export const ordenarDesc = (array) => {
  const descendente = array.sort(function (a, b) {
    return b.name.localeCompare(a.name);
  });
  return descendente;
};
//console.log(ordenarDesc(charactersHP));

//FUNCION FILTRAR
/*const filtrarGryffindor = charactersHP.filter(
  function (charactersHP) {
  return (charactersHP.house == "Gryffindor");
}); */

//export const filtrarG = charactersHP.filter(charactersHP => charactersHP.house == "Gryffindor");
//console.log(filtrarG);

export const filtrarGryffindor = (array)  => array.filter((element) => element.house == "Gryffindor");
//export const filtrarGryffindor = (array,element)  => array.filter((elem) => elem.house == "Gryffindor");
export const filtrarSlytherin = (array)  => array.filter((element) => element.house == "Slytherin");
export const filtrarHufflepuff = (array)  => array.filter((element) => element.house == "Hufflepuff");
export const filtrarRavenclaw = (array)  => array.filter((element) => element.house == "Ravenclaw");

export const porcentajePersonajesGryffindor = (array) => {
  let personajesTotal = array.length;
  let personajesCasa = filtrarGryffindor(array).length;
  let calculoPorcentaje = personajesCasa / personajesTotal * 100;
  return `Un ${calculoPorcentaje}% de los personajes pertenecen a esta casa`
}



