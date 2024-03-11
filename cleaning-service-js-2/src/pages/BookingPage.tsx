import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import BookingForm from "../components/bookingpagecomponents/BookingForm";
import CompletedBookings from "../components/bookingpagecomponents/bookinginfosection/CompletedBookings";
import FutureBookings from "../components/bookingpagecomponents/bookinginfosection/FutureBookings";
import { IBooking } from "../interfaces";

const BookingPage = () => {
  const [bookings, setBookings] = useState<Array<IBooking>>([]);
  // const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response: AxiosResponse<{ booking: IBooking[] }> = await axios.get('http://localhost:3000/data');
      console.log('Data fetched successfully:', response.data.booking);
      setBookings(response.data.booking);
      // setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  
  
  return (
    <>
      <BookingForm setBooking={setBookings} fetchData={fetchData}/>
      <FutureBookings bookings={bookings} setBooking={setBookings} />
      <CompletedBookings />
    </>
  );
};

export default BookingPage;
