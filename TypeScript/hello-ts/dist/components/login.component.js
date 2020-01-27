export class LoginComponent {
    constructor() {
        this.template = `
    <div class="login-form">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="username-cred" class="sr-only">Username</label>
        <input type="text" id="username-cred" class="form-control" placeholder="Username" required autofocus>
        <label for="password-cred" class="sr-only">Password</label>
        <input type="password" id="password-cred" class="form-control" placeholder="Password" required>
        <button class="btn btn-lg btn-primary btn-block" id="submit-creds">Sign in</button>
        <br>
        <div hidden class="alert alert-danger text-center" id="alert-msg" role="alert">
            Invalid Credentials!
        </div>
        <p class="mt-5 mb-3 text-muted">&copy; Revature 2017-2019</p>
    </div>
    `;
        this.render = () => {
            console.log('LoginComponent.render() invoked');
            document.getElementById('root').innerHTML = this.template;
            document.getElementById('submit-creds').addEventListener('click', this.login);
        };
        this.login = () => {
            let username = document.getElementById('username-cred').value;
            let password = document.getElementById('password-cred').value;
            console.log(username, password);
        };
        console.log('LoginComponent initialized');
    }
}
