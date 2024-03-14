import { useState } from "react";
import { IBooking } from "../../../interfaces";
import PrimaryButton from "../../sharedcomponents/PrimaryButton";
import axios from "axios";

interface ICompleteBookings {
  bookings: IBooking[];
  setBookings: React.Dispatch<React.SetStateAction<IBooking[]>>;
}

const CompletedBookings: React.FC<ICompleteBookings> = ({
  bookings,
  setBookings,
}) => {
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
          await axios.delete(`http://localhost:3000/bookings/${bookingId}`);
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
      <h2 className="text-h2 text-primaryBlue ustify-center w-1/2 mx-auto mb-5">
        Utförda Bokningar
      </h2>
      {bookings.map((book) => {
        if (book.status === true) {
          return (
            <div className="" key={book.id}>
              <ul className="bg-primaryBeige text-primaryBlue flex justify-center items-center mx-auto rounded-lg mb-6 text-sm md:text-base lg:text-md w-5/6 md:w-3/4 lg:w-3/6 min-h-20">
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
      <div className="justify-center w-1/2 mx-auto mb-20">
        <PrimaryButton
          buttonText="RADERA MARKERADE"
          onClick={removeMarkedBookings}
        />
      </div>
    </section>
  );
};

export default CompletedBookings;
