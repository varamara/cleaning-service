import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";
import { IBooking, CleaningGrade } from "../../interfaces";

import axios from "axios";

interface BookingFormProps {
  setBookings: React.Dispatch<React.SetStateAction<IBooking[]>>;
  fetchData: () => void; // Inkludera fetchData som en prop
}

const BookingForm: React.FC<BookingFormProps> = ({ setBookings, fetchData }) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formValues.cleaner || !formValues.grade || !formValues.date) {
      alert("Please fill in all fields");
      return;
    }

    const newBooking: IBooking = {
      id: uuidv4(),
      cleaner: formValues.cleaner,
      grade: formValues.grade,
      date: formValues.date,
      time: formValues.time,
      customer: formValues.customer,
      status: formValues.status,
    };

    setBookings((prev: any) => [...prev, newBooking]);
    try {
      axios
        .post('http://localhost:3000/data', newBooking)
        .then((response) => {
          fetchData();
        })
        .catch((error) => console.log('Error posting data:', error));
    } catch (error) {
      console.log('Error:', error);
    }
  };


  return (
    <>
      <section className="booking-form">
        <h1>Book Cleaning</h1>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Select Cleaner</legend>
            <select name="cleaner" onChange={handleChange}>
              <option value="">Select Cleaner</option>
              <option value="cleaner1">Cleaner 1</option>
              <option value="cleaner2">Cleaner 2</option>
              <option value="cleaner3">Cleaner 3</option>
            </select>
          </fieldset>

          <fieldset>
            <legend>Select Cleaning Type</legend>
            {Object.values(CleaningGrade).map((grade) => (
              <label key={grade}>
                <input
                  type="radio"
                  name="grade"
                  value={grade}
                  checked={formValues.grade === grade}
                  onChange={handleChange}
                />
                {grade}
              </label>
            ))}
          </fieldset>

          <DatePicker selected={formValues.date} onChange={handleDateChange} />

          <input
            type="time"
            name="time"
            onChange={handleChange}
            value={formValues.time}
          />

          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default BookingForm;
