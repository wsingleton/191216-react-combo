import { LoginComponent } from "../components/login.component.js";
import { RegisterComponent } from "../components/register.component.js";
import { UserService } from "../services/user.service.js";
import { Router } from "./router.js";
import { Route } from "./route.js";
import { DashboardComponent } from "../components/dashboard.component.js";
export class AppModule {
    constructor() {
        this.components = {};
        this.services = {};
        console.log('AppModule initialized');
        this.services['router'] = new Router();
        this.services['user'] = new UserService();
        this.components['register'] = new RegisterComponent(this.services['user'], this.services['router']);
        this.components['login'] = new LoginComponent(this.services['user'], this.services['router']);
        this.components['dashboard'] = new DashboardComponent();
        let routes = [
            new Route('/login', this.components['login']),
            new Route('/register', this.components['register']),
            new Route('/dashboard', this.components['dashboard'])
        ];
        this.services['router'].addRoutes(routes);
    }
}
