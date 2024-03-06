
import "./App.css";
import BookingPage from "./pages/BookingPage";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/sharedcomponents/Navbar";
import Footer from "./components/sharedcomponents/Footer";
function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <BookingPage />
      <Footer />
    </>
  );
}

export default App;
