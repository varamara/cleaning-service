import { useContext } from "react";
import { BookingContext } from "../contexts/bookingContext/BookingProvider";
import { IBooking } from "../interfaces";

const UserPage: React.FC = () => {
  const { bookings } = useContext(BookingContext) as {
    bookings: IBooking[];
  };

  return (
    <>
      <section className="completed-bookings mt-40">
        <h1 className="mb-20 text-h1 font-bold text-secondaryOrange text-center">
          Mina Sidor
        </h1>
        <h2 className="text-2xl text-primaryBlue Justify-center w-1/2 mx-auto mb-5">
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
                </ul>
              </div>
            );
          }
        })}
      </section>

      <section className="future-bookings mt-20 mb-40">
        <h2 className="text-2xl text-primaryBlue justify-center w-1/2 mx-auto mb-5">
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
                </ul>
              </div>
            );
          }
        })}
      </section>
    </>
  );
};

export default UserPage;