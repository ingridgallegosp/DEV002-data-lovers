//import { example, anotherExample } from '../src/data.js';
import { ordenarAsc, filtrarGryffindor } from '../src/data.js';
//ordenarDesc,  filtrarSlytherin, filtrarHufflepuff, filtrarRavenclaw

//TEST ORDEN ASC sort()
describe('Pruebas para funcion ordenarAsc', () => {
  it('La funcion ordenarAsc debe retornar un nuevo array con los nombres ordenados ascendentemente', () => {
    const array = [{'name':'Harry'},{'name': "Angus"},{'name': "Ron"}];
    const result = ordenarAsc(array)
    
    expect(result).toEqual([{'name':'Angus'}, {'name':'Harry'}, {'name':"Ron"}])
  })
});

//TEST FILTRAR Gryffindor filter()
describe('Pruebas para funcion filtrarGryffindor', () => {
  it('La funcion filtrarGryffindor debe retornar un nuevo array con los personajes que pertenecen a Gryffindor ', () => {
    const array = [{'name':'Harry', 'house':'Gryffindor'},{'name': "Angus", 'house':'' },{'name': "Malcolm", 'house':'Slytherin'}];
    const result = filtrarGryffindor(array)
    
    expect(result).toEqual([{'name':'Harry', 'house':'Gryffindor'}])
  })
});

