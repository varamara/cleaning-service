import BookingForm from "../components/bookingpagecomponents/BookingForm";
import CompletedBookings from "../components/bookingpagecomponents/bookinginfosection/CompletedBookings";
import FutureBookings from "../components/bookingpagecomponents/bookinginfosection/FutureBookings";
import { BookingProvider } from "../contexts/bookingContext/BookingProvider";

const BookingPage = () => {

  return (
    <BookingProvider>
      <>
        <BookingForm />
        <FutureBookings />
        <CompletedBookings />
      </>
    </BookingProvider>
  );
};

export default BookingPage;