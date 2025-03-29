import React from "react";
import "../App.css";

const EnrolledCourse = ({ course, onDrop }) => {
  return (
    <div className="enrolled-course">
      <h3>{course.name}</h3>
      <p>Credit Hours: {course.creditHours}</p>
      <button onClick={() => onDrop(course.id)}>Drop Course</button>
    </div>
  );
};

export default EnrolledCourse;