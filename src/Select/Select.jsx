import React, { useState } from 'react'

const Select = ({ addFriend }) => {

    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    const handleAddFriend = () => {
        addFriend({ name, image: imageUrl });
        setName('');
        setImageUrl('');
    };


    //I am lazy so i am not performing Validation stuff 



    return (
        <>
            <div className='bg-orange-200 text-2xl mt-5 rounded-md p-8 shadow-lg max-w-md ml-16'>
                <h1 className='text-white mb-4'>Split a bill with X</h1>
                <div className='flex gap-5'>
                    <ul>
                        <li className='flex items-center'>
                            Friend Name:
                            <input type='text' value={name} onChange={e => setName(e.target.value)} className='h-7 w-24 ml-2 rounded-md'></input>
                        </li>
                        <li className='flex items-center'>
                            Image Url:
                            <input type='text' value={imageUrl} onChange={e => setImageUrl(e.target.value)} className='h-7 w-36 ml-2 rounded-md'></input>
                        </li>
                        <button type="button" onClick={handleAddFriend} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 mb-2 md:mb-0 md:ml-2 md:mt-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Add</button>
                    </ul>
                </div>
            </div>


        </>
    )
}

export default Select
