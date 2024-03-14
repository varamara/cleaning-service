import { useState } from "react";
import TrashBin from "../../../assets/delete.png";
import { IBooking } from "../../../interfaces";
import PrimaryButton from "../../sharedcomponents/PrimaryButton";
import axios from "axios";

interface IFutureBookings {
  bookings: IBooking[];
  removeBooking: (id: string) => void;
  setBookings: React.Dispatch<React.SetStateAction<IBooking[]>>;
}

const FutureBookings: React.FC<IFutureBookings> = ({
  bookings,
  setBookings,
  removeBooking,
}) => {
  const [checkedFutureBookings, setCheckedFutureBookings] = useState<string[]>(
    []
  );

  const handleRemove = (bookingId: string) => {
    if (window.confirm("Are you sure you want to remove this booking?")) {
      removeBooking(bookingId);
    }
  };

  const handleCheck = (bookingId: string) => {
    if (checkedFutureBookings.includes(bookingId)) {
      setCheckedFutureBookings(
        checkedFutureBookings.filter((id) => id !== bookingId)
      );
    } else {
      setCheckedFutureBookings([...checkedFutureBookings, bookingId]);
    }
  };

  const markAsCompleted = async () => {
    try {
      const markedBookings = bookings.filter((booking) =>
        checkedFutureBookings.includes(booking.id)
      );

      const updatePromises = markedBookings.map(async (booking) => {
        try {
          const updatedBooking = { ...booking, status: true };

          await axios.put(
            `http://localhost:3000/bookings/${booking.id}`,
            updatedBooking
          );

          return updatedBooking;
        } catch (error) {
          console.error(`Error updating booking ${booking.id}:`, error);
          return null;
        }
      });

      const updatedBookings = await Promise.all(updatePromises);

      const filteredUpdatedBookings = updatedBookings.filter(
        (booking) => booking !== null
      );
      setBookings((prevBookings) =>
        prevBookings.map(
          (prevBooking) =>
            filteredUpdatedBookings.find(
              (booking) => booking?.id === prevBooking.id
            ) || prevBooking
        )
      );

      setCheckedFutureBookings([]);
    } catch (error) {
      console.error("Error updating bookings:", error);
    }
  };

  return (
    <section className="mb-20">
      <h2 className="text-h2 text-primaryBlue justify-center w-1/2 mx-auto mb-5">
        Kommande bokningar
      </h2>
      {bookings.map((book) => {
        if (book.status === false) {
          return (
            <div className="" key={book.id}>
              <ul className="bg-secondaryBlue flex justify-center items-center mx-auto rounded-lg mb-6 text-sm md:text-base lg:text-md w-5/6 md:w-3/4 lg:w-3/6 min-h-20">
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
                  className="m-3"
                  onChange={() => handleCheck(book.id)}
                />
                <button className="m-3" onClick={() => handleRemove(book.id)}>
                  <img className="size-5" src={TrashBin} alt="Trash bin" />
                </button>
              </ul>
            </div>
          );
        }
      })}
      <div className="justify-center w-1/2 mx-auto mb-5">
        <PrimaryButton
          buttonText="MARKERA SOM UTFÖRDA"
          onClick={markAsCompleted}
        />
      </div>
    </section>
  );
};

export default FutureBookings;
