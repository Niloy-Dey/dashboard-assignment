import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import BottomCards from './BottomCards';
import Overviews from './Overviews';
import Profile from './Profile';
import TopCards from './TopCards';

const SideNav = () => {
    return (
        <div>
            <div class="drawer drawer-mobile ">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h1 className='text-xl text-black font-bold pl-4  py-2'>Dashboard</h1>
                    <div className='flex lg:flex-row flex-col-reverse '>
                        <div>
                            <TopCards></TopCards>

                            <Overviews></Overviews>

                            <BottomCards></BottomCards>
                        </div>
                        {/* profile section */}
                        <div>
                            <Profile></Profile>
                        </div>
                    </div>
                </div>
                <div class="drawer-side ">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-52 bg-slate-800  text-white">
                        <li> <Link to="/sideNav/topCard">Example 1</Link></li>

                        <li><a>Example 3</a></li>
                        <li><a>Example 4</a></li>
                        <li><a>Example 5</a></li>
                        <li><a>Example 6</a></li>
                        <li><a>Example 7</a></li>
                        <li><a>Example 8</a></li>
                        <li><a>Example 9</a></li>
                        <li><a>Example 10</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideNav;