import axios from "axios";
import { AxiosResponse } from "axios";
import { IBooking } from "../interfaces";

const bookingController = {

    getAllData: async (): Promise<IBooking[]> => {
        try {
            const response: AxiosResponse<{ data: IBooking[] }> = await axios.get('http://localhost:3000/data');
            return response.data.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    },

    getAllBookings: async (): Promise<IBooking[]> => {
        try {
            const response: AxiosResponse<{ bookings: IBooking[] }> = await axios.get('http://localhost:3000/data');
            return response.data.bookings;
        } catch (error) {
            console.error('Error fetching bookings:', error);
            return [];
        }
    
    },
    
    deleteBooking: async () => {

    }

}



export default bookingController;