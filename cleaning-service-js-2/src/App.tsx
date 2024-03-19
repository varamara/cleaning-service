import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BookingPage from "./pages/BookingPage";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/sharedcomponents/Navbar";
import Footer from "./components/sharedcomponents/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterAccountPage from "./pages/RegisterAccountPage";
import { RegistrationProvider } from "./contexts/registrationContext/RegistrationProvider";
import UserPage from "./pages/UserPage";
import { BookingProvider } from "./contexts/bookingContext/BookingProvider";

function App() {
  return (
    <>
      <BookingProvider>
        <RegistrationProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterAccountPage />} />
              <Route path="/mina-sidor" element={<UserPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </RegistrationProvider>
      </BookingProvider>
    </>
  );
}

export default App;
