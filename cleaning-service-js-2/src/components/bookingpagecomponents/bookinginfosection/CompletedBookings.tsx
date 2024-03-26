import { useContext, useState } from "react";
import { IBooking } from "../../../interfaces";
import PrimaryButton from "../../sharedcomponents/PrimaryButton";
import { BookingContext } from "../../../contexts/bookingContext/BookingProvider";

const CompletedBookings: React.FC = () => {
  const { bookings, setBookings, removeBooking } = useContext(BookingContext) as {
    bookings: IBooking[];
    setBookings: React.Dispatch<React.SetStateAction<IBooking[]>>;
    removeBooking: (id: string) => void;
  };

  const [checkedCompletedBookings, setCheckedCompletedBookings] = useState<
    string[]
  >([]);

  const handleCheck = (bookingId: string) => {
    if (checkedCompletedBookings.includes(bookingId)) {
      setCheckedCompletedBookings(
        checkedCompletedBookings.filter((id) => id !== bookingId)
      );
    } else {
      setCheckedCompletedBookings([...checkedCompletedBookings, bookingId]);
    }
  };

  const removeMarkedBookings = async () => {
    try {
      const deletionPromises = checkedCompletedBookings.map(
        async (bookingId) => {
           removeBooking(bookingId);
          return bookingId;
        }
      );

      const deletedBookingIds = await Promise.all(deletionPromises);
      const remainingBookings = bookings.filter(
        (booking) => !deletedBookingIds.includes(booking.id)
      );

      setBookings(remainingBookings);
      setCheckedCompletedBookings([]);
    } catch (error) {
      console.error("Error removing bookings:", error);
    }
  };

  return (
    <section>
      <h2 className="text-2xl text-primaryBlue ustify-center w-1/2 mx-auto mb-5">
        Utförda Bokningar
      </h2>
      {bookings.map((book) => {
        if (book.status === true) {
          return (
            <div className="" key={book.id}>
              <ul className="bg-primaryBeige text-primaryBlue flex justify-center items-center mx-auto rounded-lg mb-6 text-xs md:text-base lg:text-md w-5/6 md:w-3/4 lg:w-3/6 min-h-20">
                <li className="flex-grow m-3 font-semibold ">
                  {book.cleaner} 2h
                </li>
                <li className="flex-grow m-3 ">{book.grade}</li>
                <li className="flex-grow m-3">
                  {new Date(book.date).toLocaleDateString("sv-SE")}
                </li>
                <li className="flex-grow m-3">{book.time}</li>
                <input
                  type="checkbox"
                  className="mr-14"
                  onChange={() => handleCheck(book.id)}
                />
              </ul>
            </div>
          );
        }
      })}
      <div className="flex justify-center mx-auto mt-10 mb-20">
        <PrimaryButton
          buttonText="RADERA MARKERADE"
          onClick={removeMarkedBookings}
        />
      </div>
    </section>
  );
};

export default CompletedBookings;
