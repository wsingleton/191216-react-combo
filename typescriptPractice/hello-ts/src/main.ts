import { LoginComponent } from "./components/login-component.js"
import { UserService } from "./services/userService.js";


export const API_URL = 'http://quizzard-env.2k7kcp229r.us-east-1.elasticbeanstalk.com';



window.onload = () =>{
    
    const LOGIN_COMPONENT = new LoginComponent(new UserService);
    LOGIN_COMPONENT.render();
}