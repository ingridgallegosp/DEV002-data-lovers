//import { example, anotherExample } from '../src/data.js';
import { ordenarAsc } from '../src/data.js';
//ordenarDesc, filtrarGryffindor, filtrarSlytherin, filtrarHufflepuff, filtrarRavenclaw

describe('Pruebas para funcion ordenarAsc', () => {
  
  it('La funcion ordenarAsc debe retornar un nuevo array con los nombres ordenados ascendentemente'), () => {
    const arreglo = ["Ana", "Claudia", "Melanie", "Ingrid", "Cecilia"];
    const elemento = nombre
    const orden = ordenarAsc(arreglo,elemento)
    
    expect(orden).toEqual(["Ana", "Cecilia", "Claudia", "Ingrid", "Melanie"])
  }
});

/*describe('Pruebas para funcion filtrar', () => {
  test('La funcion filtrar debe retornar un nuevo array qu solo incluya Gryffindor'), () => {
    const arreglo = ["Ana", "Claudia", "Melanie", "Ingrid", "Cecilia"];
    
  }
}); */
  

   



/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
