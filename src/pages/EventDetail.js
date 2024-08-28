import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardData from '../components/CardData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function EventDetail() {
    const { academicyear, eventId } = useParams(); // Get the academic year and event ID from the URL
    const event = CardData.find(event => event.id === eventId && event.academicyear === academicyear);
    
    useEffect(() => {
        if (event) {
            // Set the document title to the event title
            document.title = event.title + " | CS Society USM";
        }
    }, [event]);

    if (!event) {
        return <div>Event not found</div>;
    }
    
    return (
        <>
            <Header />
            <div className='bg-neutral-100'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                    <p className='text-lg'>
                        ←
                        <Link to={`/events/${event.academicyear}`} className='underline underline-offset-2'>
                            Academic Session {event.academicyear.replace('-', '/')}
                        </Link>
                    </p>
                    <div className='flex flex-col md:flex-row items-start py-10'>
                        <img 
                            src={event.img} 
                            alt={event.title} 
                            className='w-full md:w-1/2 lg:w-1/3 md:mr-6 mb-4 md:mb-0' 
                        />
                        <div className='prose max-w-none ml-4'>
                            <h1 className='font-bold text-3xl'>{event.title}</h1>
                            <div className='mt-2'>
                                <span className='bg-navdropdown text-white font-bold py-1 px-2 rounded-full text-sm mr-2 w-fit inline-block'>{event.student}</span>
                                <span className='bg-secondary text-black font-bold py-1 px-2 rounded-full text-sm w-fit inline-block'>{event.tag}</span>
                            </div>
                            <div className='mt-2 py-4'>
                                <p className='font-semibold text-xl'><i className="fa fa-calendar-o pr-4" aria-hidden="true"></i>{event.date}</p>
                                <p className='font-semibold text-xl'><i className="fa fa-clock-o pr-4" aria-hidden="true"></i>{event.time}</p>
                                <p className='font-semibold text-xl'><i className="fa fa-map-marker pr-4 pl-1" aria-hidden="true"></i>{event.venue}</p>
                            </div>
                            <p className='text-lg mt-2 whitespace-pre-line'>{event.details}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
