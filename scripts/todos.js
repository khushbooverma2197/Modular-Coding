import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";
import { displayTodos } from "./displayTodos.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

// check login
let isLogged = localStorage.getItem("loggedIn");

if (!isLogged) {
    alert("Please Login First");
    window.location.href = "login.html";
}

// Fetch Todos
async function getTodos() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();
    displayTodos(data);
}

getTodos();