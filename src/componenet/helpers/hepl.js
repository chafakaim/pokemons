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
  let newPokemon=JSON.stringify(pokemons);
    return (fetch(`http://localhost:3001/pokemons/${pokemons.id}`,{
     method:'Put',
     body:newPokemon,
     headers:{'content-type':'application/json'}
   }).then(respanse => respanse.json()).then(e => e).catch(error => console.error(error)))

  }
  static insertPokemon(pokemon){
    let newPokemon=JSON.stringify(pokemon);

   return (fetch('http://localhost:3001/pokemons',{
      method:'POST',
      body:newPokemon,
      headers:{'content-type':'application/json'}
    }).then(respanse => respanse.json).then(e => e).catch(e=> console.error(e)));

  }
}