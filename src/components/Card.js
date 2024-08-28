import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleClick = (path) => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        navigate(path); // Navigate to the path
    };

    return (
        <>
            {props.details.map((value, index) => (
                <div
                    key={index}
                    className="group w-full border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 relative h-full flex flex-col justify-between"
                >
                    <div className="relative h-72 overflow-hidden">
                        <img
                            src={value.img}
                            alt="Event Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-white bg-opacity-20 flex items-center justify-center opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-opacity duration-100">
                            <button
                                className="bg-teal-700 text-white py-2 px-6 rounded-full hover:scale-110 hover:bg-teal-900 font-semibold transition duration-100 "
                                onClick={() => handleClick(`/events/${value.academicyear}/${value.id}`)} 
                            >
                                See more
                            </button>
                        </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                        <div className="flex h-full">
                            {/* Date Section */}
                            <div className="flex flex-col justify-center items-center w-1/4 border-r-2 border-gray-300 pr-4">
                                <p className="text-2xl font-bold">{value.month}</p>
                                <p className="text-2xl font-bold">{value.day}</p>
                                <p className="text-2xl font-bold">{value.year}</p>
                            </div>

                            {/* Description Section */}
                            <div className="pl-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold cursor-pointer" onClick={() => handleClick(`/events/${value.academicyear}/${value.id}`)} >{value.title}</h3>
                                    <p className="text-base mt-2">{value.description}</p>
                                </div>
                                <div className="mt-4">
                                    <div className="bg-navdropdown text-white font-bold py-1 px-2 rounded-full text-sm mr-2 w-fit inline-block">
                                        {value.student}
                                    </div>
                                    <div className="bg-secondary text-black font-bold py-1 px-2 rounded-full text-sm w-fit inline-block mt-2">
                                        {value.tag}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Card;