import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BookingPage from "./pages/BookingPage";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/sharedcomponents/Navbar";
import Footer from "./components/sharedcomponents/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/BookingPage" element={<BookingPage />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
