export const apiLogin = async (username:string, password:string):Promise<object> => {

    let credentials = {
        username,
        password
    }
    try {
    const response = await fetch('http://3.81.82.21:2020/login', {
        method:'POST',
        credentials:'include',
        body: JSON.stringify(credentials),
        headers:{
            'Content-Type':'application/json'
        }
        });
        if(response.status === 200) {
            const body = await response.json();
            console.log(body);
            return {
                body,
                loginMessage: 'SUCCESSFUL LOGIN'
            };
        }
        else if(response.status === 401) {
            return {
                loginMessage:'invalid credentials'
            };
        }
        else {
            return {
                loginMessage: 'something went wrong'
            };
        }
    } catch (e) { 
        console.log(e); 
        return {
            loginMessage: 'something went wrong'
        };
    }
}