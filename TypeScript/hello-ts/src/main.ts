import { LoginComponent } from "./components/login.component.js"
import { userservice } from "./services/user.service.js";
export const API_URL = "http://quizzard-env.2k7kcp229r.us-east-1.elasticbeanstalk.com";
/* enum Colors {
    RED = 0,
    GREEN = 1,
    BLUE = 2
} */

/* interface Colors {
    x: number,
    y: number
} */

window.onload = () => {
    const USER_SERVICE = new userservice();
    const LOGIN_COMPONENT = new LoginComponent(USER_SERVICE);
    LOGIN_COMPONENT.render();
}
