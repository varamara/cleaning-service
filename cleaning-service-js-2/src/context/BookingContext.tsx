import { createContext} from 'react';
import { IBooking } from '../interfaces';

interface BookingContextType {
  bookings: IBooking[];
  cleaners: { id: string; name: string }[];
  setBookings: (bookings: IBooking[]) => void;
  addBooking: (booking: IBooking) => void;
  removeBooking: (id: string) => void;
  updateBooking: (updatedBooking: IBooking) => void;
  
}

export const BookingContext = createContext<BookingContextType | undefined>(undefined);