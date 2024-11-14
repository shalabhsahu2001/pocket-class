import React, { useState } from 'react';
import { bookSlot } from '../../services/studentService';

const BookingForm = () => {
  const [studentId, setStudentId] = useState('');
  const [instructorId, setInstructorId] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const data = await bookSlot(studentId, instructorId, timeSlot);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleBooking}>
      <div>
        <label>Student ID:</label>
        <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
      </div>
      <div>
        <label>Instructor ID:</label>
        <input type="text" value={instructorId} onChange={(e) => setInstructorId(e.target.value)} />
      </div>
      <div>
        <label>Time Slot:</label>
        <input type="datetime-local" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} />
      </div>
      <button type="submit">Book Slot</button>
    </form>
  );
};

export default BookingForm;
