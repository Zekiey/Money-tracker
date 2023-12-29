import React from 'react'
import Chart from '../components/Chart'

function Dashboard() {
    return (
        <div className='flex flex-col py-12 px-14 space-y-6'>

            <h2 className='flex space-x-8'>Dashboard</h2>

            <div className='flex space-x-8 '>
                <div className='w-2/5 h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4  text-gray-600'>
                    <span>John Doe</span>
                    <span className='text-gray-500'>Your balance:20,000 naira</span>

                </div>
                <div className='w-2/5 h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4  text-gray-600'>
                    <span>John Doe</span>
                    <span className='text-gray-500'>Your Expenses:40,000 naira</span>

                </div>

            </div>
            <div className='flex space-x-8 w-4/5 flex-col'>
                <h5 className='flex space-x-8'>Expenses Chart</h5>
                <Chart />
            </div>
            <div className='flex space-x-8'>
                <div className='w-2/5 h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 mt-5 text-gray-600'>
                    <span>Your Activity</span>
                    <li className='mt-4'>You sent 10,000 naira to your mother </li>

                </div>
                <div className='w-2/5 h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4 mt-5 text-gray-600'>
                    <span>Pending bils</span>
                    <li className='mt-4'>Electricity bill:10,000 Naira</li>

                </div>

            </div>
        </div>
    )
}

export default Dashboard