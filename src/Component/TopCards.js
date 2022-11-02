import React from 'react';
import { FaRegEnvelope,FaRegistered,FaRegUser } from 'react-icons/fa';

const TopCards = () => {
    return (
        <div className='my-5 grid lg:grid-cols-3  items-center  lg:mx-4  mx-6'>
            <div class="card lg:w-[300px] w-80   bg-base-100 shadow-xl">
                <div class="flex items-center pl-5 py-5 ">
                    <div className='bg-blue-500 text-white  rounded-xl text-xl p-5 m-3'>
                        <FaRegistered/>
                    </div>
                    <div className='text-black '>
                        <p>Revenue</p>
                        <h4 className=' ' ><span className='text-xl font-bold'>$32,456</span> <span className='text-red-600 text-sm ml-10 bg-slate-100 p-1 rounded-md'>+2.65%</span></h4>
                    </div>
                </div>
            </div>


            <div class="card lg:w-[300px] w-80   my-4 lg:my-0  lg:ml-3 bg-base-100 shadow-xl">
                <div class="flex items-center pl-5 py-5 ">
                    <div className='bg-blue-500 text-white  rounded-xl text-xl p-5 m-3'>
                        <FaRegEnvelope/>
                    </div>
                    <div className='text-black '>
                        <p>Orders</p>
                        <h4 className=' ' ><span className='text-xl font-bold'>32,456</span> <span className='text-red-600 text-sm ml-10 bg-slate-100 p-1 rounded-md'>+2.65%</span></h4>
                    </div>
                </div>
            </div>


            
            <div class="card lg:w-[300px] w-80    my-4 lg:my-0   lg:ml-3  bg-base-100 shadow-xl">
                <div class="flex items-center pl-5 py-5 ">
                    <div className='bg-blue-500 text-white  rounded-xl text-xl p-5 m-3'>
                        <FaRegUser/>
                    </div>
                    <div className='text-black '>
                        <p>Customers</p>
                        <h4 className=' ' ><span className='text-xl font-bold'>32,456</span> <span className='text-red-600 text-sm ml-10 bg-slate-100 p-1 rounded-md'>+2.65%</span></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCards;