import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Welcome {user?.username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
