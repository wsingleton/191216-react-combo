let creds = {
    username: 'wsingleton',
    password: 'revature'
};

function login(username, password) {

    if (username === 'wsingleton' && password === 'revature') {

        let authUser = {
            ...creds, // we can "spread" properties of one object into another
            firstName: 'Wezley',
            lastName: 'Singleton',
            role: 'Admin'
        };

        return authUser;

    }
}

let user = login(creds.username, creds.password);
console.log(user); 

let credsArray = ['wsingleton', 'revature'];

// We can "spread" array values across the params of a function
user = login(...credsArray);
console.log(user);

function sum(a, b, ...more) {
    return more.reduce((x, y) => {
        return x + y;
    } , a + b)
}

let result = sum(1, 2, 3, 4, 5);
console.log(result);