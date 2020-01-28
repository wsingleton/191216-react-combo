let creds = {
username: 'Spacemvn',
password: 'nevergonnascore'

};

function login(username, password){
    if(username === 'Spacemvn' && password === 'nevergonnascore'){

        let authUser = {
            ...creds,
            firstName: 'Ervin',
            lastName: 'Stewart',
            role: 'Admin'
        };
        return authUser;
    }
}

let user = login(creds.username, creds.password);
console.log(user)