import React, { ReactNode, useState, useEffect, createContext } from "react";
import { IBooking } from "../../interfaces";
import axios from "axios";

// TODO funktionalitetr så bokningen som görs i gränssnittet kopplas till currentUser
// TODO Ska inte gå att dubbelboka -----GJORD
// TODO validering på login, registering och bokningsformulär --- Sebastian
// TODO med CSS, landingpage och bookingpage -- Fixat startsidan så det ser bättre ut, utveckla senare om det finns tid
// TODO så man kommer till mina sidor via url mina-sidor när man är inloggad --- Mikah
// TODO så att man bara kan välja halvtimmar inte minuter i bokningsformuläret



interface BookingContextType {
  bookings: IBooking[];
  cleaners: { id: string; name: string }[];
  setBookings: (bookings: IBooking[]) => void;
  addBooking: (booking: IBooking) => void;
  removeBooking: (id: string) => void;
  updateBooking: (updatedBooking: IBooking) => void;
}

export const BookingContext = createContext<BookingContextType>({
  bookings: [],
  cleaners: [],
  setBookings: () => {},
  addBooking: () => {},
  removeBooking: () => {},
  updateBooking: () => {},
});

export const BookingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [bookings, setBookings] = useState<Array<IBooking>>([]);
  const [cleaners, setCleaners] = useState([]);

  useEffect(() => {
    fetchBookings();
    fetchCleaners();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:3000/bookings");
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const fetchCleaners = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cleaners");
      setCleaners(response.data);
    } catch (error) {
      console.error("Error fetching cleaners:", error);
    }
  };

  const addBooking = async (newBooking: IBooking) => {
    try {
      await axios.post("http://localhost:3000/bookings", newBooking);
      
      fetchBookings();
    } catch (error) {
      console.error("Error adding booking:", error);
    }

  };

  const removeBooking = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/bookings/${id}`);
      fetchBookings();
    } catch (error) {
      console.error("Error removing booking:", error);
    }
  };

  const updateBooking = async (updatedBooking: IBooking) => {
    try {
      await axios.put(
        `http://localhost:3000/bookings/${updatedBooking.id}`,
        updatedBooking
      );
      fetchBookings();
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  return (
    <BookingContext.Provider
      value={{
        cleaners,
        bookings,
        setBookings,
        addBooking,
        removeBooking,
        updateBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
