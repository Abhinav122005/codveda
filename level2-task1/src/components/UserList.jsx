function UserList({ users, deleteUser }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <span>{user.name}</span>

          <button
            className="delete-btn"
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;