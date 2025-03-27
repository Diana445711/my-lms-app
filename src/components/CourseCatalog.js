import React from "react";
import CourseItem from "./CourseItem";
import courses from "../data/courses";
import "../App.css";

function CourseCatalog({ onEnroll }) {
  return (
    <div className="catalog">
      <h2>Course Catalog</h2>
      <div className="listCourses">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} onEnroll={onEnroll} />
        ))}
      </div>
    </div>
  );
}

export default CourseCatalog;