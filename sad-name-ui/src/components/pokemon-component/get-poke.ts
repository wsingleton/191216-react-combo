export const getMultiplePokemon = async (limit:number, offset:number):Promise<Object> => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
    let body = await response.json();
    return body
}

export const getPokemonByUrl = async (url:string) =>{
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
    let body = await response.json();
    return body
}