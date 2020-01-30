import {Credentials} from '../models/credentials.js';
import {API_URL} from '../main.js';

export class UserService{

    constructor(){
        console.log('UserService intialized');
    }
    authenticate = async (creds: Credentials) =>{
    let resp = await fetch(`${API_URL}/auth`, {
    method: 'POST',
    body: JSON.stringify({...creds})

});
return await resp.json();
    }

}