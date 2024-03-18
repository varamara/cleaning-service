import React, { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';
import { IBooking } from '../interfaces';

interface BookingContextType {
  bookings: IBooking[];
  setBookings: Dispatch<SetStateAction<IBooking[]>>;
  addBooking: (booking: IBooking) => void;
  removeBooking: (id: number) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingContext must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  const addBooking = (booking: IBooking) => {
    setBookings(prevBookings => [...prevBookings, booking]);
  };

  const removeBooking = (id: number) => {
    setBookings(prevBookings => prevBookings.filter(booking => booking.id !== id));
  };

  return (
    <BookingContext.Provider value={{ bookings, setBookings, addBooking, removeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
