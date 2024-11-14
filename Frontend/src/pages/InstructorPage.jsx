import React, { useState } from 'react';
import { setAvailability as setInstructorAvailability } from '../services/instructorService';

const InstructorPage = () => {
  const [instructorId, setInstructorId] = useState('');
  const [availability, setAvailability] = useState({});
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setInstructorAvailability(instructorId, availability);
      alert('Availability set successfully!');
    } catch (error) {
      console.error(error);
      alert('Error setting availability');
    }
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    setAvailability((prev) => ({
      ...prev,
      [newDate]: [],
    }));
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setTime(newTime);
    setAvailability((prev) => ({
      ...prev,
      [date]: [...(prev[date] || []), newTime],
    }));
  };

  return (
    <div>
      <h1>Instructor Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Instructor ID:</label>
          <input type="text" value={instructorId} onChange={(e) => setInstructorId(e.target.value)} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" value={time} onChange={handleTimeChange} />
        </div>
        <button type="submit">Set Availability</button>
      </form>
    </div>
  );
};

export default InstructorPage;
