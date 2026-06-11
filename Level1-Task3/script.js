const API_URL = "http://localhost:3000/users";

async function getUsers() {
    const response = await fetch(API_URL);
    const users = await response.json();

    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.forEach(user => {
        const li = document.createElement("li");

        li.innerHTML = `
    <span>${user.name}</span>
    <button class="delete-btn" onclick="deleteUser(${user.id})">
        Delete
    </button>
`;

        userList.appendChild(li);
    });
}

async function addUser() {
    const name = document.getElementById("name").value;

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
    });

    document.getElementById("name").value = "";

    getUsers();
}

async function deleteUser(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    getUsers();
}

getUsers();