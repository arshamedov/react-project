import React, { useState } from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import { Ticket } from '../../type';

const Home: React.FC = (): JSX.Element => {

    const {register, handleSubmit, formState:{errors}, reset} = useForm<Ticket>();

    const [tickets, setTickets] = useState<Ticket[]>([])

     const addTickets = (data:Ticket) => {
         setTickets((prevTickets) => [...prevTickets, data]);
         console.log('your tickets are booking');
         reset(); 
    }

    return (
        <div className="container">
            <header className="header">
                <h1>Ticket Booking</h1>
            </header>
            <main className="main">
                <form className="form" onSubmit={handleSubmit(addTickets)}>
                    <div>
                        <label className="label" htmlFor="event">Event:</label>
                        <select className="input" id="event" {...register('event', {required: 'fill field'})}>
                            <option value="concert">Concert</option>
                            <option value="theater">Theater</option>
                            <option value="movie">Movie</option>
                        </select>
                        {errors.event && <p>{errors.event.message}</p>}
                    </div>
                    <div>
                        <label className="label" htmlFor="date">Date:</label>
                        <input className="input" type="date" id="date"  {...register('date', {required: 'fill field'})}/>
                        {errors.date && <p>{errors.date.message}</p>}
                    </div>
                    <div>
                        <label className="label" htmlFor="tickets">Number of Tickets:</label>
                        <input className="input" type="number" id="tickets" min="1" max="10" {...register('count', {required: 'fill field'})}/>
                        {errors.count && <p>{errors.count.message}</p>}
                    </div>
                    <button className="button" type="submit">Booking Now</button>
                </form>
                 <div className="ticket-list">
                    <h2>Booked Tickets</h2>
                    <ul>
                        {tickets.map((ticket, index) => (
                            <li key={index}>{`Event: ${ticket.event}, Date: ${ticket.date}, Quantity: ${ticket.count}`}</li>
                        ))}
                    </ul>
                </div>
            </main>
            <footer className="footer">
                <p>&copy; 2024 Ticket Booking Inc.</p>
            </footer>
        </div>
    );
};

export default Home;
