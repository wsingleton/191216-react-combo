import { LoginComponent } from "./components/login.component.js"

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
    const LOGIN_COMPONENT = new LoginComponent();
    LOGIN_COMPONENT.render();
}
