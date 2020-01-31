import { WINDOW_LOC } from "../main.js";
import { User } from "../models/user.js";
import { state } from "../util/state.js";

export class DashboardComponent {

    template = `<h1>Welcome, <span id="welcome-username"></span>`;

    constructor() {
        console.log('DashboardComponent initialized!');
    }

    render = () => {
        console.log('DashboardComponent.render() invoked!');

        let url = `${WINDOW_LOC}dashboard`;
        window.history.pushState({key: url}, 'My Dashboard', url);

        let user = state.currentUser;
        document.getElementById('root').innerHTML = this.template;
        document.getElementById('welcome-username').innerText = user.username;
    }

}