import { LoginComponent } from "../components/login.component.js";
import { RegisterComponent } from "../components/register.component.js";
import { Route } from "./route.js";

export class Router {

    routes: Route[] = [];

    constructor() {}

    addRoutes = (rts: Route[]) => {
        rts.forEach(route => this.routes.push(route));
    }

    navigate = (path: string) => {
        let route = this.routes.filter(r => r.path === path).pop();
        return route && route.component.render();
    }

}