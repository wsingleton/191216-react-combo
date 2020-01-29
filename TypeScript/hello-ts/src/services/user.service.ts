import { Credentials } from "../models/credentials.js";
import { API_URL } from "../main.js";

export class userservice {

    constructor() {
        console.log('user service initialized');

    }
    authenticate = async (creds: Credentials) => {
        console.log('UserService.authenticate() invoked');
        // fetch(`${API_URL}/auth`, {
        //     method: 'POST',
        //     body: JSON.stringify({...creds})
        // }).then(resp => {
        //     resp.json().then(data => {
        //         return data;
        //     })
        // })
        
        // await async
        let resp = await fetch(`${API_URL}/auth`, {
            method: 'POST',
            body: JSON.stringify({...creds})
        })
        return await resp.json();
    }
}