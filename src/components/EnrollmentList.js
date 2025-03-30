
import React, { useEffect } from "react";
import "../App.css";

const EnrollmentList = ({ enrolledCourses, setEnrolledCourses }) => {
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("enrollments")) || [];
    setEnrolledCourses(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("enrollments", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const handleDrop = (courseId) => {
    const updated = enrolledCourses.filter((course) => course.id !== courseId);
    setEnrolledCourses(updated);
  };

  const totalCredits = enrolledCourses.reduce(
    (sum, course) => sum + (course.creditHours || 0),
    0
  );

  return (
    <div className="enrollment-list">
      <h2>Enrolled Courses</h2>
      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        <div className="listCourses">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="boxes">
              <img src={course.image} alt={course.name} />
              <h3>{course.name}</h3>
              <p>Instructor: {course.instructor}</p>
              <p>Credit Hours: {course.creditHours}</p>
              <button onClick={() => handleDrop(course.id)}>Drop Course</button>
            </div>
          ))}
        </div>
      )}
      <p style={{ marginTop: "1rem" }}>Total Enrolled Courses: {enrolledCourses.length}</p>
      <p style={{ marginTop: "1rem" }}>Total Credit Hours: {totalCredits}</p>
    </div>
  );
};

export default EnrollmentList;
