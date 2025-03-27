import React, { useEffect, useState } from "react";
import courses from "../data/courses";
import testimonials from "../data/testimonials";
import ReactDOM from "react-dom";
import '../App.css';

function MainSection() {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [randomTestimonials, setRandomTestimonials] = useState([]);

  function pickingRandom(array, numberItems) {
    let random = array.slice().sort(() => Math.random() - 0.5);
    return random.slice(0, numberItems); 
  }
  
  useEffect(() => {
    const randomCourses = pickingRandom(courses, 3);
    const randomTestimonials = pickingRandom(testimonials, 2);
  
    setFeaturedCourses(randomCourses);
    setRandomTestimonials(randomTestimonials);
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
        <h2 className = "text">Featured Courses</h2>
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
        <h2 className="text">Student Testimonials</h2>
        <table className="cv">
          <tbody>
            {randomTestimonials.map((testimonial, index) => (
              <tr key={index}>
                <td>
                  <p>{testimonial.studentName}</p>
                  <p><i>{testimonial.review}</i></p>
                  <p>
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