import { useEffect } from 'react';
import AOS, { init } from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

//This is to conditionally display navbar, means when dashboard is to be seen the navbar should not be seen, because the dashboard has it's own navbar
//import { useLocation } from 'react-router-dom';


function App() {
  // const [loading, setLoading] = useState(true);


  // const location = useLocation();
  // const navigate = useNavigate();
  // const [cookies, removeCookie] = useCookies([]);
  // const [username, setUsername] = useState("");

  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
    </Routes>
  )
}

export default App
