import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import CourseDisplay from "./components/CourseDisplay/CourseDisplay";
import { categoryData } from "./assets/assets";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {api} from "./assets/assets";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [category, setCategory] = useState(categoryData[0].title);
  const [courses, setCourses] = useState([]);

  async function fetchData() {
    try {
       let response = await fetch(api);
       let data = await response.json();
       console.log(data.data);
        setCourses(data.data);       
    }
    catch(error) {
        toast.error("something went wrong");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Menu
        categoryData={categoryData}
        category={category}
        setCategory={setCategory}
      />
      <CourseDisplay courses={courses} category={category} />
    </div>
  );
}

export default App;
