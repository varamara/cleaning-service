
import { useState } from 'react'
import DatePicker from "react-datepicker";
import TrashBin from '../../assets/delete.png'
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';



interface IBookingForm {
    id: string;
    cleaner: string;
    cleaningType: string;
    date: Date;
    time: string;
}


const BookingForm: React.FC<IBookingForm> = () => {

    const [booking, setBooking] = useState<Array<IBookingForm>>([]);
    const [formValues, setFormValues] = useState({
        cleaner: "",
        cleaningType: "",
        date: new Date(),
        time: ""
    });

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
        e.preventDefault();
    
        if (!formValues.cleaner || !formValues.cleaningType || !formValues.date) {
            alert('Vänligen fyll i alla fält');
            return;
        }
    
        const newBooking: IBookingForm = {
            id: uuidv4(),
            cleaner: formValues.cleaner,
            cleaningType: formValues.cleaningType,
            date: formValues.date,
            time: formValues.time
        }
    
        setBooking(prev => [...prev, newBooking]);
    }

    const handleRemove = (id: string) => {
        setBooking(prev => prev.filter(item => item.id !== id));
    };


    return (
        <>
            <section className="booking-form">
                <h1>Boka städning</h1>
                <p>en bokningssida</p>

                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Välj städare</legend>
                        <select
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
                            type="radio"
                            name="cleaningType"
                            value="cleaningType1"
                            checked={formValues.cleaningType === "cleaningType1"}
                            onChange={handleChange}
                        />

                        <label htmlFor="cleaningType1">Städtyp 1</label>

                        <input
                            type="radio"
                            name="cleaningType"
                            value="cleaningType2"
                            checked={formValues.cleaningType === "cleaningType2"}
                            onChange={handleChange}
                        />

                        <label htmlFor="cleaningType2">Städtyp 2</label>

                        <input
                            type="radio"
                            name="cleaningType"
                            value="cleaningType3"
                            checked={formValues.cleaningType === "cleaningType3"}
                            onChange={handleChange}
                        />

                        <label htmlFor="cleaningType3">Städtyp 3</label>
                    </fieldset>

                    <DatePicker
                        name="date"
                        selected={formValues.date}
                        // value={formValues.date} blir krullig vet ej varfor
                        onChange={handleDateChange}

                    />

                    <input type="time"
                        name="time"
                        onChange={handleChange}
                        value={formValues.time}
                    />

                    <button type="submit">Skicka</button>
                </form>
            </section>
            <section>
                <h2 className='text-h2 text-primaryBlue ustify-center w-1/2 mx-auto mb-5'>Kommande bokningar</h2>
                {booking.map((book) => {
                    return (
                        <div className=''>
                        <ul className='bg-secondaryBlue flex justify-center w-1/2 mx-auto rounded-lg mb-6' key={book.id}>
                            <li className="flex-grow m-3 font-semibold "> {book.cleaner} 2h</li>
                            <li className="flex-grow m-3 ">{book.cleaningType}</li>
                            <li className="flex-grow m-3"> {book.date.toDateString()}</li>
                            <li className="flex-grow m-3"> {book.time}</li>
                            <button className="m-3" onClick={() => handleRemove(book.id)}><img className='size-5' src={TrashBin} alt="Trash bin"/></button>
                        </ul>
                        </div>
                    )
                }
                )}
            </section>

            <section>
                <h2 className='text-h2 text-primaryBlue ustify-center w-1/2 mx-auto mt-20 mb-5'>Utförda bokningar</h2>
                
            </section>

        </>
    )
}

export default BookingForm
