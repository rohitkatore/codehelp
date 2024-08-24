import React from 'react'
import './Course.css'
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Course({course,setLikeCourse,likeCourses}) {
  const handleLikeClick = () => {
    if(likeCourses.includes(course.id)) {
      setLikeCourse( (prev) => prev.filter( (cid) => (cid !== course.id) ) );
      toast.warning("like removed");
   }
  else {
      if(likeCourses.length === 0) {
          setLikeCourse( [course.id]);
    
       }
      else {
          setLikeCourse((prev) => [...prev, course.id]);
      } 

      toast.success("Liked Successfully");
      
  } 
  }
  return (
    <div className="course">
            <div className="relative ">
                <img src={course.image.url}></img>

                <div className="course-btn"> 
                    <button onClick={handleLikeClick}>
                        {
                            likeCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) :  (<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                            
                    </button>
                   
                </div>

            </div>

            <div className="card-info">
                <p className="course-title">{course.title}</p>
                <p className="course-desc">
                        {
                            course.description.length > 100 ? 
                            (course.description.substr(0,100)) + "..." :
                            (course.description)
                        }
                </p>

            </div>


        </div>
  )
}

export default Course
