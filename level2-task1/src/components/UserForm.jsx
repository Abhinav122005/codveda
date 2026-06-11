function UserForm({ name, setName, addUser }) {
  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button className="add-btn" onClick={addUser}>
  Add User
</button>
    </div>
  );
}

export default UserForm;