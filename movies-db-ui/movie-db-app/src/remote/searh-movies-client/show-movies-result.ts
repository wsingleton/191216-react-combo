export async function getSearchResult(event):Promise<string>{
   event.preventDefault();
    const response = await fetch('http://www.omdbapi.com/?apikey=45c8ca64&s=${this.state.search}');
    //everything after the await turns into a callback function that runs once the promise is resolved
    const body = await response.json()
    console.log(body);
    return body.title
}