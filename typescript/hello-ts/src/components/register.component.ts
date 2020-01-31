import { UserService } from "../services/user.service.js";
import { View } from "./view.js";
import { User } from "../models/user.js";
import { Router } from "../util/router.js";
import { WINDOW_LOC } from "../main.js";

export class RegisterComponent implements View {

    template = `
    <div class="register-form">
        <h1 class="h3 mb-3 font-weight-normal">Register for a </h1>
        <label for="first-name" class="sr-only">First Name</label>
        <input type="text" id="first-name" class="form-control" placeholder="First Name" autofocus>
        <br/>
        <label for="last-name" class="sr-only">Last Name</label>
        <input type="text" id="last-name" class="form-control" placeholder="Last Name">
        <br/>
        <label for="username" class="sr-only">Username</label>
        <input type="text" id="username" class="form-control" placeholder="Username">
        <br/>
        <label for="password" class="sr-only">Password</label>
        <input type="password" id="password" class="form-control" placeholder="Password">
        <br/>
        <button class="btn btn-lg btn-primary btn-block" id="register">Register</button>
        <br>
        <div hidden class="alert alert-danger text-center" id="alert-msg" role="alert"></div>
        <p class="mt-5 mb-3 text-muted">&copy; Revature 2017-2019</p>
    </div>
    `;

    form: {};

    constructor(private userService: UserService, private router: Router) {
        console.log('RegisterComponent initialized!');
    }

    render = () => {
        console.log('RegisterComponent.render() invoked!');

        let url = `${WINDOW_LOC}register`;
        window.history.pushState({key: url}, 'Register for Quizzard!', url);

        document.getElementById('root').innerHTML = this.template;
        document.getElementById('register').addEventListener('click', this.register);
    }

    register = async (e: Event) => {
        let firstName = (<HTMLInputElement>document.getElementById('first-name')).value;
        let lastName = (<HTMLInputElement>document.getElementById('last-name')).value;
        let username = (<HTMLInputElement>document.getElementById('username')).value;
        let password = (<HTMLInputElement>document.getElementById('password')).value;
        if (!this.isFormValid()) e.preventDefault();
        let user = new User(0, 'Basic User', username, password, firstName, lastName);
        user = await this.userService.register(user);
        user && this.router.navigate('/dashboard');
    }



    private isFormValid = (): boolean => {
        return (
            this.form['first-name'] && this.form['last-name'] 
            && this.form['username'] && this.form['password']
        );
    }
}