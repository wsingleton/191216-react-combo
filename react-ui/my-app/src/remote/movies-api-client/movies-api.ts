// import axios from 'axios';
export async function getMovie():Promise<string>{
    const titleQuery = 'batman'
    const response = await fetch(`http://www.omdbapi.com/?apikey=45c8ca64&t=${titleQuery}`);
 

    const body = await response.json()
    console.log(body);
    return body.Poster
}

// export async function apiSearch():Promise<string>{
// let credentials ={
//    search

// }
// try{
//     const response =await fetch(`http://www.omdbapi.com/?apikey=45c8ca64&t=${search}`,{
//         method: 'GET',
//         credentials: 'include',
//         body: JSON.stringify(credentials),
//         headers: {
//             'Content-Type': 'application/json'
//         }

//     })if (response.status === 200) {
//                     const body = await response.json()
//                     console.log(body)
//                     return {
//                         body,
//                         loginMessage: 'successful login'
//                     }
//                 } else if (response.status === 401) {
//                     return {
//                         loginMessage: "Incorrect Username or Password",
//                         body: null
//                     }
//                 } else {
//                     return {
//                         loginMessage: "Something Went Wrong",
//                         body: null
//                     }
//                 }
//             } catch (e) {
//                 console.log(e);
//                 return {
//                     loginMessage: "Something Went Wrong",
        
//                 }
//             }
//         }
        
export const apiSearch = async (search: string): Promise<object> => {
    let credentials = {
        search
    }
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=45c8ca64&t=${search}`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            const body = await response.json()
            console.log(body)
            return {
                body,
                loginMessage: 'successful login'
            }
        } else if (response.status === 401) {
            return {
                loginMessage: "Incorrect Username or Password",
                body: null
            }
        } else {
            return {
                loginMessage: "Something Went Wrong",
                body: null
            }
        }
    } catch (e) {
        console.log(e);
        return {
            loginMessage: "Something Went Wrong",

        }
    }
}

