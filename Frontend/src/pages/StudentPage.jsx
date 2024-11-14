import React, { useState } from 'react';
import { getAvailability } from '../services/instructorService';
import { bookSlot } from '../services/studentService';

const StudentPage = () => {
  const [instructorId, setInstructorId] = useState('');
  const [availableInstructors, setAvailableInstructors] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleInstructorChange = async (e) => {
    const selectedInstructorId = e.target.value;
    setInstructorId(selectedInstructorId);
    try {
      const data = await getAvailability(selectedInstructorId); // Fetch availability by instructor ID
      setAvailableInstructors([data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      await bookSlot(studentId, instructorId, timeSlot);
      alert('Booking successful!');
    } catch (error) {
      console.error(error);
      alert('Error booking slot');
    }
  };

  return (
    <div>
      <h1>Student Page</h1>
      <div>
        <label>Enter Instructor ID:</label>
        <input type="text" value={instructorId} onChange={handleInstructorChange} />
      </div>
      <div>
        <h2>Available Instructors</h2>
        <ul>
          {availableInstructors.map((instructor, index) => (
            <li key={index}>{JSON.stringify(instructor)}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleBooking}>
        <div>
          <label>Student ID:</label>
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </div>
        <div>
          <label>Time Slot:</label>
          <input type="datetime-local" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} />
        </div>
        <button type="submit">Book Slot</button>
      </form>
    </div>
  );
};

export default StudentPage;
