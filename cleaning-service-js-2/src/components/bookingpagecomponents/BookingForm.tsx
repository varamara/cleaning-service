import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";
import { IBooking, CleaningGrade } from "../../interfaces";
import PrimaryButton from "../sharedcomponents/PrimaryButton";
import { BookingContext } from "../../contexts/bookingContext/BookingProvider";
import { RegistrationContext } from "../../contexts/registrationContext/RegistrationProvider";

const BookingForm: React.FC = () => {
  const { addBooking, cleaners, bookings } = useContext(BookingContext) as {
    addBooking: (booking: IBooking) => void;
    bookings: IBooking[];
    cleaners: { id: string; name: string }[];
  };
  const { currentUser } = useContext(RegistrationContext) as {
    currentUser: {
      id: string;
      bookings: IBooking[];
    };
  };

  const [formValues, setFormValues] = useState<IBooking>({
    id: "",
    userId: "",
    cleaner: "",
    grade: "",
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

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!currentUser);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!currentUser) {
      alert("Vänligen logga in för att boka stängning.");
      return;
    }

    if (!isLoggedIn) {
      alert("Vänligen logga in för att boka stängning.");
      return;
    }

    if (
      !formValues.cleaner ||
      !formValues.grade ||
      !formValues.date ||
      !formValues.time
    ) {
      alert("Vänligen fyll i alla fält för att boka städning.");
      return;
    }

    const isAlreadyBooked = bookings.some(
      (booking) =>
        booking.cleaner === formValues.cleaner &&
        new Date(booking.date).getTime() === formValues.date.getTime() &&
        booking.time === formValues.time
    );

    if (isAlreadyBooked) {
      alert(
        "Städaren är redan bokad vid vald tid. Vänligen välj en annan tid."
      );
      return;
    }

    const newBooking: IBooking = {
      id: uuidv4(),
      userId: currentUser.id,
      customer: currentUser.id,
      date: formValues.date,
      time: formValues.time,
      grade: formValues.grade,
      cleaner: formValues.cleaner,
      status: formValues.status,
    };

    addBooking(newBooking);

    setFormValues({
      id: "",
      userId: "",
      cleaner: "",
      grade: "",
      date: new Date(),
      time: "",
      customer: "",
      status: false,
    });

    alert("Bokning genomförd. Tack för ditt bokning.");
  };

  return (
    <>
      <section className="flex flex-wrap items-center justify-center h-full text-primaryBlue mx-10 mb-16 mt-44">
        <div className="bg-primaryBeige p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center">Boka Städning</h1>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <fieldset className="border-b border-primaryBlue mb-3">
              <legend className="text-xs">1. Välj städare</legend>
              <select
                className={`border p-2 rounded-md my border-primaryOrange-4 mb-6 text-sm md:text-base ${
                  isSubmitted && !formValues.cleaner ? "border-red-700" : ""
                }`}
                name="cleaner"
                onChange={handleChange}
              >
                <option value="">Välj Städare...</option>
                {cleaners.map((cleaner) => (
                  <option key={cleaner.id} value={cleaner.name}>
                    {cleaner.name}
                  </option>
                ))}
              </select>
            </fieldset>

            <fieldset className="pb-6 mb-3 grid grid-cols-2 lg:grid-cols-4 border-b border-primaryBlue ">
              <legend className="mb-2 text-xs">2. Välj tjänst</legend>
              {Object.values(CleaningGrade).map((grade) => (
                <label
                  key={grade}
                  className="text-sm md:text-base shadow-lg m-2 py-4 px-4 rounded-lg flex flex-row items-center bg-secondaryBlue hover:bg-primaryBlue hover:text-white duration-200 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="grade"
                    value={grade}
                    checked={formValues.grade === grade}
                    onChange={handleChange}
                    className={`appearance-none checked:bg-blue-900 ${
                      isSubmitted && !formValues.grade
                        ? "border-2 border-red-700"
                        : ""
                    }`}
                  />
                  <span className="ml-4">{grade}</span>
                </label>
              ))}
            </fieldset>
            <legend className="mb-2 text-xs">3. Välj datum och tid</legend>
            <div className="flex justify-center">
              <DatePicker
                selected={formValues.date}
                onChange={handleDateChange}
                className="border p-2 rounded-md my-4 mx-2 text-sm md:text-base"
              />
              <input
                type="time"
                name="time"
                onChange={handleChange}
                value={formValues.time}
                className={`border p-2 rounded-md my-4 mx-2 text-sm md:text-base ${
                  isSubmitted && !formValues.time ? "border-red-700" : ""
                } `}
              />
            </div>
            <div className="flex justify-center mt-5">
              <PrimaryButton buttonText={"BOKA STÄDNING"} />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default BookingForm;