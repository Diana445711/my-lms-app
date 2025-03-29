
import React, { useState } from "react";
import Header from "./components/Header";
import CourseCatalog from "./components/CourseCatalog";
import EnrollmentList from "./components/EnrollmentList";
import Footer from "./components/Footer";

function CoursesPage() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (course) => {
    const alreadyEnrolled = enrolledCourses.some(c => c.id === course.id);
    if (!alreadyEnrolled) {
      const updated = [...enrolledCourses, { ...course, creditHours: 3 }];
      setEnrolledCourses(updated);
    }
  };

  return (
    <div>
      <Header/>
      <CourseCatalog onEnroll={handleEnroll} />

      <EnrollmentList
        enrolledCourses={enrolledCourses}
        setEnrolledCourses={setEnrolledCourses}
      />
      <Footer/>
    </div>
  );
}

export default CoursesPage;


