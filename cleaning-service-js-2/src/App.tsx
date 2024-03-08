import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BookingPage from "./pages/BookingPage";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/sharedcomponents/Navbar";
import Footer from "./components/sharedcomponents/Footer";

import axios from "axios";
import { useEffect } from "react";

function App() {



  const fetchData = useEffect(() => {
    axios
      .get('http://localhost:3000/data')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log("fetch failed", err)
      })
  }, []);


  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/BookingPage" element={<BookingPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
