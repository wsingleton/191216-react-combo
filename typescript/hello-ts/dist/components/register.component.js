var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from "../models/user.js";
import { WINDOW_LOC } from "../main.js";
export class RegisterComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.template = `
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
        this.render = () => {
            console.log('RegisterComponent.render() invoked!');
            let url = `${WINDOW_LOC}register`;
            window.history.pushState({ key: url }, 'Register for Quizzard!', url);
            document.getElementById('root').innerHTML = this.template;
            document.getElementById('register').addEventListener('click', this.register);
        };
        this.register = (e) => __awaiter(this, void 0, void 0, function* () {
            let firstName = document.getElementById('first-name').value;
            let lastName = document.getElementById('last-name').value;
            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;
            if (!this.isFormValid())
                e.preventDefault();
            let user = new User(0, 'Basic User', username, password, firstName, lastName);
            user = yield this.userService.register(user);
            user && this.router.navigate('/dashboard');
        });
        this.isFormValid = () => {
            return (this.form['first-name'] && this.form['last-name']
                && this.form['username'] && this.form['password']);
        };
        console.log('RegisterComponent initialized!');
    }
}
