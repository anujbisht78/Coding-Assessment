import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the /users endpoint on your Node.js server
    fetch('/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}, <strong>Age:</strong> {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
