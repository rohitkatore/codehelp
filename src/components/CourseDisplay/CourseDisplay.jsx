import React from 'react'
import './CourseDisplay.css'
import Course from '../Course/Course.jsx'
import { useState } from 'react'

function CourseDisplay({category, courses}) {

 let [likeCourses, setLikeCourse] = useState([]);

 function getCourses(){

    if(category === "All"){ 
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach((course) => {
                allCourses.push(course);
            });
        })
        return allCourses;
     }
    else{
        return courses[category];
    }
   
}


  return (
    <div className="course-display">
      {
                getCourses().map( (course) => (
                    <Course key={course.id} 
                     course = {course}
                     likeCourses = {likeCourses}
                     setLikeCourse = {setLikeCourse} />
                ))
            }
    </div>
  )
}

export default CourseDisplay
