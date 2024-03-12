import { useState, useEffect } from "react";
import axios from "axios";
import BookingForm from "../components/bookingpagecomponents/BookingForm";
import CompletedBookings from "../components/bookingpagecomponents/bookinginfosection/CompletedBookings";
import FutureBookings from "../components/bookingpagecomponents/bookinginfosection/FutureBookings";
import { IBooking } from "../interfaces";

const BookingPage = () => {
  const [bookings, setBookings] = useState<Array<IBooking>>([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:3000/bookings");
      setBookings(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addBooking = async (newBooking: IBooking) => {
    try {
      await axios.post("http://localhost:3000/bookings", newBooking);
      fetchBookings();
    } catch (err) {
      console.log("post not ok", err);
    }
  };

  return (
    <>
      <BookingForm setBookings={setBookings} addBooking={addBooking} />
      <FutureBookings bookings={bookings} setBooking={setBookings} />
      <CompletedBookings />
    </>
  );
};

export default BookingPage;
