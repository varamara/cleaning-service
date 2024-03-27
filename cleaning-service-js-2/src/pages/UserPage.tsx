import { useContext } from "react";
import { BookingContext } from "../contexts/bookingContext/BookingProvider";
import { IBooking } from "../interfaces";
import UserInfo from "../components/userpagecomponents/UserInfo";

const UserPage: React.FC = () => {
  const { bookings } = useContext(BookingContext) as {
    bookings: IBooking[];
  };

  return (
    <>
      <h1 className="mt-40 text-h1 font-bold text-secondaryOrange text-center">
        Mina Sidor
      </h1>
      <div className=" mt-20 grid grid-cols-1 md:grid-cols-2">
        <div className="ml-40">
          <UserInfo />
        </div>
        <div className="mr-40">
          <section className="completed-bookings">
            <h2 className="text-2xl text-primaryBlue Justify-center w-1/2 mx-auto mb-5">
              Utförda Bokningar
            </h2>
            {bookings.map((book) => {
              if (book.status === true) {
                return (
                  <div className="" key={book.id}>
                    <ul className="bg-primaryBeige text-primaryBlue flex justify-center items-center mx-auto rounded-lg mb-6 text-sm md:text-base lg:text-md w-5/6 md:w-3/4 lg:w-3/6 min-h-20 min-w-full">
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
                    <ul className="bg-secondaryBlue flex justify-center items-center mx-auto rounded-lg mb-6 text-sm md:text-base lg:text-md w-5/6 md:w-3/4 lg:w-3/6 min-h-20 min-w-full">
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
        </div>
      </div>
    </>
  );
};

export default UserPage;
