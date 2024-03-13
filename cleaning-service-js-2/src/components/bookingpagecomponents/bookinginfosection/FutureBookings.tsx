import TrashBin from "../../../assets/delete.png";
import { IBooking } from "../../../interfaces";

interface IFutureBookings {
  bookings: IBooking[];
  removeBooking: (id: string) => void;
}

const FutureBookings: React.FC<IFutureBookings> = ({
  bookings,
  removeBooking,
}) => {

  
  const handleRemove = async (bookingId: string) => {
    if (window.confirm("Are you sure you want to remove this booking?")) {
      removeBooking(bookingId);
    }
  };
  
  return (
    <section>
      <h2 className="text-h2 text-primaryBlue ustify-center w-1/2 mx-auto mb-5">
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
                <button className="m-3" onClick={() => handleRemove(book.id)}>
                  <img className="size-5" src={TrashBin} alt="Trash bin" />
                </button>
              </ul>
            </div>
          );
        }
      })}
    </section>
  );
};

export default FutureBookings;
