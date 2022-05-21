export default class Helpserver{

  static getPokemens (){
     return fetch('http://localhost:3001/pokemons')
      .then(respanse => respanse.json())
      .then(data => data)
      .catch(e=>console.error(e))
  }
  static getPokemensByid(id){
      return fetch(`http://localhost:3001/pokemons/${id}`)
      .then(respense=> respense.json())
      .then(data => data)
      .catch(e=> console.error(e));
  }
}