
import { useState } from 'react'
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";

interface IBookingForm {
    cleaner: string;
    cleaningType: string;
    date: Date;
    time: string;
}


const BookingForm: React.FC<IBookingForm> = () => {

 
    const [formValues, setFormValues] = useState({
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
        console.log(formValues)
    }


    return (
        <>
            <section className="booking-form">
                <h1>Boka städning</h1>
                <p>en bokningssida</p>

                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Välj städare</legend>
                        <select onChange={handleChange} name="cleaner">
                            <option value="cleaner1">Städare 1</option>
                            <option value="cleaner2">Städare 2</option>
                            <option value="cleaner3">Städare 3</option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <legend>Välj städtyp</legend>
                        <input
                            type="radio"
                            id="cleaningType1"
                            name="cleaningType"
                            value="cleaningType1"
                            checked={formValues.cleaningType === "cleaningType1"}
                            onChange={handleChange}
                        />

                        <label htmlFor="cleaningType1">Städtyp 1</label>

                        <input
                            type="radio"
                            id="cleaningType2"
                            name="cleaningType"
                            value="cleaningType2"
                            checked={formValues.cleaningType === "cleaningType2"}
                            onChange={handleChange}
                        />

                        <label htmlFor="cleaningType2">Städtyp 2</label>

                        <input
                            type="radio"
                            id="cleaningType3"
                            name="cleaningType"
                            value="cleaningType3"
                            checked={formValues.cleaningType === "cleaningType3"}
                            onChange={handleChange}
                        />

                        <label htmlFor="cleaningType3">Städtyp 3</label>
                    </fieldset>

                    <DatePicker
                        id="date"
                        name="date"
                        selected={formValues.date}
                        // value={formValues.date} blir krullig vet ej varfor
                        onChange={handleDateChange}
                        
                    />

                    <TimePicker 
                    id="time"
                    name="time"
                    onChange={handleChange} 
                    value={formValues.time} 
                    />

                    <button type="submit">Skicka</button>
                </form>
            </section>
        </>
    )
}

export default BookingForm
