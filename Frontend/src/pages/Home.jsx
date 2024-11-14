import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Booking System</h1>
      <div>
        <button onClick={() => navigate('/instructor')}>Enter as Instructor</button>
        <button onClick={() => navigate('/student')}>Enter as Student</button>
      </div>
    </div>
  );
};

export default Home;
