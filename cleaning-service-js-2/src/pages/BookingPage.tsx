import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import BookingForm from "../components/bookingpagecomponents/BookingForm";
import CompletedBookings from "../components/bookingpagecomponents/bookinginfosection/CompletedBookings";
import FutureBookings from "../components/bookingpagecomponents/bookinginfosection/FutureBookings";
import { IBooking, ICleanersInfo } from "../interfaces";

const BookingPage = () => {
  const [bookings, setBookings] = useState<Array<IBooking>>([]);
  const [cleaners, setCleaners] = useState<Array<ICleanersInfo>>([]);

  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response: AxiosResponse<{ booking: IBooking[], cleaner: ICleanersInfo[] }> = await axios.get('http://localhost:3000/data');
      setBookings(response.data.booking);
      setCleaners(response.data.cleaner);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const postBooking = async (newBooking: IBooking) => {
    try {
      await axios.post('http://localhost:3000/data', { booking: newBooking });
      fetchData();
      setBookings((prev: any) => [...prev, newBooking]);
    } catch (error) {
      console.log('Error posting data:', error);
    }
  };
  
  
  return (
    <>
      <BookingForm setBookings={setBookings} postBooking={postBooking} cleaners={cleaners} />
      <FutureBookings bookings={bookings} setBooking={setBookings} />
      <CompletedBookings />
    </>
  );
};

export default BookingPage;
