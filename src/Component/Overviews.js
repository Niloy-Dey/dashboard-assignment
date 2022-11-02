import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Overviews = () => {


    const data = [
        {
            name: 'Feb',
            uv: 4000,
            pv: 2400,
            amt: 10,
        },
        {
            name: 'Mar',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'April',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'May',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'June',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'July',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Aug',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Sep',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className='card lg:ml-4  ml-6 lg:w-[940px] w-80 bg-white lg:h-[400px]'>
            <h1 className='p-2 font-bold text-black '>Overview</h1>
            <div className='flex lg:flex-row flex-col '>


                {/* left div */}

                <div className='w-80  pl-5 pt-5 pb-5 pr-0'>
                    <div>
                        <p className='flex justify-between'><span>The Month</span></p>
                        <h4 className=' ' ><span className='text-xl font-bold'>$32,456</span> <span className='text-red-600 text-sm ml-1 bg-green-100 p-1 rounded-lg'>+2.65%</span></h4>
                       
                    </div>
                    <div className='grid grid-cols-2 gap-0  '>
                        <div className='border-r '>
                            <div className='pt-5 border-b '>
                                <div className='p-2'>
                                    <p className='text-sm text-black'>Orders</p>
                                    <h4 className="text-base text-black font-bold">5642 </h4>
                                </div>
                            </div>
                            <div className='pt-5 border-b '>
                                <div className='p-2'>
                                    <p className='text-sm text-black'>Orders</p>
                                    <h4 className="text-base text-black font-bold">5642 </h4>
                                </div>
                            </div>
                            <div className='pt-5 border-b ' >
                                <div className='p-2'>
                                    <p className='text-sm text-black'>Orders</p>
                                    <h4 className="text-base text-black font-bold">5642 </h4>
                                </div>
                            </div>
                        </div>



                        <div>
                            <div className='pt-5 border-b '>
                                <div className='p-2'>
                                    <p className='text-sm text-black'>Orders</p>
                                    <h4 className="text-base text-black font-bold">5642 </h4>
                                </div>
                            </div >
                            <div className='pt-5 border-b '>
                                <div className='p-2'>
                                    <p className='text-sm text-black'>Orders</p>
                                    <h4 className="text-base text-black font-bold">5642 </h4>
                                </div>
                            </div>
                            <div className='pt-5 border-b '>
                                <div className='p-2'>
                                    <p className='text-sm text-black'>Orders</p>
                                    <h4 className="text-base text-black font-bold">5642 </h4>
                                </div>
                            </div>
                        </div>



                        {/* <div className=''>
                            <p className='pt-3'>4K</p>
                            <p className='pt-8'>4K</p>
                            <p className='pt-14'>4K</p>
                            <p className='pt-14'>4K</p>
                        </div> */}
                    </div>

                </div>






                {/* right div  */}
                <div className='lg:w-[550px] w-[320px] h-[300px] pb-0 mb-0 '>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 1,
                                left: 20,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            {/* <Legend /> */}
                            <Bar dataKey="pv" stackId="a" fill="#FFFFFF" />
                            <Bar dataKey="amt" stackId="a" fill="#0000FF" />
                            <Bar dataKey="uv" fill="#FFFFFF" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Overviews;