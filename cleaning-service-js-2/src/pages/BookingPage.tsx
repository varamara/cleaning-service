import { useState, useEffect } from "react";
import axios from "axios";
import BookingForm from "../components/bookingpagecomponents/BookingForm";
import CompletedBookings from "../components/bookingpagecomponents/bookinginfosection/CompletedBookings";
import FutureBookings from "../components/bookingpagecomponents/bookinginfosection/FutureBookings";
import { IBooking } from "../interfaces";

const BookingPage = () => {
  const [bookings, setBookings] = useState<Array<IBooking>>([]);
  const [cleaners, setCleaners] = useState([]);

  useEffect(() => {
    fetchBookings();
    fetchCleaners();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:3000/bookings");
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const fetchCleaners = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cleaners");
      setCleaners(response.data);
    } catch (error) {
      console.error("Error fetching cleaners:", error);
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

  const removeBooking = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/bookings/${id}`);
      fetchBookings();
      console.log("booking deleted", bookings)
    } catch (err) {
      console.log("delete not ok", err);
    }
  }


  return (
    <>
      <BookingForm addBooking={addBooking} cleaners={cleaners} />
      <FutureBookings bookings={bookings} setBookings={setBookings} removeBooking={removeBooking} />
      <CompletedBookings bookings={bookings}/>
    </>
  );
};

export default BookingPage;
