import React, { useState } from 'react';

export default function AccountPage() {
  const [userData, setUserData] = useState({
    username: 'JohnDoe', // Example data, replace with actual user data
    email: 'john.doe@example.com',
    // Add more user data fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your update user logic here, e.g., submit updated user data to backend
    console.log('User data updated:', userData);
  };

  return (
    <div>
      <h2>Account Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more input fields for additional user data */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
