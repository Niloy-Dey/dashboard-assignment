import React from 'react';
import image from '../Component/image/Screenshot 2022-11-02 000332.png'
const Profile = () => {
    return (
        <div className='my-5 card bg-white lg:w-72 mx-auto w-80 lg:mx-1 '>



            <div className='h-[130px] pr-3 bg-blue-400 flex justify-end text-white font-bold text-xl '>
                <p>...</p>
            </div>
            <div className='flex justify-center items-center -mt-10'>
                <img alt="" class="mask mask-circle w-32  " src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?k=20&m=1300972574&s=170667a&w=0&h=gqOEm96x85QEVJxkgdwbSpmCG1c6XS_l-9amLtuIjFE=" />
            </div>




            <div className='text-center text-black  py-4'>
                <p className='font-bold text-lg'>Jennifer Bennett</p>
                <p className='text-sm '>Product Designer</p>
            </div>





            <div className='flex justify-around items-center border-b border-1 my-5 py-4 '>
                <div className='text-center'>
                    <h2 className='font-bold text-lg text-black'>1234</h2>
                    <p className='text-sm '>Products</p>
                </div>

                <div className='text-center'>
                    <h2 className='font-bold text-lg text-black'>5.3K</h2>
                    <p className='text-sm '>Followers</p>
                </div>
            </div>




            <div className='border-b border-1 my-2 py-4'>
                <h1 className='font-bold text-black text-sm ml-4'><span>Earning</span></h1>

                <div className='text-center flex justify-center items-center'>
                    <img className='w-52' src={image} alt="" />
                </div>
            </div>




            <div className='pb-2'>
                <h1 className='font-bold text-black text-sm ml-4'><span>Recent Activity</span></h1>


                <div class="flex items-center pl-4 py-4   ">
                    <div className='bg-gray-100 text-black  rounded-xl text-sm font-bold py-2 px-3 '>
                        {/* <FaRegEnvelope /> */}
                        <p>12 <br /> sep</p>
                    </div>
                    <div className='text-black pl-3   flex justify-between  w-100'>
                        <div className='w-40'>
                            <p className='text-sm '>Polo blue T shirt </p>
                            {/* <h4 className='text-sm  font-bold' >%32,456</h4> */}
                        </div>
                    </div>
                </div>



                <div class="flex items-center pl-4 py-4   ">
                    <div className='bg-gray-100 text-black  rounded-xl text-sm font-bold py-2 px-3 '>
                        {/* <FaRegEnvelope /> */}
                        <p>11 <br /> sep</p>
                    </div>
                    <div className='text-black pl-3   flex justify-between  w-100'>
                        <div className='w-40'>
                            <p className='text-sm '>Polo blue T shirt </p>
                            <h4 className='text-sm text-blue-300 font-bold' >Read more</h4>
                        </div>
                    </div>
                </div>


                <div class="flex items-center pl-4 py-4   ">
                    <div className='bg-gray-100 text-black  rounded-xl text-sm font-bold py-2 px-3 '>
                        {/* <FaRegEnvelope /> */}
                        <p>10 <br /> sep</p>
                    </div>
                    <div className='text-black pl-3   flex justify-between  w-100'>
                        <div className='w-40'>
                            <p className='text-sm '>Polo blue T shirt </p>
                            <h4 className='text-sm  font-bold' >%32,456</h4>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Profile;