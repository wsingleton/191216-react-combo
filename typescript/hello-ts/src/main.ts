import { LoginComponent } from "./components/login.component.js"
import { UserService } from "./services/user.service.js";
import { AppModule } from "./util/app-module.js";

export const API_URL = 'http://quizzard-env.2k7kcp229r.us-east-1.elasticbeanstalk.com';
export const WINDOW_LOC = window.location.toString();

window.onload = () => {
    const app = new AppModule();
    app.components['login'].render();
}