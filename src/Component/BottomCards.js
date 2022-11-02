import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const COLORS = ['#0088FE', '#FFFFFF', '#FFBB28', '#FF8042'];


const BottomCards = () => {

    const data1 = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const data2 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    return (
        <div className='flex items-center lg:flex-row  flex-col justify-center p-5'>
            <div className='card bg-white  lg:w-[300px]  w-80  h-[350px]    p-5'>
                <h1 className='mb-2 flex justify-between'  ><span className=' font-bold text-black '>Top Cards </span><span className='text-sm '>Monthly</span></h1>
                <div>
                    <p className='flex justify-between text-sm '><span>The Month</span></p>
                    <h4 className=' ' ><span className='text-lg font-bold'>$32,456</span></h4>
                    <div className='flex justify-end text-sm '>
                        <p className='mr-3'><input type="" checked="checked" class=" checkbox  bg-blue-500 checkbox-xs" />Current </p>
                        <p><input type="" checked="checked" class="checkbox bg-red-500 checkbox-xs" />Previous </p>

                    </div>
                </div>
                <AreaChart width={280} height={200} data={data1}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>

            {/* pi chart start here  */}
            <div className='card bg-white mt-3 lg:mt-0 lg:w-[300px] w-80  h-[350px]  lg:ml-5  p-3'>
                <h1 className='text-black font-bold '>Order Status</h1>
                <PieChart width={350} height={250} >
                    <Pie
                        data={data2}
                        cx={150}
                        cy={150}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data2.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>

                </PieChart>
                <div className='flex justify-between items-center mt-2 text-black '>
                    <p>Completed</p>
                    <p>Pending</p>
                    <p>Cancel</p>
                </div>
            </div>



            <div className='card bg-white w-80 mt-3 lg:mt-0 lg:w-[300px] h-[350px]  lg:ml-5  '>
                <h1 className='px-3 pt-5 flex justify-between'  ><span className=' font-bold text-black '>Top Products </span><span className='text-sm '>Monthly</span></h1>




                <div class="flex items-center pl-4 py-4   ">
                    <div className='bg-blue-500 text-white  rounded-xl text-lg py-2 px-3 '>
                        {/* <FaRegEnvelope /> */}
                        #1
                    </div>
                    <div className='text-black pl-3   flex justify-between  w-100'>
                        <div className='w-40'>
                            <p className='text-sm '>Polo blue T shirt </p>
                            <h4 className='text-sm  font-bold' >%32,456</h4>
                        </div>
                        <p className='text-black text-sm  bg-slate-100 p-1 h-[25px] rounded-lg '>+2.65%</p>
                    </div>
                </div>

                
                <div class="flex items-center pl-4 py-4   ">
                    <div className='bg-blue-500 text-white  rounded-xl text-lg py-2 px-3 '>
                        {/* <FaRegEnvelope /> */}
                        #2
                    </div>
                    <div className='text-black pl-3   flex justify-between  w-100'>
                        <div className='w-40'>
                            <p className='text-sm '>Polo blue T shirt </p>
                            <h4 className='text-sm  font-bold' >%32,456</h4>
                        </div>
                        <p className='text-black text-sm  bg-slate-100 p-1 h-[25px] rounded-lg '>+2.65%</p>
                    </div>
                </div>
                <div class="flex items-center pl-4 py-4   ">
                    <div className='bg-blue-500 text-white  rounded-xl text-lg py-2 px-3 '>
                        {/* <FaRegEnvelope /> */}
                        #3
                    </div>
                    <div className='text-black pl-3   flex justify-between  w-100'>
                        <div className='w-40'>
                            <p className='text-sm '>Polo blue T shirt </p>
                            <h4 className='text-sm  font-bold' >%32,456</h4>
                        </div>
                        <p className='text-black text-sm  bg-slate-100 p-1 h-[25px] rounded-lg '>+2.65%</p>
                    </div>
                </div>

                <div class="flex items-center pl-4 py-4   ">
                    <div className='bg-blue-500 text-white  rounded-xl text-lg py-2 px-3 '>
                        {/* <FaRegEnvelope /> */}
                        #4
                    </div>
                    <div className='text-black pl-3   flex justify-between  w-100'>
                        <div className='w-40'>
                            <p className='text-sm '>Polo blue T shirt </p>
                            <h4 className='text-sm  font-bold' >%32,456</h4>
                        </div>
                        <p className='text-black text-sm  bg-slate-100 p-1 h-[25px] rounded-lg '>+2.65%</p>
                    </div>
                </div>








            </div>
        </div>
    );
};

export default BottomCards;