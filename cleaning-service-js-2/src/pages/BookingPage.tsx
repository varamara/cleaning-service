import { useState, useEffect } from "react";
import BookingForm from "../components/bookingpagecomponents/BookingForm";
import CompletedBookings from "../components/bookingpagecomponents/bookinginfosection/CompletedBookings";
import FutureBookings from "../components/bookingpagecomponents/bookinginfosection/FutureBookings";
import { IBooking } from "../interfaces";
import bookingController from "../controllers/bookingController";

const BookingPage = () => {
  const [bookings, setBookings] = useState<Array<IBooking>>([]);
  // const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const bookingsData = await bookingController.getAllBookings();
      setBookings(bookingsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }


  

  
  
  return (
    <>
      <BookingForm bookings={bookings} setBookings={setBookings} />
      <FutureBookings bookings={bookings} setBookings={setBookings} />
      <CompletedBookings />
    </>
  );
};

export default BookingPage;
