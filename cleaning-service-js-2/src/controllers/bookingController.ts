import axios from "axios";
import { AxiosResponse } from "axios";
import { IBooking } from "../interfaces";

const bookingController = {
  getAllData: async (): Promise<IBooking[]> => {
    try {
      const response: AxiosResponse<{ data: IBooking[] }> = await axios.get(
        "http://localhost:3000/data"
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },

  getAllBookings: async (): Promise<IBooking[]> => {
    try {
      const response: AxiosResponse<{ bookings: IBooking[] }> = await axios.get(
        "http://localhost:3000/data"
      );
      return response.data.bookings;
    } catch (error) {
      console.error("Error fetching bookings:", error);
      return [];
    }
  },

  getFutureBookings: async (): Promise<IBooking[]> => {
    try {
      const response: AxiosResponse<{ bookings: IBooking[] }> = await axios.get(
        "http://localhost:3000/data"
      );
      const currentDate = new Date();
      const futureBookings = response.data.bookings.filter(
        (booking) => new Date(booking.date) > currentDate
      );
      return futureBookings;
    } catch (error) {
      console.error("Error fetching future bookings:", error);
      return [];
    }
  },

  getCompletedBookings: async (): Promise<IBooking[]> => {
    try {
      const response: AxiosResponse<{ bookings: IBooking[] }> = await axios.get(
        "http://localhost:3000/data"
      );
      const currentDate = new Date();
      const completedBookings = response.data.bookings.filter(
        (booking) => new Date(booking.date) <= currentDate && booking.status
      );
      return completedBookings;
    } catch (error) {
      console.error("Error fetching completed bookings:", error);
      return [];
    }
  },

  createNewBooking: async (newBooking: IBooking): Promise<IBooking | null> => {
    try {
      console.log("Sending new booking:", newBooking);
      const response = await axios.post(
        'http://localhost:3000/data',
        newBooking
      );
      console.log("Received response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating new booking:", error);
      return null;
    }
  },

  updateBooking: async (updatedBooking: IBooking): Promise<IBooking | null> => {
    try {
      const response = await axios.put(
        `http://localhost:3000/data/${updatedBooking.id}`,
        updatedBooking
      );
      return response.data;
    } catch (error) {
      console.error("Error updating booking:", error);
      return null;
    }
  },

  deletedBooking: async (id: string): Promise<IBooking | null> => {
    try {
      const response = await axios.delete(`http://localhost:3000/data/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting booking:", error);
      return null;
    }
  },
};

export default bookingController;
