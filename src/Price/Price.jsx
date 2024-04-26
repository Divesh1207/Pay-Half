import React, { useState } from 'react'

const Price = ({ selectFreind }) => {
    const [Bill, setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("");

    const [whoPayBill, setWhoPayBill] = useState("user");
    const paidByFreind = Bill ? Bill - paidByUser : ""
    const getName = () => {
        return selectFreind ? selectFreind.name : "x";
    };
    return (
        <div className='bg-orange-200 text-xl mb-9  rounded-md p-32 shadow-lg'>
            <h1 className='text-white mb-4'>Split a bill with <span className='text-green-600 text-xl'>{getName()}</span></h1>
            <div className='flex justify-between '>
                <ul>
                    <li className='flex justify-between items-center'>
                        Bill Value:
                        <input type='number' className='h-7 w-full ml-2 rounded-md'></input>
                    </li>
                    <li className='flex justify-between items-center'>
                        Your Expenses:

                        <input type='number' value={Bill} onChange={(e) => setBill(Number(e.target.value > Bill ? paidByUser : Number(e.target.value)))} className='h-7 w-full ml-2 rounded-md'></input>
                    </li>
                    <li className='flex  items-center'>
                        <label className='text-green-600 text-xl'>{getName()}</label>Responses:
                        <input type='text' disabled value={paidByFreind} className=''></input>

                    </li>

                    <li className='flex justify-between items-center'>
                        Who is paying Bill:
                        <select value={whoPayBill} onChange={(e) => setWhoPayBill(e.target.value)} className='h-7 w-full ml-2 rounded-md'>

                            <option value="user">You</option>
                            <option value="freind">{getName()}</option>
                        </select>
                    </li>
                </ul>

            </div>
            <div className=''>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 mb-2 md:mb-0 md:ml-2 md:mt-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Split Value</button>
            </div>
        </div>

    )
}

export default Price
