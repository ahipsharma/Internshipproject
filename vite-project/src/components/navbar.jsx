import React from 'react';
import { AiOutlineSearch, AiFillCaretDown } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import logo from '../assets/logo.png';

function Navbar() {
    return (
        <div>
            <div className="hidden fixed left-0 top-0 h-[52px] lg:flex flex-col border-2 bg-white">
                <div className="flex flex-row items-center justify-between w-screen">
                    <img src={logo} alt="logo" className="pl-2 pr-2"/>
                    <div className="flex items-center border bg-[#F2F2F2] rounded-full w-full">
                        <AiOutlineSearch style={{marginLeft: '10px'}} className="cursor-pointer"/>
                        <input className="outline-none bg-[#F2F2F2] text-black w-full rounded-full p-2 w-1/2" type="text" placeholder="Search for your favorite groups in ATG" />
                    </div>
                    <span className="font-thin pl-1 pr-2">Create account. It's free!</span>
                </div>
            </div>
            <img className="lg:hidden m-auto" src={logo} alt="logo" />
        </div>
    );
}

export default Navbar;