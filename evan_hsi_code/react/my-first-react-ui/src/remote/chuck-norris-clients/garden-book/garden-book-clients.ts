export const apiLogin = async (username:string, password:string):Promise<string> => {

    let credentials = {
        username,
        password
    }
    const response = await fetch('http://3.81.82.21:2020/login', {
        method:'POST',
        credentials:'include',
        body: JSON.stringify(credentials)
        });
        const body = await response.json();
        console.log(body);
        return'';
    }