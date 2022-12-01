
//FUNCION FILTER
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
