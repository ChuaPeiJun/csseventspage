import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';
import CardData from '../components/CardData';
import { Link } from 'react-router-dom';

export default function Academic() {
    const { academicyear } = useParams(); // Get the academic year from the URL

    // Filter CardData to get only the cards for the given academic year
    const filteredCards = CardData.filter(card => card.academicyear === academicyear);

    useEffect(() => {
        // Set the document title to "Academic Session [Year] | CS Society USM"
        document.title = `Academic Session ${academicyear.replace('-', '/')} | CS Society USM`;
    }, [academicyear]);

    return (
        <>
            <Header />
            <div className='bg-neutral-100'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                    <p className='text-lg'>
                        ←
                        <Link to={`/events`} className='underline underline-offset-2'>
                            Events
                        </Link>
                    </p>
                    <div className='mt-6'>
                    <h1 className='font-bold text-2xl underline underline-offset-8 decoration-navdropdown decoration-4'>
                        Academic Session {academicyear.replace('-', '/')}
                    </h1>
                    <br />
                    {/* Event Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCards.map(value => (
                            <Card key={value.id} details={[value]} />
                        ))}
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
