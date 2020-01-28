import { Credentials } from '../models/credentials.js';
import { API_URL } from '../main.js';
import { User } from '../models/user.js';

export class UserService {

    constructor() {
        console.log('UserService initialized');
    }

    authenticate = async (creds: Credentials) => {
        console.log('UserService.authenticate() invoked!');
        let resp = await fetch(`${API_URL}/auth`, {
            method: 'POST',
            body: JSON.stringify(creds)
        });
        return await resp.json();
    }

    register = async (user: User) => {
        console.log('UserService.register() invoked!');
        let resp = await fetch(`${API_URL}/users`, {
            method: 'POST',
            body: JSON.stringify(user)
        });
        return await resp.json();
    }
}