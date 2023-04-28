import Navbar from './navbar';
// import React from 'react';
import banner from '../assets/banner.png';
import { BsFillPeopleFill } from 'react-icons/bs';
import { AiOutlineSearch, AiFillCaretDown } from 'react-icons/ai';
// import Postpage from './postpage';
import car from '../assets/postimg/3.png'
import PostsList from './posts/postList';
import PageNav from './pagenav';
import Location from './location';

function Page() {
    return (
        <div className="w-screen h-screen relative">
            <Navbar />
            <div className="right-0 left-0 ">
                <img src={banner} alt="logo" className="mx-auto" />
            </div>
            <PageNav />
            <div className="flex flex-2 flex-row justify-between lg:mx-52">
                <PostsList />
                <Location />
            </div>
        </div>
    );
}

export default Page;
