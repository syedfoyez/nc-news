import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserByUsername } from '../utils/api';

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserByUsername(username)
      .then((user) => setUser(user))
      .catch((error) => console.error('Error fetching user:', error));
  }, [username]);

  return (
    user && (
      <div className="profile">
        <h1>{user.name}</h1>
        <p>Username: {user.username}</p>
        <p>Articles posted by {user.username}</p>
      </div>
    )
  );
};

export default Profile;