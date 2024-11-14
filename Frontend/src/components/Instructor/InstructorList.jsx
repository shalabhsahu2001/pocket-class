import React, { useEffect, useState } from 'react';
import { getAvailability } from '../../services/instructorService';

const InstructorList = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Fetch instructors availability
    const fetchInstructors = async () => {
      try {
        const data = await getAvailability('instructor_123'); // Example ID
        setInstructors([data]); // Adjust to fit your actual data structure
      } catch (error) {
        console.error(error);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <div>
      <h2>Instructors</h2>
      <ul>
        {instructors.map((instructor, index) => (
          <li key={index}>{JSON.stringify(instructor)}</li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorList;
