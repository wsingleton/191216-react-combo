import React, { SyntheticEvent } from 'react';

export const apiLogin = async (username:string, password:string):Promise<string> =>{
    let credentials = {
        username,
        password
    }
        const response = await fetch('http://3.81.82.21:2020/login', {
            method:'POST'
        })

}