import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';
import CardData from '../components/CardData';

export default function Events() {
    const { page } = useParams(); // Get the page number from the URL
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(Number(page) || 1);
    const cardsPerPage = 9;

    // Calculate the start and end index for slicing CardData
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    // Slice the CardData array to get only the current page's cards
    const currentCards = CardData.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(CardData.length / cardsPerPage);

    useEffect(() => {
        // Set the document title to "Events | CS Society USM"
        document.title = `Events | CS Society USM`;

        // Update the URL and scroll to the top on page change
        navigate(currentPage === 1 ? '/events' : `/events/page/${currentPage}`);
        window.scrollTo(0, 0);
    }, [currentPage, navigate]);

    // Function to handle moving to the next page
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Function to handle moving to the previous page
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <Header />
            <div className='bg-neutral-100'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                    <h1 className='font-bold text-3xl underline underline-offset-8 decoration-navdropdown decoration-4'>
                        All Events
                    </h1>
                    <br />
                    {/* Event Cards */}
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentCards.map((value, index) => (
                                <Card key={index} details={[value]} />
                            ))}
                        </div>
                        <div className="flex justify-center mt-4">
                            {currentPage > 1 && (
                                <button
                                    onClick={handlePreviousPage}
                                    className="bg-primary text-white py-3 px-4 mx-2 rounded-md hover:bg-primaryDark font-semibold active:scale-95 duration-100"
                                >
                                    ← Prev
                                </button>
                            )}
                            <button
                                className="bg-primary text-white py-3 px-4 mx-2 rounded-md hover:bg-primaryDark font-semibold active:scale-95 duration-100"
                                disabled
                            >
                                Page {currentPage}
                            </button>
                            {currentPage < totalPages && (
                                <button
                                    onClick={handleNextPage}
                                    className="bg-primary text-white py-3 px-4 mx-2 rounded-md hover:bg-primaryDark font-semibold active:scale-95 duration-100"
                                >
                                    Next →
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
