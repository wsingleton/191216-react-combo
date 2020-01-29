


export async function getChuckNorrisJoke() { // async returns a promise
    const response = await fetch('http://api.icndb.com/jokes/random?exclude=[nerdy,explicit]');
    const body = await response.json();
    console.log(body);
    return body.value.joke;
}