import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

document.getElementById("loginBtn").addEventListener("click", () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (savedUser.email === email && savedUser.pass === pass) {
        alert("Login Successful");
        localStorage.setItem("loggedIn", "true");
        window.location.href = "todos.html";
    } else {
        alert("Wrong Credentials");
    }
});