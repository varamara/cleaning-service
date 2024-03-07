
import { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



interface IBookingForm {
    id: number;
    cleaner: string;
    cleaningType: string;
    date: Date;
    time: string;
}


const BookingForm: React.FC<IBookingForm> = () => {

    const [booking, setBooking] = useState<Array<IBookingForm>>([]);
    const [formValues, setFormValues] = useState({
        id: "",
        cleaner: "",
        cleaningType: "",
        date: new Date(),
        time: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.currentTarget
        setFormValues({
            ...formValues,
            [name]: value
        })
        console.log(formValues)
    }

    const handleDateChange = (date: Date | null) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            date: date || new Date(),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
       const newBooking: IBookingForm = {
            id: Math.random() * 1000,
            cleaner: formValues.cleaner,
            cleaningType: formValues.cleaningType,
            date: formValues.date,
            time: formValues.time
       }

       setBooking ( prev => [...prev, newBooking])
    }


    return (
        <>
            <section className="booking-form">
                <h1>Boka städning</h1>
                <p>en bokningssida</p>

                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Välj städare</legend>
                        <select 
                        id={formValues.id}
                        name="cleaner"
                        onChange={handleChange} >
                            <option value="cleaner1">Städare 1</option>
                            <option value="cleaner2">Städare 2</option>
                            <option value="cleaner3">Städare 3</option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <legend>Välj städtyp</legend>
                        <input
                            id={formValues.id}
                            type="radio"
                            name="cleaningType"
                            value="cleaningType1"
                            checked={formValues.cleaningType === "cleaningType1"}
                            onChange={handleChange}
                        />

                        <label htmlFor="cleaningType1">Städtyp 1</label>

                        <input
                            id={formValues.id}
                            type="radio"
                            name="cleaningType"
                            value="cleaningType2"
                            checked={formValues.cleaningType === "cleaningType2"}
                            onChange={handleChange}
                        />

                        <label htmlFor="cleaningType2">Städtyp 2</label>

                        <input
                            id={formValues.id}
                            type="radio"
                            name="cleaningType"
                            value="cleaningType3"
                            checked={formValues.cleaningType === "cleaningType3"}
                            onChange={handleChange}
                        />

                        <label htmlFor="cleaningType3">Städtyp 3</label>
                    </fieldset>

                    <DatePicker
                        id={formValues.id}
                        name="date"
                        selected={formValues.date}
                        // value={formValues.date} blir krullig vet ej varfor
                        onChange={handleDateChange}

                    />

                    <input type="time"
                        id={formValues.id}
                        name="time"
                        onChange={handleChange}
                        value={formValues.time}
                    />

                    <button type="submit">Skicka</button>
                </form>
            </section>
            <section>
                <h3>Kommande bokningar</h3>
                    {booking.map((book) => {
                        return (
                            <div key={book.id}>
                                <p>Städare: {book.cleaner}</p>
                                <p>Städtyp: {book.cleaningType}</p>
                                <p>Datum: {book.date.toDateString()}</p>
                                <p>Tid: {book.time}</p>
                            </div>
                        )
                    }
                    )}      
            </section>

        </>
    )
}

export default BookingForm
