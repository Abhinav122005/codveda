import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

const API_URL = "http://localhost:3000/users";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    setLoading(true);

    const response = await fetch(API_URL);
    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  const addUser = async () => {
    if (!name.trim()) return;

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    setName("");
    getUsers();
  };

  const deleteUser = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <h1>User Management System</h1>

      <UserForm
        name={name}
        setName={setName}
        addUser={addUser}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserList
          users={users}
          deleteUser={deleteUser}
        />
      )}
    </div>
  );
}

export default App;