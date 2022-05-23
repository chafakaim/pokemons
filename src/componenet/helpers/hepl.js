export default class Helpserver{

  static getPokemens (){
     return (fetch('http://localhost:3001/pokemons')
      .then(respanse => respanse.json())
      .then(data => data)
      .catch(e=>console.error(e)))
  }
  static getPokemensByid(id){
      return (fetch(`http://localhost:3001/pokemons/${id}`)
      .then(respense=> respense.json())
      .then(data => data)
      .catch(e=> console.error(e)));
  }
  static setPokemonbyId(pokemons){
  let newPokemon=pokemons;

    return (fetch(`http://localhost:3001/pokemons/${pokemons.id}`,{
     method:'Put',
     body:newPokemon,
     headers:{'content-types':'application-json'}
   }))

  }
}