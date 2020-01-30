let creds = {
    username: "wsingleton",
    password: "revature"

}

function login(username, password) {
    if (username == 'wsingleton' && password=='revature'){
        let authUser={

            ...creds,
            firstname: 'Wezley',
            lastname: 'Singleton',
            roles: 'Admin'
        }

        return authUser;
    }
}

let user = login(creds.username, creds.password);
console.log(user);

let credsArry= ['wsingleton', 'revature'];

user=login(...credsArry);
console.log(user);

function sum(a, b, ...more){
    return more.reduce((x, y)=>{
        return x + y;
    } , a +b)
}

let result = sum(1, 2, 3, 4, 5);
console.log(result);