import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";
import { IBooking, CleaningGrade } from "../../interfaces";
import PrimaryButton from "../sharedcomponents/PrimaryButton";
import { BookingContext } from "../../contexts/bookingContext/BookingProvider";

const BookingForm: React.FC= () => {
  const { addBooking, cleaners, bookings } = useContext(BookingContext) as {
    addBooking: (booking: IBooking) => void;
    bookings: IBooking[];
    cleaners: { id: string; name: string }[];
  };
  
  const [formValues, setFormValues] = useState<IBooking>({
    id: "",
    cleaner: "",
    grade: CleaningGrade.Basic,
    date: new Date(),
    time: "",
    customer: "",
    status: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      date: date || new Date(),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formValues.cleaner || !formValues.grade || !formValues.date || !formValues.time) {
      alert("Please fill in all fields");
      return;
    }
  
    const isAlreadyBooked = bookings.some(
      booking =>
        booking.cleaner === formValues.cleaner &&
        new Date(booking.date).getTime() === formValues.date.getTime() && 
        booking.time === formValues.time 
    );
    
    if (isAlreadyBooked) {
      alert("Selected cleaner is already booked at the chosen date and time");
      return;
    }
    
    const newBooking: IBooking = {
      id: uuidv4(),
      date: formValues.date,
      time: formValues.time,
      customer: formValues.customer,
      grade: formValues.grade,
      cleaner: formValues.cleaner,
      status: formValues.status,
    };
    
    addBooking(newBooking);
  };

  return (
    <>
      <section className="flex items-center justify-center h-screen text-primaryBlue">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Book Cleaning</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <fieldset>
              <legend>Select Cleaner</legend>
              <select name="cleaner" onChange={handleChange}>
                <option value="">Select cleaner...</option>
                {cleaners.map((cleaner) => (
                  <option key={cleaner.id} value={cleaner.name}>
                    {cleaner.name}
                  </option>
                ))}
              </select>
            </fieldset>

            <fieldset className="mb-4 flex">
              <legend className="mb-2">Select Cleaning Type</legend>
              {Object.values(CleaningGrade).map((grade) => (
                <label
                  key={grade}
                  className="shadow-lg m-2 py-2 px-4 rounded-lg flex flex-row items-center hover:bg-primaryBlue hover:text-white duration-200 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="grade"
                    value={grade}
                    checked={formValues.grade === grade}
                    onChange={handleChange}
                    className="appearance-none checked:bg-blue-900 out-of-range:border-red-500"
                  />
                  <span className="ml-4">{grade}</span>
                </label>
              ))}
            </fieldset>
            <div className="flex justify-center">
              <DatePicker
                selected={formValues.date}
                onChange={handleDateChange}
                className="border p-2 rounded-md my-4 mx-2"
              />
              <input
                type="time"
                name="time"
                onChange={handleChange}
                value={formValues.time}
                className="border p-2 rounded-md my-4 mx-2"
              />
            </div>
            <div className="flex justify-center">
              <PrimaryButton buttonText={"BOKA STÄDNING"}/>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default BookingForm;