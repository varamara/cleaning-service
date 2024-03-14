import { IBooking } from "../../../interfaces";

interface ICompleteBookings {
  bookings: IBooking[];
}


const CompletedBookings: React.FC<ICompleteBookings> = ({ 
  bookings 
}) => {
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
                 <input type="checkbox" className="mr-14" />
              </ul>
            </div>
          );
        }
      })}
    </section>
  )
}

export default CompletedBookings