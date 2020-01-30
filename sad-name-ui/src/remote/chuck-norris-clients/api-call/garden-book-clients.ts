export const apiLogin = async (username: string, password: string): Promise<string> =>{
    let credentials = {
        username,
        password
    }; try {

        const response = await fetch('http://3.81.82.21:2020/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(credentials),
            headers:{
    
                'Content-type': 'application/json'
    
            }
            
        })
    
        if(response.status===200){
            const body = await response.json();
            console.log(body)
            return 'successful login'
        } else if (response.status ===401){
            return 'incorrect'
        } else {
            return ''
        }

    } catch(e){
        return 'bad login'
    }
   
   
}