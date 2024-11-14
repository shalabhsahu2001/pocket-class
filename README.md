# Booking System

## Project Overview
The Booking System allows instructors to set their availability and students to book available slots with instructors. This project consists of two main parts: the frontend (built with React) and the backend (using Node.js with Firebase Admin SDK).

## Technologies Used
- **Frontend**: React, Vite
- **Backend**: Node.js, Firebase Admin SDK, Express.js
- **Database**: Firestore

## Setup Instructions

### Clone the Repository

git clone https://github.com/yourusername/your-repo.git
cd your-repo
Backend Setup
Navigate to the backend directory:

cd backend
Install dependencies:
npm install
npm start
Frontend Setup
Navigate to the frontend directory:
cd ../frontend
Install dependencies:
npm install
Set up environment variables:

Create a .env file in the root of the frontend directory and add the following:
VITE_API_URL=http://localhost:3000/api
Run the frontend development server:
npm run dev
Development Instructions
Backend Development
API Endpoints:

POST /api/instructors/availability: Set instructor availability.

GET /api/instructors/availability/:instructorId: Get instructor availability.

POST /api/students/book: Book a slot with an instructor.

Frontend Development
Components:

InstructorPage.jsx: Allows instructors to set their availability.

StudentPage.jsx: Allows students to view availability and book slots.

Styles: Add custom styles in StudentPage.css to enhance the UI.

Usage Guide
Instructor Usage
Set Availability:

Navigate to the instructor page.

Enter your instructor ID.

Select the date and time slots.

Click "Set Availability".

Student Usage
View Availability and Book Slot:

Navigate to the student page.

Enter the instructor ID to view availability.

Select a time slot and enter your student ID.

Click "Book Slot" to confirm the booking.
