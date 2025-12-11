export function displayTodos(data) {
    let container = document.getElementById("todos-container");
    container.innerHTML = "";

    data.forEach(todo => {
        let div = document.createElement("div");
        div.innerHTML = `
            <p><b>${todo.title}</b></p>
            <p>Status: ${todo.completed}</p>
        `;
        container.append(div);
    });
}