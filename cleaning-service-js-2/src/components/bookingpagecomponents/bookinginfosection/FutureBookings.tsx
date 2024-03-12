import TrashBin from '../../../assets/delete.png';
import { IBooking } from '../../../interfaces';

interface FutureBookingsProps {
  bookings: IBooking[];
  setBooking: React.Dispatch<React.SetStateAction<IBooking[]>>;
}

const FutureBookings: React.FC<FutureBookingsProps> = ({ bookings, setBooking }) => {


  const handleRemove = (id: string) => {
    setBooking(prev => prev.filter(item => item.id !== id));
  };

  return (
    <section>
      <h2 className='text-h2 text-primaryBlue ustify-center w-1/2 mx-auto mb-5'>Kommande bokningar</h2>
      {bookings.map((book) => {
        if (new Date(book.date) > new Date()) {
        return (
          <div className='' key={book.id}>
            <ul className='bg-secondaryBlue flex justify-center items-center mx-auto rounded-lg mb-6 text-sm md:text-base lg:text-md w-5/6 md:w-3/4 lg:w-3/6 min-h-20'>
              <li className="flex-grow m-3 font-semibold ">{book.cleaner} 2h</li>
              <li className="flex-grow m-3 ">{book.grade}</li>
              <li className="flex-grow m-3">{new Date(book.date).toLocaleDateString('sv-SE')}</li>
              <li className="flex-grow m-3">{book.time}</li>
              <button className="m-3" onClick={() => handleRemove(book.id)}>
                <img className='size-5' src={TrashBin} alt="Trash bin" />
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
