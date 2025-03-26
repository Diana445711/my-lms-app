import React, { useEffect, useState } from "react";
import courses from "../data/courses";
import testimonials from "../data/testimonials";


function MainSection() {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [randomTestimonials, setRandomTestimonials] = useState([]);

  useEffect(() => {
    setFeaturedCourses(courses.sort(() => 0.5 - Math.random()).slice(0, 3));
    setRandomTestimonials(testimonials.sort(() => 0.5 - Math.random()).slice(0, 2));
  }, []);
 
  return(
    <div>
        <main class="index">
            <section id="about">
                <h2>About LMS</h2>
                <p>The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.</p>
            </section>
        </main>

        <div>
        <h2>Featured Courses</h2>
        <table className="cv">
        <tbody>
            {featuredCourses.map((course) => (
            <tr key={course.id}>
                <td>
                <img src={course.image} alt={course.name} />
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <p>Instructor: {course.instructor}</p>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
        </div>

        <div>
        <h2>Student Testimonials</h2>
        <table className="cv">
          <tbody>
            {randomTestimonials.map((testimonial, index) => (
              <tr key={index}>
                <td>
                  <p>{testimonial.studentName}</p>
                  <p>{testimonial.review}</p>
                  <p className="text-yellow-500">
                    {"★".repeat(Math.round(testimonial.rating)) + "☆".repeat(5 - Math.round(testimonial.rating))}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div> 
  );

};

export default MainSection;