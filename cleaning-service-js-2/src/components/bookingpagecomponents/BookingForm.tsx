
import { useState } from 'react'
import { Datepicker } from 'flowbite-react';
interface IBookingForm {

}


const BookingForm: React.FC<IBookingForm> = () => {

    const [formValues, setFormValues] = useState({
        cleaner: "",
        cleaningType: "",
        date: "",
        time: ""
    })

    const handleSubmit = () => {

    }

    const handleCleanerChange = () => {

    }

    const handleCleaningTypeChange = () => {

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }


    return (
        <>
            <section className="booking-form">
                <h1>Boka städning</h1>
                <p>en bokningssida</p>

                <form onSubmit={handleSubmit}>
                    <fieldset onChange={handleCleanerChange}>
                        <legend>Välj städare</legend>
                        <select name="cleaner" onChange={handleChange}>
                            <option value="cleaner1">Städare 1</option>
                            <option value="cleaner2">Städare 2</option>
                            <option value="cleaner3">Städare 3</option>
                        </select>
                    </fieldset>

                    <fieldset onChange={handleCleaningTypeChange}>
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
                    <Datepicker
                        name="date"
                        value={formValues.date}
                        onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
                    />
                    <button type="submit">Skicka</button>
                </form>
            </section>
        </>
    )
}

export default BookingForm
