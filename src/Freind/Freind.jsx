import React, { useState } from 'react';
//Every Thing is about State and Functions


const Friends = ({ Data, handleShow, onSelection }) => {
    const [buttonStates, setButtonStates] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(true);

    // Function to toggle the modal state
    const handleButtonClick = () => {
        if (handleShow) {
            handleShow();
            // Call external handleShow if provided
        }
        setIsModalOpen(prev => !prev); // Always toggle the modal state
    };
    const toggleButton = index => {



        setButtonStates(prevStates => ({
            ...prevStates,
            [index]: !prevStates[index]
        }));
    };

    return (
        <>
            <div className='bg-slate-500 p-4'>
                {Data.map((friend, index) => (
                    <div key={index} className='rounded-md max-w-md flex flex-col md:flex-row justify-between items-center mt-3 bg-slate-200 md:flex-wrap md:p-4'>
                        <img className="w-16 h-16 object-cover rounded-full md:w-24 md:h-24 md:mr-4" src={friend.image} alt={friend.name} />
                        <div className='flex flex-col text-center md:text-left'>
                            <p className='text-xl font-bold'>{friend.name}</p>
                            <p className='text-red-500'>{friend.title}</p>
                        </div>

                        <button
                            type="button"
                            onClick={() => toggleButton(index, onSelection(friend))}


                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            {buttonStates[index] ? "Close" : "Select"}
                        </button>
                    </div>
                ))}


                <div className='mt-4'>
                    <button
                        type="button"
                        onClick={handleButtonClick}

                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        {isModalOpen ? "Add Freind" : "Close"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Friends;
