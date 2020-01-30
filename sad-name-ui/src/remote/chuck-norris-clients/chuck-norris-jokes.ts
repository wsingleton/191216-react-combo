// we are going to get a random chuck norris joke

export async function getChuckNorrisJoke(){
    const response = await fetch('http://api.icndb.com/jokes/random?limitto={nerdy}');
    const body = await response.json()
    console.log(body);
    return body.value.joke
}