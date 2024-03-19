import BookingForm from "../components/bookingpagecomponents/BookingForm";
import CompletedBookings from "../components/bookingpagecomponents/bookinginfosection/CompletedBookings";
import FutureBookings from "../components/bookingpagecomponents/bookinginfosection/FutureBookings";

const BookingPage = () => {
  return (
    <>
      <BookingForm />
      <FutureBookings />
      <CompletedBookings />
    </>
  );
};

export default BookingPage;
