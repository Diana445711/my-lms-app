import React, { useState } from "react";
import "../App.css";

function CourseItem({ course, onEnroll }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div 
      className="boxes"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <img src={course.image} alt={course.name} />
      <h3>{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      {showDescription && <p>{course.description}</p>}
      <button onClick={() => onEnroll(course)}>Enroll Now</button>
    </div>
  );
}

export default CourseItem;
