

export const apiLogin = async (username: string, password: string): Promise<string> => {
    let credentials = {
        username,
        password
    }
    try {
        const response = await fetch('http://3.81.82.21:2020/login', {
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
            return 'successful login'
        } else if(response.status === 401){
            return "Incorrect Username or Password"
        } else {
            return "Something Went Wrong"
        }
    } catch (e) {
        console.log(e);
        return "Something Went Wrong"
    }
}